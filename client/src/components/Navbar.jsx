import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-zinc-700 flex flex-col justify-between items-center py-10 rounded-b-xl">
      <h1 className="text-cyan-400">React MySQL</h1>

      <ul className="flex flex-row gap-5 text-black">
        <li className="hover:text-cyan-400">
          <Link className="bg-amber-50 rounded-2xl px-4 py-1 shadow-md shadow-black font-bold hover:bg-black transition ease-linear" to={"/"}>Home</Link>
        </li>
        <li className="hover:text-cyan-400">
          <Link className="bg-amber-50 rounded-2xl px-4 py-1 shadow-md shadow-black font-bold hover:bg-black transition ease-linear" to={"/new"}>Create Task</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
