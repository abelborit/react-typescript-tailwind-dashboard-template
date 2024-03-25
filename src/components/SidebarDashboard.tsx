import {
  RiBarChartFill,
  RiLogoutCircleRLine,
  RiArrowDownSLine,
  RiMenuFill,
  RiCloseLine,
} from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { routesDashboard } from "../helpers/routesDashboard";
import { useState } from "react";

export const SidebarDashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const titleClass =
    "font-Lato flex justify-center items-center gap-2 text-3xl xl:text-3xl text-center font-bold tracking-[2px]";

  return (
    <>
      {/* usando el w-full h-full con fixed donde al ser fixed se comporta como el bloque contenedor y es por eso que toma todo el alto */}
      <div
        className={`w-[75vw] md:w-[35vw] lg:w-full h-full fixed p-6 lg:static xl:h-[100vh] bg-primary-dark-700 flex flex-col justify-between duration-500 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div className="relative w-full">
          <Link
            to="/dashboard/home"
            className={`relative text-color-light z-40 ${titleClass}`}
          >
            <div className="m-0 p-0">
              <RiBarChartFill className="text-accent-primary -mb-2" />
              <RiBarChartFill className="text-accent-primary rotate-180" />
            </div>
            <span>Admin</span>
          </Link>
          <span
            className={`absolute top-[2.5px] left-[2px] w-full text-color-light/25 ${titleClass}`}
          >
            <div className="m-0 p-0">
              <RiBarChartFill className="text-accent-primary/25 -mb-2" />
              <RiBarChartFill className="text-accent-primary/25 rotate-180" />
            </div>
            <span>Admin</span>
          </span>
        </div>

        <nav className="my-6 h-full overflow-y-auto flex flex-col gap-4">
          {routesDashboard.map((route) =>
            route.routesChildren ? (
              <div
                key={route.id}
                className={`${
                  showSubmenu ? "bg-primary-dark-900/40 rounded-xl" : ""
                }`}
              >
                <button
                  onClick={handleShowSubmenu}
                  className={`w-full flex items-center justify-between text-base font-bold text-neutral-300 py-2 px-3 rounded-xl hover:bg-primary-dark-900/60 transition-colors duration-300 ${
                    showSubmenu && "bg-primary-dark-900 mb-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <route.icon size={20} className="text-accent-primary" />
                    <span>{route.name}</span>
                  </div>
                  <RiArrowDownSLine
                    size={20}
                    className={`${showSubmenu && "-rotate-180"} duration-300`}
                  />
                </button>

                <div
                  className={`mt-2 overflow-hidden ${
                    showSubmenu ? "" : "-mb-2"
                  }`}
                >
                  <nav
                    className={`flex flex-col w-[90%] mx-[10%] transition-all duration-300 ${
                      showSubmenu ? "h-[115px]" : "h-0"
                    }`}
                  >
                    {route.routesChildren.map((routeChildren) => (
                      <NavLink
                        to={routeChildren.route}
                        key={routeChildren.id}
                        className={({ isActive }) =>
                          `text-[13px] font-bold py-2 px-3 border-l-[2px] border-gray-500 relative before:absolute before:w-[14px] before:h-[14px] before:rounded-full before:-left-[7px] before:border-4 before:border-primary-dark-700 duration-300 hover:before:bg-accent-primary hover:text-color-light ${
                            isActive
                              ? "before:bg-accent-primary text-color-light"
                              : "before:bg-gray-500 text-gray-500"
                          }`
                        }
                      >
                        {routeChildren.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            ) : (
              <NavLink
                to={route.route}
                key={route.id}
                className={({ isActive }) =>
                  `flex items-center text-base gap-3 font-bold text-neutral-300 py-2 px-3 rounded-xl hover:bg-primary-dark-900/60 transition-colors duration-300 ${
                    isActive ? "bg-primary-dark-900" : ""
                  }`
                }
              >
                <route.icon size={20} className="text-accent-primary" />
                <span>{route.name}</span>
              </NavLink>
            )
          )}
        </nav>

        <Link
          to="/auth/login"
          className="w-[65%] mx-auto flex md:justify-center items-center gap-2 font-Lato font-bold tracking-[1px] text-neutral-300 hover:text-danger/80 duration-300"
        >
          <RiLogoutCircleRLine
            strokeWidth={1}
            size={18}
            className="text-danger/80"
          />
          <span>Logout</span>
          <RiLogoutCircleRLine
            strokeWidth={1}
            size={18}
            className="rotate-180 text-danger/80"
          />
        </Link>
      </div>

      <button
        onClick={handleShowMenu}
        className="fixed bottom-[18px] right-[18px] bg-accent-primary p-2 rounded-full text-primary-dark-900 outline-none xl:hidden"
      >
        {showMenu ? (
          <RiCloseLine size={25} strokeWidth={1} />
        ) : (
          <RiMenuFill size={25} strokeWidth={1} />
        )}
      </button>
    </>
  );
};
