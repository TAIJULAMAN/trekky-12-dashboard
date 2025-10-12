import { LuBell } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaCog, FaHome, FaUsers } from "react-icons/fa";
import { useRef, useState } from "react";
import { Drawer } from "antd";
import logo from "../../assets/header/logo.png";
import { FaChevronRight } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";


const AdminItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: FaHome,
    link: "/",
  },
  {
    key: "userManagement",
    label: "User Management",
    icon: FaUsers,
    link: "/dashboard/user-management",
  },
  {
    key: "sellermanagement",
    label: "Vendor Management",
    icon: MdManageAccounts,
    link: "/dashboard/seller-management",
  },
  {
    key: "expense",
    label: "Expense & Cost Tracking",
    icon: AiOutlineFileProtect,
    link: "/expense",
  },
  {
    key: "settings",
    label: "Settings",
    icon: FaCog,
    link: "/dashboard/Settings/profile",
    children: [
      {
        key: "profile",
        label: "Profile",
        link: "/dashboard/Settings/profile",
      },
      {
        key: "terms",
        label: "Terms & Condition",
        link: "/dashboard/Settings/Terms&Condition",
      },
      {
        key: "privacy",
        label: "Privacy Policy",
        link: "/dashboard/Settings/PrivacyPolicy",
      },
      {
        key: "faq",
        label: "Faq",
        link: "/faq",
      },
    ],
  },
];

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const navigate = useNavigate();
  const contentRef = useRef({});
  const [open, setOpen] = useState(false);
  const [placement] = useState("left");

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
    <div className="bg-white text-white px-5 py-5">
      <div className="flex justify-between items-center">
        <div className="lg:hidden">
          <button onClick={showDrawer} className="p-2" aria-label="Open menu" title="Open menu">
            <FaBars size={24} className="text-[#0b7bb3]" aria-hidden="true" focusable="false" />
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
            <div className="">
              {AdminItems.map((item) => (
                <div key={item.key}>
                  <Link
                    to={item.link}
                    className={`my-4 py-3 px-3 flex items-center whitespace-nowrap cursor-pointer ${selectedKey === item.key
                      ? "bg-[#27E2F5] text-white rounded-md"
                      : "bg-[#EEEEEE] rounded-md"
                      }`}
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
                    <div>
                      {item?.icon && <item.icon />}
                    </div>
                    <span className="ml-3 text-base  font-medium">
                      {item.label}
                    </span>
                    {item.children && (
                      <FaChevronRight
                        className={`ml-auto text-[#27E2F5] transform transition-all duration-300 ${expandedKeys.includes(item?.key) ? "rotate-90" : ""
                          }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`children-menu bg-white -my-2 mx-5 text-black transition-all duration-300 ${expandedKeys.includes(item.key) ? "expanded" : ""
                        }`}
                      style={{
                        maxHeight: expandedKeys.includes(item.key)
                          ? `${contentRef.current[item.key]?.scrollHeight}px`
                          : "0",
                      }}
                      ref={(el) => (contentRef.current[item.key] = el)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          to={child.link}
                          className={`menu-item pl-5 py-3 my-2 flex items-center whitespace-nowrap  cursor-pointer ${selectedKey === child.key
                            ? "bg-[#27E2F5] text-white rounded-md"
                            : ""
                            }`}
                          onClick={() => {
                            setSelectedKey(child.key);
                            setExpandedKeys([]);
                            onClose();
                          }}
                        >
                          <span className="ml-5">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="custom-sidebar-footer absolute bottom-0 w-[250px] p-4">
              <button
                onClick={handleLogout}
                className="w-full flex border-2 border-[#27E2F5] text-[#27E2F5] text-start rounded-md p-3 mt-10"
              >
                <span className="text-2xl">
                  <IoIosLogIn />
                </span>
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </Drawer>
        </div>

        <div className="ml-auto flex items-center justify-center gap-5">
          <div className="pl-5 border-gray-600">
            <Link to={"/dashboard/Settings/profile"}>
              <div className="flex items-center gap-3">
                <img
                  src="https://avatar.iran.liara.run/public/44"
                  className="w-[40px] h-[40px] object-cover rounded-full border-2 border-[#27E2F5]"
                  alt="User Avatar"
                />
                <div className="hidden md:flex flex-col items-start">
                  <h3 className="text-gray-800 text-sm">Shah Aman</h3>
                  <p className="text-xs px-2 py-1 bg-[#27E2F5] text-white rounded">
                    Admin
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
