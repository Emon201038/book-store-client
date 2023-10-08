// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { search, tagSelected } from "../../features/Filter Book/filterSlice";
// import { getBooksThunk } from "../../features/Get Books and Delete/getBooksSlice";

// const Head = () => {
//   const { tags, searchValue } = useSelector((state) => state.filter);
//   const [input, setInput] = useState(searchValue);

//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { book } = useSelector((state) => state.getSingleBook);
//   const editMode = location.pathname === `/book/edit/${book.id}`;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(search(input));
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="py-4 2xl:px-6  max-sm:h-[80px] max-sm:relative">
//       <div className="container relative flex items-center justify-between ">
//         <p className="max-sm:hidden"></p>
//         <div
//           className={`lg:hidden md:hidden max-sm:absolute max-sm:left-[40px] sm:absolute sm:left-[40px] max-sm:mt-10 ${
//             isOpen &&
//             "max-sm:mt-1 hover:bg-red-600 duration-500 w-[150px] h-[30px] "
//           } cursor-pointer p-1 rounded-lg text-center ${
//             isOpen ? "top-[150px]" : ""
//           }`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <ion-icon name={`${!isOpen ? "menu" : "close"}`}></ion-icon>
//         </div>
//         <ul
//           className={`md:flex  max-sm:p-5 space-x-6  max-sm:bg-blue-700
//           ${
//             !isOpen ? "hidden" : ""
//           } max-sm:h-[250px] max-sm:w-[200px] max-sm:rounded-lg`}
//         >
//           <Link to={"/"}>
//             <li
//               className={`cursor-pointer max-sm:hover:bg-slate-500 max-sm:w-full max-sm:hover:p-1 max-sm:rounded-lg duration-500 text-center ${
//                 location.pathname === "/" ? "font-semibold" : ""
//               }`}
//             >
//               Book Store
//             </li>
//           </Link>
//           <Link to={"/wishlist"}>
//             <li
//               className={`cursor-pointer max-sm:hover:bg-slate-500 max-sm:w-full max-sm:hover:p-1 max-sm:rounded-lg duration-500 text-center ${
//                 location.pathname === "/wishlist" ? "font-semibold" : ""
//               }`}
//             >
//               Wishlist
//             </li>
//           </Link>
//           <Link to={"/mycollections"}>
//             <li
//               className={`cursor-pointer max-sm:hover:bg-slate-500 max-sm:w-full max-sm:hover:p-1 max-sm:rounded-lg duration-500 text-center ${
//                 location.pathname === "/mycollections" ? "font-semibold" : ""
//               }`}
//             >
//               My Collection
//             </li>
//           </Link>

//           <Link to={editMode ? `/book/edit/${book.id}` : "/book/add"}>
//             <li
//               className={`cursor-pointer max-sm:hover:bg-slate-500 max-sm:w-full max-sm:hover:p-1 max-sm:rounded-lg duration-500 text-center ${
//                 location.pathname === "/book/add" ||
//                 location.pathname === `/book/edit/${book.id}`
//                   ? "font-semibold"
//                   : ""
//               }`}
//             >
//               {editMode ? "Edit Book" : "Add Book"}
//             </li>
//           </Link>
//         </ul>

//         <form
//           className="flex items-center max-sm:absolute max-sm:right-0 max-sm:top-[-30px]max-sm:mt-10"
//           onSubmit={handleSubmit}
//         >
//           <div className="group relative rounded-md bg-white">
//             <svg
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
//             >
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               ></path>
//             </svg>
//             <input
//               type="text"
//               placeholder="Filter books..."
//               className="search"
//               id="lws-searchBook"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default Head;
