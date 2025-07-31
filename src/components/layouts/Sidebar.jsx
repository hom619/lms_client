import React from "react";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <MdOutlineDashboard /> Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <IoBookSharp /> Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/users-list">
          <FaUsers /> All users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/borrow">
          <RiFileHistoryFill /> Borrow History
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/profile">
          <CgProfile /> Profile
        </Link>
      </div>
    </Stack>
  );
};
