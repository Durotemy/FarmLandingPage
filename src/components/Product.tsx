import { CiSquarePlus } from "react-icons/ci";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

interface ProductProps {
  ele: {
    id: number;
    name: string;
    price: string;
    image: string;
    isMachine: boolean;
  };
}

const Product = ({ ele }: ProductProps) => {
  const { addToCart } = useCart();
  return (
    <div className="rounded-lg w-[300px] md:w-[380px] md:h-[320px] flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out mt-4 mx-auto bg-white animate-product-fade-in">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-lg h-[200px] md:h-[350px] border-0 [clip-path:inset(1px_1px_1px_1px)]"
          src={ele.image}
          alt={ele.name}
        />
      </div>
      <div className="flex flex-row items-center justify-between px-2 py-4">
        <div>
          <p className="text-gray-600 text-[16px]">{ele?.name}</p>
          <p className="text-gray-600 text-[16px]">{ele.price}</p>
        </div>
        <div>
          <CiSquarePlus
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg hover:cursor-pointer"
            size={40}
            onClick={() => {
              addToCart({
                id: ele.id,
                name: ele.name,
                price: ele.price,
                image: ele.image,
              });
              toast.success(`${ele.name} added to cart!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          />
        </div>
      </div>
      {/* <button
        className="bg-green-500 hover:bg-green-600 text-white rounded-bl-lg rounded-tr-lg px-4 py-2 mt-2 transition-colors w-full"
        onClick={() =>
          addToCart({
            id: ele.id,
            name: ele.name,
            price: ele.price,
            image: ele.image,
          })
        }
      >
        Add to Cart
      </button> */}
    </div>
  );
};

export default Product;
