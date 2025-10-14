import { LogoutOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseApi } from "../../Redux/api/baseApi";
import { persistor } from "../../Redux/store";
import { logout } from "../../Redux/Slice/authSlice";

export default function LogoutButton() {
  const token = useSelector((state) => state.auth?.token);
  // console.log("token from logout", token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Modal.confirm({
      title: "Confirm logout",
      content: "Are you sure you want to log out?",
      okText: "Logout",
      cancelText: "Cancel",
      okButtonProps: { danger: true },
      centered: true,
      onOk: async () => {
        dispatch(logout());
        dispatch(baseApi.util.resetApiState());
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        await persistor.purge();
        navigate("/login");
      },
    });
  };

  return (
    <div className="w-full p-5">
      <button
        onClick={handleLogout}
        className="w-full flex justify-start items-center bg-[#0B704E] text-white text-start rounded-md py-3 px-5 mt-10"
      >
        <span className="text-2xl">
          <LogoutOutlined />
        </span>
        <p className="ml-3">Log Out</p>
      </button>
    </div>
  );
}
