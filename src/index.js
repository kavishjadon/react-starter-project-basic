import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LazyApp = React.lazy(() => import("./App"));

root.render(
  <React.Suspense fallback={<div>Main Loading...</div>}>
    <React.StrictMode>
      <LazyApp />
    </React.StrictMode>
  </React.Suspense>
);
