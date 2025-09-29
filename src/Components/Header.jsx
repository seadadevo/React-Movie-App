import { Plus } from "lucide-react"; 
import { Link, NavLink } from "react-router-dom";

const linksData =[
  {
    name: "Watch List",
    path: "/"
  },
  {
    name: "Watched",
    path: "/watched"
},
] 

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#032541] via-[#043c6b] to-[#032541] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

        <Link
          to={"/"}
          className="font-extrabold text-2xl sm:text-3xl tracking-wide text-white hover:text-[#24c878] transition-colors duration-300"
        >
          Ahmed<span className="text-[#24c878]">Movies</span>
        </Link>

  
        <div className="flex items-center space-x-6">
    
          <ul className="hidden sm:flex items-center space-x-6">
            {linksData.map(({name, path}, idx) => (
              <li key={idx}>
                <NavLink
                  to={path}
                  className="text-lg font-medium text-white hover:text-[#24c878] transition-colors duration-300"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

   
          <NavLink
            className="flex items-center gap-2 bg-[#24c878] text-white px-4 py-2 rounded-xl 
            hover:bg-[#1faa64] hover:scale-105 transition-all duration-200 
            focus:ring-2 focus:ring-[#24c878] focus:outline-none"
            to={'/add'}
          >
            <Plus size={20} />
            <span className="hidden sm:inline font-medium">Add</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
