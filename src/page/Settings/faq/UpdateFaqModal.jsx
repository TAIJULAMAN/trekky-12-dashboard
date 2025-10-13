import { Modal } from "antd";
import Swal from "sweetalert2";
import { useUpdateFaqMutation } from "../../../Redux/api/faqApi";

export function UpdateFaqModal({
  open,
  onCancel,
  faqId,
  question,
  answer,
  onChangeQuestion,
  onChangeAnswer,
  onUpdated,
}) {
  const [updateFaq, { isLoading }] = useUpdateFaqMutation();

  const handleSave = async () => {
    if (!faqId) return;
    if (!question?.trim() || !answer?.trim()) {
      await Swal.fire({
        icon: "error",
        title: "Missing fields",
        text: "Please provide both question and answer.",
        confirmButtonColor: "#0b7bb3",
      });
      return;
    }
    try {
      await updateFaq({ faqId, question: question.trim(), description: answer.trim() }).unwrap();
      await Swal.fire({
        icon: "success",
        title: "FAQ updated",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
      onUpdated?.();
      onCancel?.();
    } catch (err) {
      const msg = err?.data?.message || err?.error || "Failed to update FAQ";
      await Swal.fire({ icon: "error", title: msg, confirmButtonColor: "#0b7bb3" });
    }
  };

  return (
    <Modal open={open} centered onCancel={onCancel} footer={null}>
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center mb-2">Update FAQ</h2>

        <p className="text-center mb-6 text-gray-700">
          Fill out the details below to add a new FAQ. Ensure the answer
          provides clarity and helps users quickly resolve their queries.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="question" className="block text-sm font-medium mb-1">
              Question for the FAQ
            </label>
            <input
              id="question"
              type="text"
              placeholder="Enter the FAQ"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={question}
              onChange={onChangeQuestion}
            />
          </div>

          <div>
            <label htmlFor="answer" className="block text-sm font-medium mb-1">
              Answer to the FAQ
            </label>
            <textarea
              id="answer"
              placeholder="Enter the FAQ Answer"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={answer}
              onChange={onChangeAnswer}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button
            onClick={onCancel}
            className="py-2 px-4 rounded-lg border border-[#EF4444] bg-red-50"
          >
            Cancel
          </button>

          <button
            className="py-2 px-4 rounded-lg bg-[#0b7bb3] text-white"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </Modal>
  );
}