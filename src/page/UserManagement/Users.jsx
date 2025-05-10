import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import PageHeading from "../../shared/PageHeading";
import { ConfigProvider, Modal, Table } from "antd";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOk2 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const showModal3 = () => {
    setIsModalOpen3(true);
  };

  const dataSource = [
    {
      key: "1",
      no: "1",
      name: "Shah Aman",
      email: "shahaman@example.com",
      joinedDate: "2022-01-01",
      location: "Pakistan",
    },
    {
      key: "2",
      no: "2",
      name: "John Doe",
      email: "johndoe@example.com",
      joinedDate: "2022-02-12",
      location: "USA",
    },
    {
      key: "3",
      no: "3",
      name: "Jane Smith",
      email: "janesmith@example.com",
      joinedDate: "2022-03-15",
      location: "Canada",
    },
    {
      key: "4",
      no: "4",
      name: "Mohammed Ali",
      email: "mohammedali@example.com",
      joinedDate: "2022-04-20",
      location: "UK",
    },
    {
      key: "5",
      no: "5",
      name: "Laila Noor",
      email: "lailanoor@example.com",
      joinedDate: "2022-05-25",
      location: "India",
    },
    {
      key: "6",
      no: "6",
      name: "Ahmed Khan",
      email: "ahmedkhan@example.com",
      joinedDate: "2022-06-10",
      location: "Pakistan",
    },
    {
      key: "7",
      no: "7",
      name: "Sadia Shah",
      email: "sadiashah@example.com",
      joinedDate: "2022-07-01",
      location: "Bangladesh",
    },
    {
      key: "8",
      no: "8",
      name: "Aliya Rizvi",
      email: "aliyarizvi@example.com",
      joinedDate: "2022-08-15",
      location: "Pakistan",
    },
    {
      key: "9",
      no: "9",
      name: "Zain Baig",
      email: "zainbaig@example.com",
      joinedDate: "2022-09-22",
      location: "Saudi Arabia",
    },
    {
      key: "10",
      no: "10",
      name: "Fatima Ali",
      email: "fatimaali@example.com",
      joinedDate: "2022-10-30",
      location: "UAE",
    },
    {
      key: "11",
      no: "11",
      name: "Imran Akhtar",
      email: "imranakhtar@example.com",
      joinedDate: "2022-11-13",
      location: "Pakistan",
    },
    {
      key: "12",
      no: "12",
      name: "Sara Ahsan",
      email: "saraahsan@example.com",
      joinedDate: "2022-12-05",
      location: "Canada",
    },
    {
      key: "13",
      no: "13",
      name: "Ali Hassan",
      email: "alihassan@example.com",
      joinedDate: "2023-01-20",
      location: "Pakistan",
    },
    {
      key: "14",
      no: "14",
      name: "Maya Shahid",
      email: "mayashahid@example.com",
      joinedDate: "2023-02-11",
      location: "USA",
    },
    {
      key: "15",
      no: "15",
      name: "Omar Farooq",
      email: "omarfarooq@example.com",
      joinedDate: "2023-03-14",
      location: "UK",
    },
    {
      key: "16",
      no: "16",
      name: "Nida Khokhar",
      email: "nidakhokhar@example.com",
      joinedDate: "2023-04-05",
      location: "Pakistan",
    },
    {
      key: "17",
      no: "17",
      name: "Samar Ahmed",
      email: "samarahmed@example.com",
      joinedDate: "2023-05-17",
      location: "UAE",
    },
    {
      key: "18",
      no: "18",
      name: "Raheel Khan",
      email: "raheelkhan@example.com",
      joinedDate: "2023-06-29",
      location: "Saudi Arabia",
    },
    {
      key: "19",
      no: "19",
      name: "Hassan Raza",
      email: "hassanraza@example.com",
      joinedDate: "2023-07-22",
      location: "Pakistan",
    },
    {
      key: "20",
      no: "20",
      name: "Mariam Baig",
      email: "mariambaig@example.com",
      joinedDate: "2023-08-10",
      location: "India",
    },
    {
      key: "21",
      no: "21",
      name: "Nashit Khan",
      email: "nashitkhan@example.com",
      joinedDate: "2023-09-01",
      location: "USA",
    },
    {
      key: "22",
      no: "22",
      name: "Farhan Sadiq",
      email: "farhansadiq@example.com",
      joinedDate: "2023-10-13",
      location: "Pakistan",
    },
    {
      key: "23",
      no: "23",
      name: "Alina Noor",
      email: "alinanoor@example.com",
      joinedDate: "2023-11-05",
      location: "Canada",
    },
    {
      key: "24",
      no: "24",
      name: "Nazia Iqbal",
      email: "naziaiqbal@example.com",
      joinedDate: "2023-12-08",
      location: "UK",
    },
    {
      key: "25",
      no: "25",
      name: "Owais Malik",
      email: "owaismalik@example.com",
      joinedDate: "2024-01-12",
      location: "Pakistan",
    },
    {
      key: "26",
      no: "26",
      name: "Sana Younis",
      email: "sanayounis@example.com",
      joinedDate: "2024-02-04",
      location: "UAE",
    },
    {
      key: "27",
      no: "27",
      name: "Bilal Imran",
      email: "bilalimran@example.com",
      joinedDate: "2024-03-19",
      location: "Saudi Arabia",
    },
    {
      key: "28",
      no: "28",
      name: "Areeba Jamil",
      email: "areebajamil@example.com",
      joinedDate: "2024-04-10",
      location: "Pakistan",
    },
    {
      key: "29",
      no: "29",
      name: "Kiran Bukhari",
      email: "kiranbukhari@example.com",
      joinedDate: "2024-05-15",
      location: "India",
    },
    {
      key: "30",
      no: "30",
      name: "Usman Saeed",
      email: "usmansaeed@example.com",
      joinedDate: "2024-06-05",
      location: "Bangladesh",
    },
  ];

  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://avatar.iran.liara.run/public/${record.no}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    { title: "Joined Date", dataIndex: "joinedDate", key: "joinedDate" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex items-center gap-3">
          <button
            onClick={showModal2}
            className="border border-[#0b7bb3] text-[#0b7bb3] rounded-lg p-2 bg-[#b4e2ed]"
          >
            <FaRegEye className="w-6 h-6 text-[#0b7bb3]" />
          </button>
          <button
            onClick={showModal}
            className="border border-[#0b7bb3] text-[#0b7bb3] rounded-lg p-2 bg-[#b4e2ed]"
          >
            <FaRegTrashAlt className="w-6 h-6 text-[#0b7bb3]" />
          </button>
          <button
            onClick={showModal3}
            className="border border-[#0b7bb3] text-[#0b7bb3] rounded-lg p-2 bg-[#b4e2ed]"
          >
            <MdBlockFlipped className="w-6 h-6 text-[#0b7bb3]" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center whitespace-nowrap">
        <PageHeading title="User Management" />
        <div className="flex flex-col md:flex-row justify-end items-center text-center  gap-5  w-full">
          <div className="relative w-full sm:w-[300px] mt-5 md:mt-0 lg:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-[#0b7bb3] py-3 pl-12 pr-[65px] outline-none w-full rounded-md"
            />
            <span className=" text-gray-600 absolute top-0 left-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer">
              <IoSearch className="text-[1.3rem]" />
            </span>
          </div>
          <div className="flex items-center justify-center text-white mt-5">
            <button className="bg-[#0b7bb3]  rounded-lg px-5 py-3 text-white mb-5">
              Aprove All
            </button>
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
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
        />

        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="p-5">
            <h1 className="text-4xl text-center text-[#0D0D0D]">
              Are you sure you want to delete ?
            </h1>

            <div className="text-center py-5">
              <button
                onClick={handleOk}
                className="bg-[#0b7bb3] text-white font-semibold w-full py-2 rounded"
              >
                Yes,delete.
              </button>
            </div>
            <div className="text-center pb-5">
              <button
                onClick={handleOk}
                className="text-[#0b7bb3] border-2 border-[#0b7bb3] bg-white font-semibold w-full py-2 rounded"
              >
                No,Don’t delete
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          open={isModalOpen3}
          centered
          onCancel={handleCancel3}
          footer={null}
        >
          <div className="p-5">
            <h1 className="text-4xl text-center text-[#0D0D0D]">
              Are you sure you want to block ?
            </h1>

            <div className="text-center py-5">
              <button
                onClick={handleOk2}
                className="bg-[#0b7bb3] text-white font-semibold w-full py-2 rounded"
              >
                Yes,block
              </button>
            </div>
            <div className="text-center pb-5">
              <button
                onClick={handleOk2}
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
          onCancel={handleCancel2}
          footer={null}
        >
          <div className="p-5">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="flex flex-col items-center pt-6 pb-4">
                <div className="relative w-20 h-20 mb-3">
                  <img
                    src="https://avatar.iran.liara.run/public/1"
                    alt="Profile picture"
                    width={80}
                    height={80}
                    className="rounded-full bg-sky-200"
                  />
                </div>
                <h2 className="text-xl font-medium text-gray-800">Jon Smith</h2>
                <p className="text-gray-600 text-sm">jon@gmail.com</p>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-gray-600 font-medium mb-4">User Details</h3>

                <div className="grid grid-cols-2 gap-y-3">
                  <div className="text-gray-500">User name</div>
                  <div className="text-gray-700">Guitar Ross biyate</div>

                  <div className="text-gray-500">E-mail</div>
                  <div className="text-gray-700">rvi.54@gmail.com</div>

                  <div className="text-gray-500">Phone Number</div>
                  <div className="text-gray-700">345453211</div>

                  <div className="text-gray-500">Location</div>
                  <div className="text-gray-700">France</div>

                  <div className="text-gray-500">Joined</div>
                  <div className="text-gray-700">20-25-2025</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default Users;
