function Item1({ id, img, title, time }) {
    return (
      <>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={img} // Sử dụng prop 'img'
              alt={title} // Sử dụng prop 'title' cho alt text
              className="w-full h-auto"
            />
            <div className="absolute top-2 right-2">
              <div className="bg-white rounded-full p-2 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {title} {/* Sử dụng prop 'title' */}
            </h3>
            {/* <p className="text-gray-600 text-sm mb-2">salad</p> */}
            <div className="bg-red-100 text-red-500 text-xs rounded-full px-2 py-1 inline-block">
              {time} {/* Sử dụng prop 'time' */}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Item1;