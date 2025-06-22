import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import fefsfd from "../assets/baidangbaodocx1605088552498-atE6d.svg";
import ferfe from "../assets/certified-organic-cow-feed-rff.svg";
import greenFlower from "../assets/greenFlower.svg";

import {
  biodegradable,
  woodChipMachine,
  wasteBin,
  converter,
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
    title: "Sustained Agriculture with black soldier flies",
    text: "Discover Sola Farms' innovative approach to sustainable agriculture using Black Soldier Fly (BSF) farming, We're dedicated to providing eco-friendly solutions for waste management, animal feed, and organic fertilizers, revolutionizing the agricultural industry.  ",
    alt: "Farm landscape 1",
  },
  {
    src: ferfe,
    title: "Join the sustainable Farming Revolution",
    text: "At Sola Farms, we are committed to transforming the agricultural landscape with eco- friendly practices and innovative BSF  solutions. Partner with us to create a more sustainable future for farming and contribute to a healthier planet.",
    alt: "Farm landscape 2",
  },
];

const productData = [
  {
    name: "Biodegradable Waste Solution",
    price: "$49.00",
    image: biodegradable,
  },
  {
    name: "Waste Product Kit",
    price: "$299.00",
    image: woodChipMachine,
  },
  {
    name: "Organic Waste Breakdown",
    price: "$674.00",
    image: wasteBin,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: converter,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: feed2,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: feed3,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: feed4,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: feed5,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: feed1,
  },
  {
    name: "BSF Larvae Waste Converter",
    price: "$1,124.00",
    image: feed6,
  },
];

const HomePage = () => {
  const width = window.innerWidth;

  const [slide, setSlide] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(0);

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
    <div className="overflow-y-scroll no-scrollbar w-full ">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-[80vh] w-full px-4">
          {deviceWidth > 640 && (
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
              <div className="lg:ml-20 p-4 h-full flex flex-col  justify-center ">
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

          {deviceWidth > 640 && (
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {productData.map((ele) => {
          return <Product key={ele.name} ele={ele} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
