import { useState } from "react";
import {
  QuestionCircleOutlined,
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import PageHeading from "../../../shared/PageHeading";
import { useGetAllFaqQuery } from "../../../Redux/api/faqApi";
import Loader from "../../../shared/Loader";
import { DeleteFaqModal } from "./DeleteFaqModal";
import { AddFaqModal } from "./AddFaqModal";
import { UpdateFaqModal } from "./UpdateFaqModal";

export default function Faq() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const { data, isLoading } = useGetAllFaqQuery();
  const faqsRaw = data?.data || data?.faqs || [];
  const AccordionData = faqsRaw.map((f) => ({
    key: f?._id || f?.id,
    title: f?.question || f?.title || "Untitled",
    description: f?.answer || f?.description || "",
  }));

  const handleClick = (index) => {
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleEdit = (item) => {
    setSelectedFaqId(item?.key || null);
    setQuestion(item?.title || "");
    setAnswer(item?.description || "");
    setUpdateModalOpen(true);
  };

  const handleCancel2 = () => {
    setAddModalOpen(false);
  };
  const handleCancel3 = () => {
    setUpdateModalOpen(false);
  };
  const showModal2 = () => {
    setAddModalOpen(true);
  };

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedFaqId, setSelectedFaqId] = useState(null);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="relative p-5 z-0 space-y-10 min-h-screen">
      <div className="flex justify-between items-center">
        <PageHeading title="FAQ" />
        <div className="text-white">
          <button
            onClick={showModal2}
            className="bg-[#F9B038] text-white font-bold px-5 py-2 rounded transition duration-200"
          >
            + Add FAQ
          </button>
        </div>
      </div>

      <div className="flex gap-2 flex-col w-full mt-5 bg-white p-5">
        {AccordionData?.map((accordion, index) => (
          <section
            key={index}
            className="border-b border-[#e5eaf2] rounded py-3"
          >
            <div className="flex gap-2 cursor-pointer items-center justify-between w-full">
              <h2 className="text-base font-normal md:font-bold md:text-2xl flex gap-2 items-center">
                <QuestionCircleOutlined className="w-5 h-5 hidden md:flex" />
                {accordion.title}
              </h2>
              <div className="flex gap-2 md:gap-4 items-center">
                <DownOutlined
                  onClick={() => handleClick(index)}
                  className={`w-5 h-5 text-[#0D0D0D] transition-all duration-300 ${
                    isAccordionOpen === index &&
                    "rotate-[180deg] !text-[#0b7bb3]"
                  }`}
                />
                <div className="border-2 px-1.5 py-1 rounded border-[#0b7bb3] bg-[#f0fcf4]">
                  <button className="" onClick={() => handleEdit(accordion)}>
                    <EditOutlined className="text-2xl cursor-pointer text-[#0b7bb3] font-bold transition-all" />
                  </button>
                </div>
                <div className="border-2 px-1.5 py-1 rounded border-[#0b7bb3] bg-[#f0fcf4]">
                  <button
                    className=""
                    onClick={() => {
                      setSelectedFaqId(accordion.key);
                      setIsModalOpen(true);
                    }}
                  >
                    <DeleteOutlined className="text-2xl cursor-pointer text-red-500 transition-all" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordionOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                {accordion.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      <DeleteFaqModal
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setSelectedFaqId(null);
        }}
        faqId={selectedFaqId}
        onDeleted={() => {
          setSelectedFaqId(null);
        }}
      />

      <AddFaqModal
        open={addModalOpen}
        onCancel={handleCancel2}
        question={question}
        answer={answer}
        onChangeQuestion={(e) => setQuestion(e.target.value)}
        onChangeAnswer={(e) => setAnswer(e.target.value)}
        onCreated={() => {
          setQuestion("");
          setAnswer("");
        }}
      />

      <UpdateFaqModal
        open={updateModalOpen}
        onCancel={handleCancel3}
        faqId={selectedFaqId}
        question={question}
        answer={answer}
        onChangeQuestion={(e) => setQuestion(e.target.value)}
        onChangeAnswer={(e) => setAnswer(e.target.value)}
        onUpdated={() => {
          setSelectedFaqId(null);
        }}
      />
    </div>
  );
}
