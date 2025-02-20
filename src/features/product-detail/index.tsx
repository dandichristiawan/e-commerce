import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailResponse } from "./libs/definitions";
import { GetCurrentProduct } from "./libs/api";
import ImageSlide from "@/components/carousel/carousel";
import ImageSlideSkeleton from "@/components/carousel/carousel-skeleton";
import DetailProduct from "@/components/detail-product/detail-product";
import CardOrder from "@/components/card-order/card-order";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/store";

export const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProductDetailResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  // const items = useSelector((state: RootState) => state.cart.items) //buat nampilin items cart
  // console.log(items)

  useEffect(() => {
    async function get() {
      setLoading(true);
      try {
        const product = await GetCurrentProduct(id!);
        setData(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    get();
  }, []);

  return (
    <>
      <div className="my-10 flex justify-center gap-5 xl:mx-5 2xl:mx-5 lg:mx-6 md:mx-7 max-md:hidden">
        <div>
          <div className="sticky top-[5rem]">
            {loading ? <ImageSlideSkeleton /> : <ImageSlide data={data!} />}
          </div>
        </div>
        <DetailProduct data={data!} />
        <div>
          <div className="sticky top-[5rem]">
            {data && <CardOrder data={data!} />}
          </div>
        </div>
      </div>
      <div className="hidden max-md:block">
        {/* mobile screen here */}
      </div>
    </>
  );
};
