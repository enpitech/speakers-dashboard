export const SpeakerPageHeaderSkeleton = () => {
  return (
    <div className=" rounded-lg overflow-hidden mb-8">
      {/* Banner skeleton */}
      <div className="h-48 bg-gradient-to-r from-primary to-secondary/90 animate-pulse"></div>

      <div className=" p-6 relative">
        {/* Avatar skeleton */}
        <div className="absolute -top-16 left-8 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
          <div className="w-full h-full  animate-pulse"></div>
        </div>

        <div className="ml-44 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            {/* Name skeleton */}
            <div className="h-9 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>

            {/* Location and experience skeleton */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <div className="w-24 h-5 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <div className="w-24 h-5 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            {/* Rating skeleton */}
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>

            {/* Button skeleton */}
            <div className="w-40 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Social links skeleton */}
        <div className="ml-44 flex items-center gap-3 mt-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
