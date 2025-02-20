import { Reviews } from "@/features/product-detail/libs/definitions";
import { renderStars } from "../rating/rating";

interface Props {
  data: Reviews[];
}
export default function ReviewsBuyer({ data }: Props) {
  return (
    <>
      <div>
        <div className="text-lg font-semibold mb-5">REVIEWS</div>
        {data &&
          data.map((review, i: number) => (
            <div key={i} className="my-2 border-y p-5">
              <div className="flex">
                <div className="flex items-center space-x-1 rtl:space-x-reverse gap-1">
                  {renderStars(review.rating)}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {review?.rating}
                </span>
              </div>
              <div className="text-md font-semibold my-1">
                {review.reviewerName}
              </div>
              <div className="text-md">{review.comment}</div>
            </div>
          ))}
      </div>
    </>
  );
}
