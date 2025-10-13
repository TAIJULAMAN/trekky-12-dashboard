import { useState } from "react";
import { SearchOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import PageHeading from "../../shared/PageHeading";
import { ConfigProvider, Modal, Table } from "antd";
import {
  useGetAllUsersQuery,
  useBlockUserMutation,
} from "../../Redux/api/user/userApi";
import Swal from "sweetalert2";

const Users = () => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isFetching } = useGetAllUsersQuery();
  // console.log("data from user page", data);
  const [blockUser, { isLoading: isBlocking }] = useBlockUserMutation();

  const handleOk2 = async () => {
    if (!selectedUser) return;
    try {
      await blockUser({ id: selectedUser.id || selectedUser._id }).unwrap();
      await Swal.fire({
        icon: "success",
        title: selectedUser.isBlocked ? "User unblocked" : "User blocked",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
    } catch (err) {
      const msg = err?.data?.message || err?.error || "Action failed";
      await Swal.fire({
        icon: "error",
        title: msg,
        confirmButtonColor: "#0b7bb3",
      });
    } finally {
      setIsModalOpen3(false);
      setSelectedUser(null);
    }
  };

  const users = data?.users || [];
  const normalizedSearch = search.trim().toLowerCase();
  const filteredUsers = normalizedSearch
    ? users.filter((u) => {
        const name = (u?.name || "").toLowerCase();
        const email = (u?.email || "").toLowerCase();
        return (
          name.includes(normalizedSearch) || email.includes(normalizedSearch)
        );
      })
    : users;
  const total = filteredUsers.length;
  const start = (page - 1) * pageSize;
  const pageSlice = filteredUsers.slice(start, start + pageSize);
  const dataSource = pageSlice.map((u, idx) => ({
    key: u?._id || start + idx,
    id: u?._id || start + idx,
    no: (start + idx + 1).toString(),
    name: u?.name || "No Name",
    email: u?.email || "No Email",
    image: u?.profilePic || "No Image",
    isBlocked: u?.isBlocked,
    joinedDate: u?.createdAt
      ? new Date(u.createdAt).toLocaleDateString()
      : "No Date",
  }));

  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={
              record.image && record.image !== "No Image"
                ? record.image
                : `https://avatar.iran.liara.run/public/${record.no}`
            }
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    { title: "Joined Date", dataIndex: "joinedDate", key: "joinedDate" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setSelectedUser(record);
              setIsModalOpen2(true);
            }}
            className="border border-[#0b7bb3] text-[#0b7bb3] rounded-lg p-2 bg-[#b4e2ed]"
          >
            <EyeOutlined className="text-[24px] text-[#0b7bb3]" />
          </button>
          <button
            onClick={() => {
              setSelectedUser(record);
              setIsModalOpen3(true);
            }}
            className="border border-[#0b7bb3] text-[#0b7bb3] rounded-lg px-3 py-1 bg-[#b4e2ed]"
          >
            {record.isBlocked ? "Unblock" : "Block"}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="px-5">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 justify-between items-start lg:items-center  mb-5">
        <div className="flex-shrink-0 w-full lg:w-auto">
          <PageHeading title="User Management" />
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-[280px] lg:w-[320px]">
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="border-2 border-[#0b7bb3] bg-[#0b7bb3] py-3 pl-12 pr-4 outline-none w-full rounded-lg text-white placeholder:text-white/80 text-sm"
            />
            <span className="text-white absolute top-0 left-0 h-full px-4 flex items-center justify-center cursor-pointer">
              <SearchOutlined className="text-lg" />
            </span>
          </div>
        </div>
      </div>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#14803c",
            },
            Pagination: {
              colorPrimaryBorder: "rgb(19,194,194)",
              colorBorder: "#0b7bb3",
              colorTextPlaceholder: "#0b7bb3",
              colorTextDisabled: "#0b7bb3",
              colorBgTextActive: "#0b7bb3",
              itemActiveBgDisabled: "#0b7bb3",
              itemActiveColorDisabled: "rgb(0,0,0)",
              itemBg: "#0b7bb3",
              colorBgTextHover: "#0b7bb3",
              colorPrimary: "#0b7bb3",
              colorPrimaryHover: "#0b7bb3",
            },
            Table: {
              headerBg: "#0b7bb3",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#0b7bb3",
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={isFetching || isBlocking}
          pagination={{
            current: page,
            pageSize,
            total,
            showSizeChanger: false,
            onChange: (p, ps) => {
              setPage(p);
              setPageSize(ps);
            },
          }}
          rowKey={(record) => record.id || record.key}
          scroll={{ x: "max-content" }}
        />

        <Modal
          open={isModalOpen3}
          centered
          onCancel={() => {
            setIsModalOpen3(false);
          }}
          footer={null}
        >
          <div className="p-5">
            <h1 className="text-4xl text-center text-[#0D0D0D]">
              {selectedUser?.isBlocked
                ? "Unblock this user?"
                : "Block this user?"}
            </h1>

            <div className="text-center py-5">
              <button
                onClick={handleOk2}
                disabled={isBlocking}
                className={`bg-[#0b7bb3] text-white font-semibold w-full py-2 rounded ${
                  isBlocking ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {selectedUser?.isBlocked ? "Yes, unblocking" : "Yes, blocking"}
              </button>
            </div>
            <div className="text-center pb-5">
              <button
                onClick={() => {
                  setIsModalOpen3(false);
                  setSelectedUser(null);
                }}
                className="text-[#0b7bb3] border-2 border-[#0b7bb3] bg-white font-semibold w-full py-2 rounded"
              >
                No,Don’t block
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          open={isModalOpen2}
          centered
          onCancel={() => {
            setIsModalOpen2(false);
          }}
          footer={null}
        >
          <div className="p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6f4f8]">
              <div className="bg-gradient-to-r from-[#b4e2ed] to-[#e6f4f8] p-6 flex flex-col items-center">
                <div className="relative w-24 h-24 mb-3">
                  <img
                    src={selectedUser?.image && selectedUser?.image !== "No Image"
                      ? selectedUser?.image
                      : `https://avatar.iran.liara.run/public/${selectedUser?.no || 1}`}
                    alt="Profile picture"
                    width={96}
                    height={96}
                    className="rounded-full object-cover border-2 border-white shadow"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-[#0D0D0D]">{selectedUser?.name || "No Name"}</h2>
                <p className="text-gray-600 text-sm">{selectedUser?.email || "No Email"}</p>
                <span className={`mt-3 text-xs px-3 py-1 rounded-full ${selectedUser?.isBlocked ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {selectedUser?.isBlocked ? 'Blocked' : 'Active'}
                </span>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-[#0D0D0D] font-medium mb-4">User Details</h3>
                <div className="grid grid-cols-2 gap-y-3">
                  <div className="text-gray-500">Name</div>
                  <div className="text-gray-800">{selectedUser?.name || "—"}</div>

                  <div className="text-gray-500">Email</div>
                  <div className="text-gray-800">{selectedUser?.email || "—"}</div>

                  <div className="text-gray-500">Joined</div>
                  <div className="text-gray-800">{selectedUser?.joinedDate || "—"}</div>

                  <div className="text-gray-500">Status</div>
                  <div className="text-gray-800">{selectedUser?.isBlocked ? 'Blocked' : 'Active'}</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default Users;
