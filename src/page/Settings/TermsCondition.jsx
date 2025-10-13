import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import "jodit/es2021/jodit.min.css";
import PageHeading from "../../shared/PageHeading";
import { useGetTermsAndConditionsQuery, useCreateTermsMutation } from "../../Redux/api/termsApi";
import Swal from "sweetalert2";
import Loader from "../../shared/Loader";

function TermsAndCondition() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data, isLoading } = useGetTermsAndConditionsQuery();
  const [createTerms, { isLoading: isSaving }] = useCreateTermsMutation();

  useEffect(() => {
    const existing = data?.data?.description || data?.description || "";
    if (existing) setContent(existing);
  }, [data]);

  const handleSave = async () => {
    try {
      await createTerms({ description: content }).unwrap();
      await Swal.fire({
        icon: "success",
        title: "Terms & Conditions saved",
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
      await Swal.fire({ icon: "error", title: msg, confirmButtonColor: "#0b7bb3" });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="p-5 space-y-10 min-h-screen">
      <PageHeading title="Terms And Condition" />

      <div className=" bg-white rounded shadow p-5 h-full">
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

export default TermsAndCondition;
