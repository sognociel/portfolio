import React, { useState } from "react";

import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  // navbar 항목을 클릭하면 접히게 하는 기능
  const [open, setOpen] = useState(false);
  const toggleList = () => {
    setOpen((open) => !open);
  };

  return (
    <nav>
      <ul className={open ? "show-menu" : "hide-menu"}>
        <a href="#aboutMe">
          <li
            className="nav-list {open ? 'show-menu' : 'hide-menu'}"
            onClick={() => toggleList()}
          >
            About me
          </li>
        </a>
        <a href="#skills">
          <li
            className="nav-list {open ? 'show-menu' : 'hide-menu'}"
            onClick={() => toggleList()}
          >
            Skills
          </li>
        </a>
        <a href="#project">
          <li
            className="nav-list {open ? 'show-menu' : 'hide-menu'}"
            onClick={() => toggleList()}
          >
            Project
          </li>
        </a>
        <a href="#career">
          <li
            className="nav-list {open ? 'show-menu' : 'hide-menu'}"
            onClick={() => toggleList()}
          >
            Career
          </li>
        </a>
        <a href="#edu">
          <li
            className="nav-list {open ? 'show-menu' : 'hide-menu'}"
            onClick={() => toggleList()}
          >
            Education
          </li>
        </a>
      </ul>
      {/* 반응형 토글 메뉴 */}
      <MdOutlineMenu className="menu" onClick={() => toggleList()} />
    </nav>
  );
};

export default Navbar;
