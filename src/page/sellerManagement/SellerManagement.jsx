import { ConfigProvider, Modal, Table } from "antd";
import { IoSearch } from "react-icons/io5";
import PageHeading from "../../shared/PageHeading";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";

const SellerManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const dataSource = [
    {
      key: "1",
      no: "1",
      sellerName: "Shah Aman",
      shopName: "Shop A",
      email: "johndoe@example.com",
      productCategory: "Electronics",
      phoneNumber: "johndoe@example.com",
      Distribution: "New York, USA",
      BusinessAddress: "123 Main St, New York, NY 10001",
    },
    {
      key: "2",
      no: "2",
      sellerName: "Maria Lopez",
      shopName: "Shop B",
      email: "maria@example.com",
      productCategory: "Fashion",
      phoneNumber: "maria@example.com",
      Distribution: "Los Angeles, USA",
      BusinessAddress: "456 Oak St, Los Angeles, CA 90001",
    },
    {
      key: "3",
      no: "3",
      sellerName: "John Smith",
      shopName: "Shop C",
      email: "john@example.com",
      productCategory: "Home & Garden",
      phoneNumber: "john@example.com",
      Distribution: "Chicago, USA",
      BusinessAddress: "789 Pine St, Chicago, IL 60601",
    },
    {
      key: "4",
      no: "4",
      sellerName: "Emily Davis",
      shopName: "Shop D",
      email: "emily@example.com",
      productCategory: "Health & Beauty",
      phoneNumber: "emily@example.com",
      Distribution: "San Francisco, USA",
      BusinessAddress: "101 Maple St, San Francisco, CA 94101",
    },
    {
      key: "5",
      no: "5",
      sellerName: "David Brown",
      shopName: "Shop E",
      email: "david@example.com",
      productCategory: "Sports & Outdoors",
      phoneNumber: "david@example.com",
      Distribution: "Houston, USA",
      BusinessAddress: "202 Birch St, Houston, TX 77001",
    },
    {
      key: "6",
      no: "6",
      sellerName: "Sophia Green",
      shopName: "Shop F",
      email: "sophia@example.com",
      productCategory: "Health & Beauty",
      phoneNumber: "sophia@example.com",
      Distribution: "Phoenix, USA",
      BusinessAddress: "303 Cedar St, Phoenix, AZ 85001",
    },
    {
      key: "7",
      no: "7",
      sellerName: "James Wilson",
      shopName: "Shop G",
      email: "james@example.com",
      productCategory: "Fashion",
      phoneNumber: "james@example.com",
      Distribution: "Seattle, USA",
      BusinessAddress: "404 Elm St, Seattle, WA 98101",
    },
    {
      key: "8",
      no: "8",
      sellerName: "Olivia Taylor",
      shopName: "Shop H",
      email: "olivia@example.com",
      productCategory: "Electronics",
      phoneNumber: "olivia@example.com",
      Distribution: "Miami, USA",
      BusinessAddress: "505 Willow St, Miami, FL 33101",
    },
    {
      key: "9",
      no: "9",
      sellerName: "Ethan Martinez",
      shopName: "Shop I",
      email: "ethan@example.com",
      productCategory: "Sports & Outdoors",
      phoneNumber: "ethan@example.com",
      Distribution: "Dallas, USA",
      BusinessAddress: "606 Pineapple St, Dallas, TX 75201",
    },
    {
      key: "10",
      no: "10",
      sellerName: "Ava Johnson",
      shopName: "Shop J",
      email: "ava@example.com",
      productCategory: "Home & Garden",
      phoneNumber: "ava@example.com",
      Distribution: "Austin, USA",
      BusinessAddress: "707 Palm St, Austin, TX 73301",
    },
    {
      key: "11",
      no: "11",
      sellerName: "Mason Clark",
      shopName: "Shop K",
      email: "mason@example.com",
      productCategory: "Health & Beauty",
      phoneNumber: "mason@example.com",
      Distribution: "Denver, USA",
      BusinessAddress: "808 Oakwood St, Denver, CO 80201",
    },
    {
      key: "12",
      no: "12",
      sellerName: "Isabella Lewis",
      shopName: "Shop L",
      email: "isabella@example.com",
      productCategory: "Fashion",
      phoneNumber: "isabella@example.com",
      Distribution: "Boston, USA",
      BusinessAddress: "909 Birchwood St, Boston, MA 02101",
    },
    {
      key: "13",
      no: "13",
      sellerName: "Liam Harris",
      shopName: "Shop M",
      email: "liam@example.com",
      productCategory: "Electronics",
      phoneNumber: "liam@example.com",
      Distribution: "Atlanta, USA",
      BusinessAddress: "123 Aspen St, Atlanta, GA 30301",
    },
    {
      key: "14",
      no: "14",
      sellerName: "Charlotte Robinson",
      shopName: "Shop N",
      email: "charlotte@example.com",
      productCategory: "Home & Garden",
      phoneNumber: "charlotte@example.com",
      Distribution: "Philadelphia, USA",
      BusinessAddress: "234 Chestnut St, Philadelphia, PA 19102",
    },
    {
      key: "15",
      no: "15",
      sellerName: "Lucas Walker",
      shopName: "Shop O",
      email: "lucas@example.com",
      productCategory: "Sports & Outdoors",
      phoneNumber: "lucas@example.com",
      Distribution: "Detroit, USA",
      BusinessAddress: "345 Spruce St, Detroit, MI 48201",
    },
    {
      key: "16",
      no: "16",
      sellerName: "Mila Hall",
      shopName: "Shop P",
      email: "mila@example.com",
      productCategory: "Fashion",
      phoneNumber: "mila@example.com",
      Distribution: "Portland, USA",
      BusinessAddress: "456 Fir St, Portland, OR 97201",
    },
    {
      key: "17",
      no: "17",
      sellerName: "Logan Allen",
      shopName: "Shop Q",
      email: "logan@example.com",
      productCategory: "Health & Beauty",
      phoneNumber: "logan@example.com",
      Distribution: "Indianapolis, USA",
      BusinessAddress: "567 Pinewood St, Indianapolis, IN 46201",
    },
    {
      key: "18",
      no: "18",
      sellerName: "Amelia Young",
      shopName: "Shop R",
      email: "amelia@example.com",
      productCategory: "Home & Garden",
      phoneNumber: "amelia@example.com",
      Distribution: "Charlotte, USA",
      BusinessAddress: "678 Cedarwood St, Charlotte, NC 28201",
    },
    {
      key: "19",
      no: "19",
      sellerName: "Henry Scott",
      shopName: "Shop S",
      email: "henry@example.com",
      productCategory: "Electronics",
      phoneNumber: "henry@example.com",
      Distribution: "Minneapolis, USA",
      BusinessAddress: "789 Maplewood St, Minneapolis, MN 55101",
    },
    {
      key: "20",
      no: "20",
      sellerName: "Zoe King",
      shopName: "Shop T",
      email: "zoe@example.com",
      productCategory: "Sports & Outdoors",
      phoneNumber: "zoe@example.com",
      Distribution: "San Diego, USA",
      BusinessAddress: "890 Redwood St, San Diego, CA 92101",
    },
    {
      key: "21",
      no: "21",
      sellerName: "Shah Aman",
      shopName: "Shop A",
      email: "johndoe@example.com",
      productCategory: "Electronics",
      phoneNumber: "johndoe@example.com",
      Distribution: "New York, USA",
      BusinessAddress: "123 Main St, New York, NY 10001",
    },
    {
      key: "22",
      no: "22",
      sellerName: "Maria Lopez",
      shopName: "Shop B",
      email: "maria@example.com",
      productCategory: "Fashion",
      phoneNumber: "maria@example.com",
      Distribution: "Los Angeles, USA",
      BusinessAddress: "456 Oak St, Los Angeles, CA 90001",
    },
    {
      key: "23",
      no: "23",
      sellerName: "John Smith",
      shopName: "Shop C",
      email: "john@example.com",
      productCategory: "Home & Garden",
      phoneNumber: "john@example.com",
      Distribution: "Chicago, USA",
      BusinessAddress: "789 Pine St, Chicago, IL 60601",
    },
    {
      key: "24",
      no: "24",
      sellerName: "Emily Davis",
      shopName: "Shop D",
      email: "emily@example.com",
      productCategory: "Health & Beauty",
      phoneNumber: "emily@example.com",
      Distribution: "San Francisco, USA",
      BusinessAddress: "101 Maple St, San Francisco, CA 94101",
    },
    {
      key: "25",
      no: "25",
      sellerName: "David Brown",
      shopName: "Shop E",
      email: "david@example.com",
      productCategory: "Sports & Outdoors",
      phoneNumber: "david@example.com",
      Distribution: "Houston, USA",
      BusinessAddress: "202 Birch St, Houston, TX 77001",
    },
  ];

  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Vendor Name",
      key: "sellerName",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://avatar.iran.liara.run/public/${record.no}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <span>{record.sellerName}</span>
        </div>
      ),
    },
    { title: "Shop Name", dataIndex: "shopName", key: "shopName" },
    { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
    {
      title: "Product Category",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    { title: "Distribution", dataIndex: "Distribution", key: "Distribution" },
    { title: "Location", dataIndex: "BusinessAddress", key: "BusinessAddress" },
    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div className="flex gap-2">
            <button className="border border-[#14803c] rounded-lg p-2 bg-[#d3e8e6] text-[#14803c] hover:bg-[#b4d9d4] transition duration-200">
              <FaCheck className="w-6 h-6 text-[#14803c]" />
            </button>
            <Link to="/chat">
              <button className="border border-[#14803c] rounded-lg p-2 bg-[#d3e8e6] text-[#14803c] hover:bg-[#b4d9d4] transition duration-200">
                <FaRegTrashAlt className="w-6 h-6 text-[#14803c]" />
              </button>
            </Link>
            <button
              onClick={showModal}
              className="border border-[#14803c] text-[#14803c] rounded-lg p-2 bg-[#d3e8e6] hover:bg-[#b4d9d4] transition duration-200"
            >
              <AiTwotoneEdit className="w-6 h-6 text-[#14803c]" />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center whitespace-nowrap">
        <PageHeading title="Vendor Management" />
        <div className="flex flex-col md:flex-row justify-end items-center text-center  gap-5  w-full whitespace-nowrap">
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
              + Add Vendor
            </button>
          </div>
        </div>
      </div>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#0b7bb3",
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
          scroll={false}
        />
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="p-5">
            <h1 className="text-4xl text-center text-[#0D0D0D]">
              Are you sure you want to block ?
            </h1>

            <div className="text-center py-5">
              <button
                onClick={handleOk}
                className="bg-[#14803c] text-white font-semibold w-full py-2 rounded transition duration-200"
              >
                Yes,Block
              </button>
            </div>
            <div className="text-center pb-5">
              <button
                onClick={handleOk}
                className="text-[#14803c] border-2 border-green-600 bg-white font-semibold w-full py-2 rounded transition duration-200"
              >
                No,Don’t Block
              </button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default SellerManagement;
