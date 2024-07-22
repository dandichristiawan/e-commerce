import { ProductDetailResponse } from "@/features/product-detail/libs/definitions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel-ui";

interface Props {
  data: ProductDetailResponse;
}

export default function ImageSlide({ data }: Props) {
  return (
    <>
      <Carousel className="xl:w-[380px] xl:h-[380px] lg:w-[320px] lg:h-[320px] w-[300px] h-[300px] shadow-md">
        <CarouselContent className="-ml-1">
          {data &&
            data.images &&
            data.images.map((item, index) => (
              <>
                <CarouselItem key={index}>
                  <div className="p-1  ">
                    <div className="flex items-center justify-center">
                      <img
                        className=""
                        src={`${item}`}
                        alt="product image"
                        // width={520}
                        // height={520}
                      />
                    </div>
                  </div>
                </CarouselItem>
              </>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
