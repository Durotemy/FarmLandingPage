import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import fefsfd from "../assets/baidangbaodocx1605088552498-atE6d.svg";
import greenFlower from "../assets/greenFlower.svg";
import nuts from "../assets/bsf.svg";
import { ToastContainer } from "react-toastify";

import {
  // biodegradable,
  // woodChipMachine,
  // wasteBin,
  // converter,
  feed2,
  feed3,
  feed4,
  feed1,
  feed5,
  feed6,
} from "../components/images";
import Product from "../components/Product";

const carouselData = [
  {
    src: greenFlower,
    title: "Premium BSF Products for Your Needs",
    text: "Explore our range of high quality Black Soldier Fly products tailored to meet diverse agricultural needs. From organic fertilizers that enrich your soil to nutritious animal feed supplements, Sola Farms delivers sustainable and effective solutions.",
    alt: "Farm landscape 1",
  },
  {
    src: fefsfd,
    isMachine: true,
    title: "Sustained Agriculture with black soldier flies",
    text: "Discover Sola Farms' innovative approach to sustainable agriculture using Black Soldier Fly (BSF) farming, We're dedicated to providing eco-friendly solutions for waste management, animal feed, and organic fertilizers, revolutionizing the agricultural industry.  ",
    alt: "Farm landscape 1",
  },
  {
    src: nuts,
    title: "Join the sustainable Farming Revolution",
    text: "At Sola Farms, we are committed to transforming the agricultural landscape with eco- friendly practices and innovative BSF  solutions. Partner with us to create a more sustainable future for farming and contribute to a healthier planet.",
    alt: "Farm landscape 2",
  },
];

const productData = [
  {
    id: 1,
    name: "Premium BSF Feed",
    price: "$49.00",
    image: feed1,
    isMachine: false,
  },
  {
    id: 2,
    name: "Nutritious Larvae",
    price: "$299.00",
    image: feed2,
    isMachine: false,
  },
  {
    id: 3,
    name: "Sustainable Protein",
    price: "$674.00",
    image: feed3,
    isMachine: false,
  },
  {
    id: 4,
    name: "Green Fertilizer",
    price: "$1,124.00",
    image: feed4,
    isMachine: false,
  },
  {
    id: 5,
    name: "Organic Fertilizer",
    price: "$1,124.00",
    image: feed5,
    isMachine: false,
  },
  {
    id: 6,
    name: "Compost Fertilizer",
    price: "$1,124.00",
    image: feed6,
    isMachine: false,
  },
];

const HomePage = () => {
  const width = window.innerWidth;

  const [slide, setSlide] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(0);

  // Determine if the current slide is a machine type
  // const currentMachineType = !!carouselData[slide]?.isMachine;
  // const filteredProducts = productData.filter((p) =>
  //   currentMachineType ? p.isMachine === true : p.isMachine === false
  // );

  const filteredProducts = productData;

  useEffect(() => {
    setDeviceWidth(width);
  }, [deviceWidth, width]);

  const nextSlide = () => {
    setSlide(slide === carouselData.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? carouselData.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="overflow-y-scroll no-scrollbar w-full mb-20">
      {/* Carousel and Product Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-[80vh] w-full px-4">
          {deviceWidth >= 1024 && (
            <BsArrowLeftCircleFill
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white cursor-pointer hover:text-green-500 transition-colors z-10"
            />
          )}

          {carouselData?.map((item, idx) => (
            <div
              key={idx}
              className={`animate-zoom-in absolute inset-0  transition-opacity duration-[1500ms] ease-in-out ${
                slide === idx ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="lg:ml-20 p-8 h-full flex flex-col  justify-center ">
                <p className="md:w-[650px] lg:w-[1000px] lg:text-[16px] text-white font-bold mb-4">
                  {item.title}
                </p>
                <p className="md:w-[650px] lg:w-[700px] lg:text-[16px] text-white text-sm leading-6 lg:text-[16px]">
                  {item.text}
                </p>
                <div className="hover:cursor-pointer bg-white w-[100px] p-2 rounded-tr-lg rounded-bl-lg  mt-4">
                  <p className="text-sm">Learn more</p>
                </div>
              </div>
            </div>
          ))}

          {deviceWidth >= 1024 && (
            <BsArrowRightCircleFill
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white cursor-pointer hover:text-green-500 transition-colors z-10"
            />
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {carouselData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  slide === idx ? "bg-green-500" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="w-full bg-green-50 py-10 mb-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Our Commitment to Sustainable Agriculture
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-2 mx-auto">
            At SolaFarms, we harness innovative farming techniques to produce
            high-quality environmental friendly Black Soldier Fly products. Our
            mission is to revolutionize waste management and animal nutrition
            promoting a greener future for agriculture worldwide.
          </p>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600 mb-2">
            1500 tons
          </span>
          <p className="text-gray-600 text-center text-sm">
            Since our founding, we have processed over 1,500 tons of organic
            waste, turning it into valuable resources for farmers and their
            environment, demonstrating our dedication to sustainability
          </p>
        </div>
        <div className="bg-white items-center rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600 mb-2">253</span>
          <p className="text-gray-600 text-center text-sm">Products</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600 mb-2">
            50 million
          </span>
          <p className="text-gray-600 text-center text-sm">
            We have successfully cultivated over 50 million BSF larvae,
            providing a sustainable protein source that reduces reliance on
            traditional feed options.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600 mb-2">
            10 years
          </span>
          <p className="text-gray-600 text-center text-sm">
            With over a decade of experience, SolaFarms continues to innovate
            and lead in eco-friendly insect farming, committed to agricultural
            excellence.
          </p>
        </div>
      </section>

      {/* Product Intro and Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-12 mb-4">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Explore Our Range of Our Awesome Products
          </h2>
          <p className="text-gray-700 text-lg">
            Including organic fertilizers and nutritious animal feeds designed
            to support sustainable farming practices and improve agricultural
            productivity.
          </p>
        </div>
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredProducts.length === 0 ? (
            <p className="text-center mt-8 text-gray-500 w-full md:col-span-3">
              No products available for this slide.
            </p>
          ) : (
            filteredProducts.map((ele) => <Product key={ele.id} ele={ele} />)
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
