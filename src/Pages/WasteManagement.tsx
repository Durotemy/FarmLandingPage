import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  feed6,
  feed4,
  Legumes,
  woodChipMachine,
  wasteBin,
} from "../components/images";

const WasteManagement = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] mb-16 flex flex-col items-center justify-center bg-green-50 py-12 w-full">
      <div className="w-full lg:ml-16 flex justify-start">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 hover:text-green-900 transition-colors border border-green-200"
        >
          <FiArrowLeft className="text-xl" />
          Back to Home
        </button>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Waste Management
      </h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        Learn about our innovative waste management solutions that turn organic
        waste into valuable resources for a greener future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto px-4 mt-12">
        {[
          {
            src: Legumes,
            alt: "BSF Feed Waste",
            label: "BSF Waste",
          },
          {
            src: feed4,
            alt: "Green Waste",
            label: "Green Waste",
          },
          {
            src: woodChipMachine,
            alt: "Wood chip machine",
            label: "Wood chip machine",
          },
          {
            src: feed6,
            alt: "Compost Waste",
            label: "Compost Waste",
          },
          {
            src: wasteBin,
            alt: "Waste bin machine",
            label: "Waste bin machine",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="awesome-card max-w-full flex flex-col items-center p-8"
          >
            <div className="awesome-card-accent" />
            <img
              src={item.src}
              alt={item.alt}
              className="awesome-card-img w-64 h-64 object-contain rounded-2xl mb-4 drop-shadow-lg bg-green-50"
            />
            <span className="mt-2 text-green-700 font-bold text-xl text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteManagement;
