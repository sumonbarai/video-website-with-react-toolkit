import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginate } from "../../features/pagination/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const { videos } = useSelector((state) => state.videos);

  if (videos.length > 0) {
    var numberOfPage = Math.ceil(
      videos.length / process.env.REACT_APP_PAGINATE_PER_PAGE
    );
  }
  const handPagination = (index) => {
    setCurrentPage(index);
    dispatch(paginate(index));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {[...Array(numberOfPage).keys()].map((number, index) => {
          return (
            <button
              key={index}
              className={`text-white px-4 py-1 rounded-full cursor-pointer ${
                currentPage === number ? "bg-blue-600" : "bg-blue-200"
              }`}
              onClick={() => handPagination(index)}
            >
              {number + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Pagination;
