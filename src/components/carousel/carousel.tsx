import { ProductDetailResponse } from "@/features/product-detail/libs/definitions";
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from "../ui/carousel-ui";

interface Props{
    data:ProductDetailResponse
}

export default function ImageSlide(
   { data }:Props
){
    return (
        <>
            <Carousel className="w-full max-w-xl shadow-md">
            <CarouselContent className="-ml-1">
                {data && data.images && data.images.map((item, index) => (
                    <>
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <div className="flex aspect-square items-center justify-center p-6">
                                    <img
                                        className="w-[320px] h-[320px]"
                                        src={`${item}`}
                                        alt="product image"
                                        width={520}
                                        height={520}
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
      )
}