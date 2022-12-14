import { Checks, HouseSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const variant = {
    active: `p-4 my-2 gap-2 text-sm text-zinc-50 bg-primary rounded-xl flex flex-col justify-center items-center`,
    default: `p-4 my-2 gap-2 text-sm hover:text-zinc-50 hover:bg-primary transition-all rounded-xl flex flex-col justify-center items-center`,
  };

  return (
    <div className="w-32">
      <aside className="fixed w-32 p-4 bg-white rounded-2xl flex flex-col items-center">
        <img src="/favicon.svg" width="60px" alt="" />
        <nav className="mt-8">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? variant.active : variant.default
                }
              >
                <HouseSimple weight="bold" size={20} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  isActive ? variant.active : variant.default
                }
              >
                <Checks weight="bold" size={20} />
                Tasks
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
