import { CiSquarePlus } from "react-icons/ci";

interface ProductProps {
  ele: {
    name: string;
    price: string;
    image: string;
  };
}

const Product = ({ ele }: ProductProps) => {
  return (
    <div className="rounded-lg w-[300px] md:w-[350px] flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out mt-4 mx-auto bg-white">
      <div className="w-full overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-lg h-[200px] md:h-[350px] border-0 [clip-path:inset(1px_1px_1px_1px)]"
          src={ele.image}
          alt={ele.name}
        />
      </div>
      <div className="flex flex-row items-center justify-between px-2 py-2">
        <div className="text-[14px]">
          <p>{ele?.name}</p>
          <p>{ele.price}</p>
        </div>
        <div>
          <CiSquarePlus size={30} />
        </div>
      </div>
    </div>
  );
};

export default Product;
