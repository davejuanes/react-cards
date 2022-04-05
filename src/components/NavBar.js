import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="px-20 m-auto bg-zinc-700">
        <div className="flex sm:justify-between space-x-4 py-4">
          <div>
            <Link to="/" className="text-white">
              Posts.
            </Link>
          </div>

          <div>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive
                  ? "rounded-lg px-3 py-2 mr-1 font-medium hover:bg-zinc-800 hover:text-slate-300 bg-zinc-800 text-slate-300"
                  : "rounded-lg px-3 py-2 mr-1 text-white font-medium hover:bg-zinc-800 hover:text-slate-300"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nueva"
              className={(navData) =>
                navData.isActive
                  ? "rounded-lg px-3 py-2 font-medium hover:bg-zinc-800 hover:text-slate-300 bg-zinc-800 text-slate-300"
                  : "rounded-lg px-3 py-2 text-white font-medium hover:bg-zinc-800 hover:text-slate-300"
              }
            >
              Nueva publicación
            </NavLink>
          </div>
        </div>
      </nav>
    )
}