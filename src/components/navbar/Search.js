import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/search.svg";
import { searched } from "../../features/filter/filterSlice";

const Search = () => {
  const { inputText } = useSelector((state) => state.filter);
  const [inputValue, setInputValue] = useState(inputText);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch("/");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(inputValue));
    if (!match) {
      navigate("/");
    }
    setInputValue("");
  };

  return (
    <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleFormSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={SearchIcon}
        alt="Search"
        onClick={handleFormSubmit}
      />
    </div>
  );
};

export default Search;
