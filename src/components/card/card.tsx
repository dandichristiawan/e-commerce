import { dataProducts } from '@/features/home/libs/types';
import { renderStars } from '@/components/card/rating';
import { Link } from 'react-router-dom';

interface Props {
  product?: any[];
}

const Card = ({ product }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {product?.map((item: dataProducts) => (
        <div
          key={item.id}
          className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link
            to={`/product/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-8 rounded-t-lg"
              src={`${item.thumbnail}`}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title.length > 25
                  ? `${item.title.substring(0, 25)}...`
                  : item.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {renderStars(item.rating)}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {item.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
