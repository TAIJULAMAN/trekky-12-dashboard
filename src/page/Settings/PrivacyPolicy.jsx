import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";
import PageHeading from "../../shared/PageHeading";
import { useGetPrivacyQuery, useCreatePrivacyMutation } from "../../Redux/api/privacyApi";
import Swal from "sweetalert2";
import Loader from "../../shared/Loader";

export default function PrivacyPolicy() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data, isLoading } = useGetPrivacyQuery();
  const [createPrivacy, { isLoading: isSaving }] = useCreatePrivacyMutation();

  useEffect(() => {
    const existing = data?.data?.description || data?.description || "";
    if (existing) setContent(existing);
  }, [data]);

  const handleSave = async () => {
    try {
      await createPrivacy({ description: content }).unwrap();
      await Swal.fire({
        icon: "success",
        title: "Privacy policy saved",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: "#111827",
        color: "#ffffff",
        iconColor: "#10B981",
      });
    } catch (err) {
      const msg = err?.data?.message || err?.error || "Failed to save";
      await Swal.fire({ icon: "error", title: msg, confirmButtonColor: "#F9B038" });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="p-5 space-y-10 min-h-screen">
      <PageHeading title="Privacy Policy" />
      <div className="bg-white rounded shadow p-5 h-full">
        <JoditEditor
          ref={editor}
          value={content}
          config={{ readonly: false, height: 400 }}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
      <div className="text-center py-5">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`bg-[#0b7bb3] text-white font-bold w-full py-2 rounded transition duration-200 ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSaving ? 'Saving...' : 'Save changes'}
        </button>
      </div>
    </div>
  );
}
