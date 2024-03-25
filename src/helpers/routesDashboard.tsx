import { IconType } from "react-icons";
import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage2Line,
  RiCalendarTodoFill,
  RiSettings2Line,
} from "react-icons/ri";

interface RoutesDashboard {
  id: string;
  route: string;
  routesChildren?: RoutesChildrenDashboard[];
  name: string;
  icon: IconType;
}

interface RoutesChildrenDashboard {
  id: string;
  route: string;
  routesChildren?: RoutesChildrenDashboard[];
  name: string;
}

export const routesDashboard: RoutesDashboard[] = [
  {
    id: "analytics",
    route: "/dashboard/analytics",
    name: "Analytics",
    icon: RiBarChart2Line,
  },
  {
    id: "social-media",
    route: "/dashboard/social-media",
    routesChildren: [
      {
        id: "social-media-post",
        route: "/dashboard/social-media/post",
        name: "Social Media Post",
      },
      {
        id: "social-media-statistics",
        route: "/dashboard/social-media/statistics",
        name: "Social Media Statistics",
      },
      {
        id: "social-media-profile",
        route: "/dashboard/social-media/profile",
        name: "Social Media Profile",
      },
    ],
    name: "Social Media",
    icon: RiEarthLine,
  },
  {
    id: "message",
    route: "/dashboard/message",
    name: "Message",
    icon: RiMessage2Line,
  },
  {
    id: "schedule",
    route: "/dashboard/schedule",
    name: "Schedule",
    icon: RiCalendarTodoFill,
  },
  {
    id: "settings",
    route: "/dashboard/settings",
    name: "Settings",
    icon: RiSettings2Line,
  },
];
