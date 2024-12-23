import React from 'react';

export function BlogsSkeleton() {
    return (
        <div className="py-4 border-b-2 border-slate-200 max-w-screen-md  cursor-pointer animate-pulse mt-6">
            {/* Author Section */}
            <div className="flex items-center mb-3">
                {/* Avatar Placeholder */}
                <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                {/* Author Info */}
                <div className="flex mt-1 ml-2 space-x-2">
                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                    <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                </div>
            </div>
            {/* Title Placeholder */}
            <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
            {/* Content Placeholder */}
            <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded mb-1"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mb-3"></div>
            {/* Footer Placeholder */}
            <div className="w-1/4 h-3 bg-gray-200 rounded"></div>
        </div>
    );
}
