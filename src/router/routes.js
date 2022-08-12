import { lazy } from "react";

// Which page to open when user opens your domain...
export const DefaultRoute = "/home";

export const Routes = [
  {
    path: "/login",
    component: lazy(() => import("../views/Login")),
    public: true,
    layout: "blank",
  },
  {
    path: "/home",
    component: lazy(() => import("../views/Home")),
  },
];
