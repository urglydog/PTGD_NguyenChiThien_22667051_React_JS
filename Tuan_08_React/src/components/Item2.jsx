function Item2({ img, imgChef, title, time, chefName, description }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            {/* Image Section */}
            <div className="w-1/2 p-5">
                <img src={img} alt={title} className="w-full h-full object-cover aspect-square rounded-lg" />
            </div>

            {/* Content Section */}
            <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                    {/* Title */}
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{title}</h3>
                        <div className="bg-white rounded-full p-2 text-pink-500 shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Time */}
                    {time && (
                        <p className="text-gray-600 text-sm mb-2 text-left">{time}</p>
                    )}

                    {/* Chef Info */}
                    {chefName && (
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2">
                                {/* Placeholder for Chef's Image */}
                                <img
                                    src={imgChef}
                                    alt={chefName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-700">{chefName}</p>
                        </div>
                    )}

                    {/* Description */}
                    {description && (
                        <p className="text-gray-500 text-sm line-clamp-3 text-left">{description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Item2;