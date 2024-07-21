import { dataProducts } from "@/features/home/libs/types";
import { renderStars } from "@/components/rating/rating";
import { Link } from "react-router-dom";
import ModalDialog from "../dialog/modal-dialog";

interface Props {
  product?: any[];
}

const Card = ({ product }: Props) => {
  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <div className="grid grid-cols-5 gap-4 my-10">
      {product?.map((item: dataProducts) => (
        <div
          key={item.id}
          className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link
            to={`/product/${item.id}`}
            // target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-8 rounded-t-lg"
              src={`${item.thumbnail}`}
              alt="product image"
            />
          </Link>
          <div className="flex flex-col flex-grow px-2 pb-2 justify-between">
            <div>
              <a href="#">
                <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title.length > 25
                    ? `${item.title.substring(0, 25)}...`
                    : item.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-2">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {renderStars(item.rating)}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {item.rating}
                </span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
            </div>
            <ModalDialog 
              handleClick={handleClick} 
              data={item} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
