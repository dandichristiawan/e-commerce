import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious, 
} from "../ui/carousel-ui";

export default function ImageSlideSkeleton(){
    return(
        <Carousel className="w-full max-w-sm shadow-md bg-gray-300 animate-pulse">
            <CarouselContent className="-ml-1">
                <CarouselItem>
                            <div className="p-1">
                                <div className="flex aspect-square items-center justify-center p-6">
                                    <div className="w-[220px] h-[220px]"/>
                                </div>
                            </div>
                        </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
    )
}