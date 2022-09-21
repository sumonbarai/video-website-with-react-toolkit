import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/filterSlice";
import { paginate } from "../../features/pagination/paginationSlice";
import { fetchTagsThunk } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(fetchTagsThunk());
  }, [dispatch]);

  const handleReset = () => {
    dispatch(reset());
    dispatch(paginate(0));
  };

  return tags.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto flex justify-between overflow-y-auto items-center">
        <div className=" px-5 py-6 lg:px-0 flex items-center gap-2 border-b ">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title}></Tag>
          ))}
        </div>
        <button
          className="bg-blue-500 rounded-lg p-2 text-white cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </section>
  ) : null;
};

export default Tags;
