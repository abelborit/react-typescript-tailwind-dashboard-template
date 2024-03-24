import { Navigate, createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/auth",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/auth/*",
    async lazy() {
      const { AuthLayout } = await import("./layouts/AuthLayout.tsx");
      return { Component: AuthLayout };
    },
    children: [
      {
        // index: true, // se coloca true si queremos que cuando entre a /auth entonces su index sea el componente Login (se tendría que comentar o sacar el path para que funcione) pero aquí estamos colocando su ruta de forma explícita con path: "login" para que cuando entre a ese path de /auth/login entonces se muestre el componente Login
        path: "login",
        async lazy() {
          const { Login } = await import("./pages/auth/Login.tsx");
          return { Component: Login };
        },
      },
      {
        path: "register",
        async lazy() {
          const { Register } = await import("./pages/auth/Register.tsx");
          return { Component: Register };
        },
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Navigate to="/dashboard/home" />,
  },
  {
    path: "/dashboard/*",
    async lazy() {
      const { DashboardLayout } = await import("./layouts/DashboardLayout.tsx");
      return { Component: DashboardLayout };
    },
    children: [
      {
        // index: true, // se coloca true si queremos que cuando entre a /dashboard entonces su index sea el componente Home (se tendría que comentar o sacar el path para que funcione) pero aquí estamos colocando su ruta de forma explícita con path: "home" para que cuando entre a ese path de /dashboard/home entonces se muestre el componente Home
        path: "home",
        async lazy() {
          const { Home } = await import("./pages/dashboard/Home.tsx");
          return { Component: Home };
        },
      },
      {
        path: "*",
        element: <Navigate to="/dashboard/home" />,
      },
    ],
  },
  {
    path: "*",
    async lazy() {
      const { Error404 } = await import("./pages/Error404.tsx");
      return { Component: Error404 };
    },
  },
]);
