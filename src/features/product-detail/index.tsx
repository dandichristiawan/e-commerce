import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailResponse } from "./libs/definitions";
import { GetCurrentProduct } from "./libs/api";
import ImageSlide from "@/components/carousel/carousel";
import { renderStars } from "@/components/card/rating";

export const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState<ProductDetailResponse>();
  const [loading, setLoading] = useState<boolean>(false);

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

  console.log(data)
  return (
    <div className="my-10 flex gap-5">
      <div><ImageSlide data={data!} /></div>
      <div className="ml-10">
        <div className="font-bold text-3xl">{data?.title}</div>
        <div className="flex">
          <div className="text-sm font-semibold my-auto">Tags:</div>
          {data?.tags.map((e: any, i: number) => (
            <div className="inline-block p-1 mx-1 bg-gray-200 text-sm font-thin border rounded-xl">
              {e}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-1 rtl:space-x-reverse gap-1">
          {renderStars(data?.rating ?? 0)}({data?.rating})
        </div>
        <div className="my-2 text-4xl font-bold">${data?.price}</div>
        <div className="border-t border-b mt-10 font-semibold text-xl">
          <div className="p-2 inline-block border-b-2 border-blue-600 text-blue-600">
            Detail
          </div>
        </div>

        {/* content */}
        <div className="mt-8">
          <div className="my-2 text-lg">
            <div>
              <span className="text-gray-500 mr-1">Brand:</span>
              {data?.brand}
            </div>
            <div>
              <span className="text-gray-500 mr-1">Warranty:</span>
              {data?.warrantyInformation}
            </div>
            <div>
              <span className="text-gray-500 mr-1">Weight:</span>
              {data?.weight}
            </div>
          </div>
          <div>{data?.description}</div>
        </div>
        <div className="my-10 font-semibold">
          <span>Scan here and get a promo!</span>
          <img src={`${data?.meta.qrCode}`} alt="" />
        </div>
        {/* end content */}
      </div>
    </div>
  );
};
