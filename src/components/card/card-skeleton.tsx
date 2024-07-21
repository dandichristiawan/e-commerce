export const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="p-8 rounded-t-lg bg-gray-300 h-80 w-[306px] " />
          <div className="px-5 pb-5">
            {/* Title Placeholder */}
            <div className="h-6 bg-gray-300 rounded mt-4" />
            {/* Rating Placeholder */}
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    className="w-4 h-4 bg-gray-300 rounded-full"
                  ></div>
                ))}
              </div>
              <span className="bg-gray-300 text-gray-600 text-xs font-semibold px-2.5 py-0.5 rounded ms-3 h-6 w-16"></span>
            </div>
            {/* Price and Button Placeholder */}
            <div className="flex items-center justify-between">
              <div className="h-8 bg-gray-300 rounded w-1/4" />
              <div className="w-24 h-10 bg-blue-500 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};