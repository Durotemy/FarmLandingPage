import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { feed4, feed5, feed6, wasteManagement } from "../components/images";

const OrganicFertilizers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] mb-16 flex flex-col items-center justify-center bg-green-50 py-12 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-start">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-100 hover:text-green-900 transition-colors border border-green-200"
        >
          <FiArrowLeft className="text-xl" />
          Back to Home
        </button>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Organic Fertilizers
      </h1>
      <p className="text-lg text-gray-700 max-w-xl text-center p-4 mb-4">
        Discover our organic fertilizers, crafted to enrich your soil and boost
        crop yields while supporting sustainable farming practices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 mt-12 mb-4">
        {[
          {
            src: feed4,
            alt: "Green Fertilizer",
            label: "Green Fertilizer",
          },
          {
            src: feed5,
            alt: "Organic Fertilizer",
            label: "Organic Fertilizer",
          },
          {
            src: feed6,
            alt: "Compost Fertilizer",
            label: "Compost Fertilizer",
          },
          {
            src: wasteManagement,
            alt: "Compost Fertilizer",
            label: "Compost Fertilizer",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="awesome-card w-full flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-white shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="awesome-card-img w-full h-auto object-contain max-h-48"
            />
            <span className="mt-4 text-green-700 font-bold text-lg lg:text-xl text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicFertilizers;
