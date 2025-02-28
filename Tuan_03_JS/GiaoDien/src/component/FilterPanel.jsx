// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function FilterPanel({ cookingMethods, themeColor }) {
//     const [expanded, setExpanded] = useState({ type: true, time: true, rating: true });
//     const [selectedMethods, setSelectedMethods] = useState([]);
//     const [timeRange, setTimeRange] = useState([30, 50]);
//     const [selectedRatings, setSelectedRatings] = useState([]);

//     const toggleExpand = (section) => {
//         setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
//     };

//     const handleCheckboxChange = (method) => {
//         setSelectedMethods((prev) =>
//             prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
//         );
//     };

//     const handleRatingChange = (rating) => {
//         setSelectedRatings((prev) =>
//             prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
//         );
//     };

//     return (
//         <div className="w-72 bg-white p-4 rounded-lg shadow-lg">
//             {/* Header */}
//             <div className="flex items-center gap-2 font-bold text-lg">
//                 <span className="text-xl">☰</span>
//                 <span>FILTERS</span>
//             </div>

//             {/* Type Filter */}
//             <div className="mt-4 border-b pb-2">
//                 <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand("type")}>
//                     <span className="font-semibold">Type</span>
//                     {expanded.type ? <ChevronUp color={themeColor} /> : <ChevronDown color={themeColor} />}
//                 </div>
//                 {expanded.type && (
//                     <div className="grid grid-cols-2 gap-2 mt-2">
//                         {cookingMethods.map((method) => (
//                             <label key={method} className="flex items-center gap-2 cursor-pointer">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedMethods.includes(method)}
//                                     onChange={() => handleCheckboxChange(method)}
//                                     className={`accent-[${themeColor}]`}
//                                 />
//                                 {method}
//                             </label>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {/* Time Filter */}
//             <div className="mt-4 border-b pb-2">
//                 <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand("time")}>
//                     <span className="font-semibold">Time</span>
//                     {expanded.time ? <ChevronUp color={themeColor} /> : <ChevronDown color={themeColor} />}
//                 </div>
//                 {expanded.time && (
//                     <div className="mt-2">
//                         <div className="flex justify-between text-sm">
//                             <span>{timeRange[0]} minutes</span>
//                             <span>{timeRange[1]} minutes</span>
//                         </div>
//                         <input
//                             type="range"
//                             min="10"
//                             max="60"
//                             value={timeRange[0]}
//                             onChange={(e) => setTimeRange([parseInt(e.target.value), timeRange[1]])}
//                             className={`w-full accent-[${themeColor}]`}
//                         />
//                         <input
//                             type="range"
//                             min="10"
//                             max="60"
//                             value={timeRange[1]}
//                             onChange={(e) => setTimeRange([timeRange[0], parseInt(e.target.value)])}
//                             className={`w-full accent-[${themeColor}]`}
//                         />
//                     </div>
//                 )}
//             </div>

//             {/* Rating Filter */}
//             <div className="mt-4 border-b pb-2">
//                 <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand("rating")}>
//                     <span className="font-semibold">Rating</span>
//                     {expanded.rating ? <ChevronUp color={themeColor} /> : <ChevronDown color={themeColor} />}
//                 </div>
//                 {expanded.rating && (
//                     <div className="mt-2 space-y-1">
//                         {[5, 4, 3, 2, 1].map((rating) => (
//                             <label key={rating} className="flex items-center gap-2 cursor-pointer">
//                                 <input
//                                     type="checkbox"
//                                     checked={selectedRatings.includes(rating)}
//                                     onChange={() => handleRatingChange(rating)}
//                                     className={`accent-[${themeColor}]`}
//                                 />
//                                 {[...Array(5)].map((_, index) => (
//                                     <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
//                                         ★
//                                     </span>
//                                 ))}
//                             </label>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {/* Apply Button */}
//             <button className={`w-full mt-4 py-2 rounded-full text-white font-semibold`} style={{ backgroundColor: themeColor }}>
//                 Apply
//             </button>
//         </div>
//     );
// }

// export default FilterPanel;
