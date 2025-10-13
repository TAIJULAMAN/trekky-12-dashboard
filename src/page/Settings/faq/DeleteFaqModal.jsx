import { Modal } from "antd";
import Swal from "sweetalert2";
import { useDeleteFaqMutation } from "../../../Redux/api/faqApi";

export function DeleteFaqModal({ open, onCancel, faqId, onDeleted }) {
  const [deleteFaq, { isLoading }] = useDeleteFaqMutation();

  const handleConfirm = async () => {
    if (!faqId) return;
    try {
      await deleteFaq(faqId).unwrap();
      await Swal.fire({
        icon: "success",
        title: "FAQ deleted",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
      onCancel?.();
      onDeleted?.();
    } catch (err) {
      const msg = err?.data?.message || err?.error || "Failed to delete FAQ";
      await Swal.fire({ icon: "error", title: msg, confirmButtonColor: "#0b7bb3" });
    }
  };

  return (
    <Modal open={open} centered onCancel={onCancel} footer={null}>
      <div className="p-5">
        <h1 className="text-4xl text-center text-[#0D0D0D]">
          Are you sure you want to delete ?
        </h1>

        <div className="text-center py-5">
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className={`bg-[#0b7bb3] text-white font-semibold w-full py-2 rounded transition duration-200 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Deleting..." : "YES,DELETE"}
          </button>
        </div>
        <div className="text-center pb-5">
          <button
            onClick={onCancel}
            className="text-[#0b7bb3] border-2 border-[#0b7bb3] bg-white font-semibold w-full py-2 rounded transition duration-200"
          >
            NO,DON’T DELETE
          </button>
        </div>
      </div>
    </Modal>
  );
}