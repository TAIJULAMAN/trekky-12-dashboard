import { MdManageAccounts } from "react-icons/md";
import { FaUsers, FaChevronRight, FaCog, FaHome } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import logo from "../../assets/header/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
    key: "categorymanagement",
    label: "Expense & Cost Tracking",
    icon: MdManageAccounts,
    link: "/category-management",
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

const SideBar = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef({});

  useEffect(() => {
    const currentPath = location.pathname;

    let activeParent = null;

    AdminItems.forEach((item) => {
      if (item.link === currentPath) {
        activeParent = item;
      } else if (
        item.children &&
        item.children.some((child) => child.link === currentPath)
      ) {
        activeParent = item;
      }
    });

    if (activeParent) {
      setSelectedKey(
        activeParent.children
          ? activeParent.children.find((child) => child.link === currentPath)
              ?.key || activeParent.key
          : activeParent.key
      );

      if (activeParent.children && !expandedKeys.includes(activeParent.key)) {
        setExpandedKeys([...expandedKeys, activeParent.key]);
      }
    }
  }, []);

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="custom-sidebar min-h-[100vh] bg-[#FFFFFF]">
      <div className="custom-sidebar-logo flex justify-center">
        <img src={logo} alt="Logo" className="w-[150px] mt-5" />
      </div>
      <div className="menu-items">
        <div>
          {AdminItems.map((item) => {
            const isSettingsActive =
              item.key === "settings" &&
              item.children.some((child) => child.link === location.pathname);

            const isCreatorActive =
              item.key === "creatorManagement" &&
              item.children.some((child) => child.link === location.pathname);

            const isCategoriesActive =
              item.key === "categoriesManagement" &&
              item.children.some((child) => child.link === location.pathname);

            return (
              <div key={item.key}>
                <Link
                  to={item.link}
                  className={`menu-item my-4 mx-5 py-3 px-3 flex items-center cursor-pointer ${
                    selectedKey === item.key ||
                    isSettingsActive ||
                    isCreatorActive ||
                    isCategoriesActive
                      ? "bg-[#0b7bb3] text-white rounded-md"
                      : "bg-white rounded-md hover:bg-[#b4e2ed]"
                  }`}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      onParentClick(item.key);
                    } else {
                      setSelectedKey(item.key);
                    }
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="block w-full ">{item.label}</span>

                  {/* Show dropdown arrow if children exist */}
                  {item.children && (
                    <FaChevronRight
                      className={`ml-auto transform transition-all duration-300 ${
                        expandedKeys.includes(item.key) ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Show children menu if expanded */}
                {item.children && (
                  <div
                    className={`children-menu bg-white -my-2 mx-5 transition-all duration-300 ${
                      expandedKeys.includes(item.key) ? "expanded" : ""
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
                        className={`menu-item p-4 flex items-center cursor-pointer ${
                          selectedKey === child.key
                            ? "bg-[#0b7bb3] text-white"
                            : "hover:bg-[#b4e2ed]"
                        }`}
                        onClick={() => {
                          setSelectedKey(child.key);
                          setExpandedKeys([]);
                        }}
                      >
                        <span className="block w-full ">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className="w-full p-4 px-5">
        <button
          onClick={handleLogout}
          className="w-full flex justify-start items-center text-start border-2 border-[#0b7bb3] text-[#0b7bb3]  rounded-md p-2 mt-20"
        >
          <span className="text-2xl">
            <IoIosLogIn />
          </span>
          <span className="ml-3">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
