import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  const isAdmin = user.role === "admin";
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <MdOutlineDashboard /> Dashboard
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user/my-borrow">
          <RiFileHistoryFill /> My Borrow List
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/profile">
          <CgProfile /> Profile
        </Link>
      </div>
      {isAdmin && (
        <>
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
            <Link className="nav-link" to="/user/borrow-history">
              <FaCopy /> Borrow History
            </Link>
          </div>
        </>
      )}
    </Stack>
  );
};
