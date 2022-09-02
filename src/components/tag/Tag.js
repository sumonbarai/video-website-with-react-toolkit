import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../features/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { selectedTag } = useSelector((state) => state.filter);
  const isSelected = selectedTag.includes(title) ? true : false;
  const handleClick = () => {
    if (isSelected) {
      dispatch(removeTag(title));
    } else {
      dispatch(addTag(title));
    }
  };
  return (
    <div
      className={`${
        isSelected ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600"
      } px-4 py-1 rounded-full cursor-pointer`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default Tag;
