

export function FullBlogSkeleton() {
    return (
        <div className="h-screen mt-16">
            <div className="grid grid-cols-12 max-w-screen-lg mx-auto mt-28">
                {/* Left column (Blog Content) Skeleton */}
                <div className="col-span-8 space-y-6">
                    {/* Blog Title Skeleton */}
                    <div className="w-3/4 h-8 bg-gray-300 rounded"></div>

                    {/* Blog Published Date Skeleton */}
                    <div className="w-1/4 h-4 bg-gray-300 rounded"></div>

                    {/* Blog Content Skeleton */}
                    <div className="w-full h-6 bg-gray-300 rounded"></div>
                    <div className="w-full h-6 bg-gray-300 rounded"></div>
                    <div className="w-5/6 h-6 bg-gray-300 rounded"></div>
                    <div className="w-4/5 h-6 bg-gray-300 rounded"></div>
                    <div className="w-4/5 h-6 bg-gray-300 rounded"></div>
                </div>

                {/* Right column (Author Info) Skeleton */}
                <div className="col-span-4 ml-4">
                    {/* Author Label Skeleton */}
                    <div className="pl-4 w-1/3 h-4 bg-gray-300 rounded mb-4"></div>

                    {/* Author Info Skeleton */}
                    <div className="flex items-center p-3 space-x-4">
                        {/* Avatar Skeleton */}
                        <div className="w-12 h-12 rounded-full bg-gray-300"></div>

                        <div className="pl-4 w-1/2">
                            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
