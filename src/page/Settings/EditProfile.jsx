import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useGetAdminProfileQuery } from "../../Redux/api/profileApi";
import { useEffect, useState } from "react";
import { useUpdateProfileMutation } from "../../Redux/api/profileApi";
import Swal from "sweetalert2";

export default function EditProfile() {
  const { data, isLoading } = useGetAdminProfileQuery();
  const admin = data?.admin;
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(admin?.name || admin?.fullName || "");
    setEmail(admin?.email || "");
    setContact(admin?.contact || admin?.contactNo || "");
    setAddress(admin?.address || "");
  }, [
    admin?.name,
    admin?.fullName,
    admin?.email,
    admin?.contact,
    admin?.contactNo,
    admin?.address,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      if (name) fd.append("name", name);
      if (contact) fd.append("contact", contact);
      if (address) fd.append("address", address);
      await updateProfile(fd).unwrap();
      await Swal.fire({
        icon: "success",
        title: "Profile updated",
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
      const msg =
        err?.data?.message || err?.error || "Failed to update profile";
      await Swal.fire({
        icon: "error",
        title: msg,
        confirmButtonColor: "#0b7bb3",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-6 rounded-lg shadow-sm">
        <h2 className="text-lg sm:text-xl lg:text-2xl text-[#0D0D0D] text-center font-bold mb-6">
          Edit Your Profile
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              <UserOutlined aria-hidden="true" />
              <span>User Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading || isUpdating}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              <MailOutlined aria-hidden="true" />
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              <PhoneOutlined aria-hidden="true" />
              <span>Contact No</span>
            </label>
            <input
              type="tel"
              name="contactNo"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base"
              placeholder="Enter contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              disabled={isLoading || isUpdating}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm sm:text-base lg:text-lg text-[#0D0D0D] font-semibold">
              <EnvironmentOutlined aria-hidden="true" />
              <span>Address</span>
            </label>
            <textarea
              name="address"
              rows="3"
              className="w-full px-3 sm:px-4 py-3 border-2 border-[#6A6D76] rounded-lg outline-none focus:border-[#0b7bb3] focus:ring-2 focus:ring-[#0b7bb3]/20 transition-all duration-200 text-sm sm:text-base placeholder:text-sm sm:placeholder:text-base resize-none"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={isLoading || isUpdating}
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#0b7bb3] text-white font-semibold py-3 px-4 rounded-lg text-sm shadow-sm inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading || isUpdating}
            >
              <SaveOutlined aria-hidden="true" />
              <span>{isUpdating ? "Saving..." : "Save Changes"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
