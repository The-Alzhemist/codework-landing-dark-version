
// Hold ไว้ก่อน ไว้กลับมาคุยกับ designer ให้ชัดว่า design เป็นไง scope เป็นไงแต่ละเดือนที่อยากเปลี่ยน

// import React, { useState } from "react";
// import { useQuery } from "react-query";

// export const GimmickSection = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   // Define a function to fetch data
//   const fetchData = async () => {
//     const response = await fetch(
//       `https://seo-keyword-research-tool.p.rapidapi.com/${searchQuery}?country=Thailand`,
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "87eef971b6mshb7eac99d74961c8p15c7e8jsna043113cfb80",
//           "X-RapidAPI-Host": "seo-keyword-research-tool.p.rapidapi.com",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     return response.json();
//   };

//   // Use React Query to fetch data
//   const {
//     data: searchResult,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useQuery<any>(
//     "searchResults", // Query key
//     fetchData, // Query function
//     {
//       enabled: false, // Disable automatic fetching
//     }
//   );

//   const onSubmitHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     refetch(); // Fetch data when the form is submitted
//   };

//   return (
//     <section className="relative py-12 md:py-[100px] mx-auto px-5 lg:px-[50px] sm:pt-0 bg-neutral-1000">
//       <h2 className="mb-14 flex justify-end relative">
//         <span className="text-primary-100 font-semibold text-xl md:text-4xl ">
//           Seo keyword Research tool
//         </span>
//       </h2>
//       <form onSubmit={onSubmitHandler}>
      
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="search"
//             id="default-search"
//             className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search Mockups, Logos..."
//             required
//             disabled={isLoading}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             value={searchQuery}
//           />
//           <button
//             type="submit"
//             className="text-gray-900  absolute right-2.5 bottom-2.5 bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             disabled={isLoading}
//           >
//             Search
//           </button>
//         </div>
//       </form>

//       {isLoading && <p className="text-primary-300">Loading...</p>}

//       {isError && <p className="text-red-500">{(error as Error).message}</p>}

//       {searchResult && (
//         <div className="mt-10">
//           {/* Display the search results here */}
//           <pre className="flex flex-wrap gap-5 text-xs">
//             {searchResult.map((item: any) => (
//               <>
//                 <div className="mb-5 rounded-3xl flex flex-col bg-primary-300 p-5 gap-2">
//                   <p className="">
//                     <b>Keyword: </b>{item.keyword}
//                   </p>
//                   <p> <b>Volume: </b> {item.volume}</p>
//                   <p><b>Competition:</b> {item.competition}</p>
//                 </div>
//               </>
//             ))}
//           </pre>
//         </div>
//       )}
//     </section>
//   );
// };
