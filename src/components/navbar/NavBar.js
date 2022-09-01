import React from "react";
import logoLws from "../../assets/lws.svg";
import Search from "./Search";

const NavBar = () => {
  return (
    <div>
      <nav class="bg-slate-100 shadow-md">
        <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <a href="/">
            <img class="h-10" src={logoLws} alt="Learn with Sumit" />
          </a>
          <Search></Search>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
