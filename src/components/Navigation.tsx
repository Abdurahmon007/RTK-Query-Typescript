import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-purple-700 text-white  ">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to={"/"}> Home </Link>
        <Link to={"/fav"}>Favourites</Link>
      </span>
    </nav>
  );
};
