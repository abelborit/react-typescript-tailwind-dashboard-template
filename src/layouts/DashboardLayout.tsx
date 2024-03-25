import { Outlet } from "react-router-dom";
import { SidebarDashboard } from "../components/SidebarDashboard.tsx";
import { HeaderDashboard } from "../components/HeaderDashboard.tsx";

export const DashboardLayout = () => {
  return (
    <div className="text-color-light bg-primary-dark-900 min-w-screen min-h-screen grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-6">
      <div className="lg:col-span-2 xl:col-span-1">
        <SidebarDashboard />
      </div>

      <div className="lg:col-span-6 xl:col-span-5">
        <HeaderDashboard />

        <div className="h-[93vh] md:h-[90vh] overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
