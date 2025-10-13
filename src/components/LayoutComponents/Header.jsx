import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Drawer } from "antd";
import logo from "../../assets/header/logo.png";
import { AdminItems } from "./SideBar";
import { useGetAdminProfileQuery } from "../../Redux/api/profileApi";
import Loader from "../../shared/Loader";

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [placement] = useState("left");


    const { data:adminData, isLoading } = useGetAdminProfileQuery();
    console.log("adminData", adminData);


    if (isLoading) {
      return <Loader />;
    }

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white text-gray-900 px-5 py-5">
      <div className="flex justify-between items-center">
        <div className="lg:hidden">
          <button
            onClick={showDrawer}
            className="p-2 rounded-md bg-[#0b7bb3] text-white hover:bg-[#0a6a99]"
            aria-label="Open menu"
            title="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <MenuOutlined className="text-white text-xl" aria-hidden="true" />
          </button>
          <Drawer
            title={
              <div className="flex justify-center">
                <img src={logo} alt="Logo" className="w-[160px]" />
              </div>
            }
            placement={placement}
            width={300}
            onClose={onClose}
            open={open}
            className="custom-drawer"
          >
            <div id="mobile-drawer" className="">
              {AdminItems.map((item) => (
                <div key={item.key}>
                  <Link
                    to={item.link}
                    className={`my-3 mx-1 py-3 px-3 flex items-center whitespace-nowrap cursor-pointer rounded-md border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7bb3] focus-visible:ring-offset-2 ${
                      selectedKey === item.key
                        ? "bg-[#0b7bb3] text-white border-[#0b7bb3]"
                        : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                    }`}
                    aria-haspopup={item.children ? "menu" : undefined}
                    aria-expanded={
                      item.children
                        ? expandedKeys.includes(item.key)
                        : undefined
                    }
                    aria-current={selectedKey === item.key ? "page" : undefined}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        onParentClick(item.key);
                      } else {
                        setSelectedKey(item.key);
                        onClose();
                      }
                    }}
                  >
                    <div>{item?.icon && <item.icon aria-hidden="true" />}</div>
                    <span className="ml-3 text-base  font-medium">
                      {item.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="custom-sidebar-footer absolute bottom-0 w-[250px] p-4">
              <button
                type="button"
                onClick={handleLogout}
                aria-label="Log out"
                title="Log out"
                className="w-full flex border-2 border-red-600 text-red-700 text-start rounded-md p-3 mt-10 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
              >
                <span className="text-xl" aria-hidden="true">
                  <LogoutOutlined />
                </span>
                <span className="ml-3">Log Out</span>
              </button>
            </div>
          </Drawer>
        </div>

        <div className="ml-auto flex items-center justify-center gap-5">
          <div className="pl-5 border-gray-600">
            <Link to={"/dashboard/Settings/profile"}>
              <div className="flex items-center gap-3">
                <img
                  src={adminData?.admin?.profilePic}
                  className="w-[40px] h-[40px] object-cover rounded-full border-2 border-[#0b7bb3]"
                  alt="User Avatar"
                />
                <div className="hidden md:flex flex-col items-start">
                  <h3 className="text-gray-800 text-sm">{adminData?.admin?.name}</h3>
                  <p className="text-xs px-2 py-1 bg-[#0b7bb3] text-white rounded">
                    {adminData?.admin?.role}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
