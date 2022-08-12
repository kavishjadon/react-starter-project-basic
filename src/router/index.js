import { Suspense } from "react";
import {
  BrowserRouter as AppRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { DefaultLayout } from "../layout";
import { DefaultRoute, Routes } from "./routes";

const isUserLoggedIn = () => localStorage.getItem("token");

function FinalRoute({ route }) {
  if (!route.public && !isUserLoggedIn()) return <Navigate to="/login" />;
  return route.layout === "blank" ? (
    <route.component />
  ) : (
    <DefaultLayout>
      <Suspense fallback={<div>Loading....</div>}>
        <route.component />
      </Suspense>
    </DefaultLayout>
  );
}

function Router() {
  return (
    <AppRouter basename="/">
      <Switch>
        <Route path="/" element={<Navigate to={DefaultRoute} />} />
        {Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<FinalRoute route={route} />}
          />
        ))}
        <Route path="*" element={<div>Page not found!!</div>} />
      </Switch>
    </AppRouter>
  );
}

export default Router;
