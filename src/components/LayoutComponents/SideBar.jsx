import { HomeOutlined, UserOutlined, FileTextOutlined, SafetyOutlined, QuestionCircleOutlined, RightOutlined, LogoutOutlined } from "@ant-design/icons";
import logo from "../../assets/header/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const AdminItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: HomeOutlined,
    link: "/",
  },
  {
    key: "userManagement",
    label: "User Management",
    icon: UserOutlined,
    link: "/dashboard/user-management",
  },
  {
    key: "profile",
    label: "Profile",
    icon: UserOutlined,
    link: "/dashboard/Settings/profile",
  },
  {
    key: "terms",
    label: "Terms & Condition",
    icon: FileTextOutlined,
    link: "/dashboard/Settings/Terms&Condition",
  },
  {
    key: "privacy",
    label: "Privacy Policy",
    icon: SafetyOutlined,
    link: "/dashboard/Settings/PrivacyPolicy",
  },
  {
    key: "faq",
    label: "Faq",
    icon: QuestionCircleOutlined,
    link: "/faq",
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
    <div className="custom-sidebar min-h-[100vh] bg-white" role="navigation" aria-label="Sidebar">
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
                  className={`menu-item my-3 mx-4 py-3 px-3 flex items-center cursor-pointer rounded-md border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7bb3] focus-visible:ring-offset-2 ${
                    selectedKey === item.key || isSettingsActive || isCreatorActive || isCategoriesActive
                      ? "bg-[#0b7bb3] text-white border-[#0b7bb3]"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                  }`}
                  aria-expanded={item.children ? expandedKeys.includes(item.key) : undefined}
                  aria-current={selectedKey === item.key ? "page" : undefined}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      onParentClick(item.key);
                    } else {
                      setSelectedKey(item.key);
                    }
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3" aria-hidden="true" />
                  <span className="block w-full">{item.label}</span>

                  {/* Show dropdown arrow if children exist */}
                  {item.children && (
                    <RightOutlined
                      className={`ml-auto text-[#0b7bb3] transform transition-all duration-300 ${
                        expandedKeys.includes(item.key) ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Show children menu if expanded */}
                {item.children && (
                  <div
                    className={`children-menu bg-white -my-2 mx-5 transition-all duration-300 ${
                      expandedKeys.includes(item.key) ? "expanded" : ""}
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
                        className={`menu-item p-3 mx-1 my-2 flex items-center cursor-pointer rounded border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7bb3] focus-visible:ring-offset-2 ${
                          selectedKey === child.key
                            ? "bg-[#0b7bb3] text-white border-[#0b7bb3]"
                            : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                        }`}
                        aria-current={selectedKey === child.key ? "page" : undefined}
                        onClick={() => {
                          setSelectedKey(child.key);
                          setExpandedKeys([]);
                        }}
                      >
                        <span className="block w-full">{child.label}</span>
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
          type="button"
          onClick={handleLogout}
          aria-label="Log out"
          title="Log out"
          className="w-full flex justify-start items-center text-start rounded-md p-3 mt-20 border-2 border-red-600 text-red-700 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
        >
          <span className="text-xl" aria-hidden="true">
            <LogoutOutlined />
          </span>
          <span className="ml-3">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
