import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BoxShadow from "../components/Box/BoxShadow.tsx";
import TextShadow from "../components/Text/TextShadow.tsx";
import Border from "../components/Border/index.tsx";
import Transform from "../components/Transform/index.tsx";
import Gradient from "../components/Gradient/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BoxShadow />,
  },
  {
    path: "/text-shadow",
    element: <TextShadow />,
  },
  {
    path: "/border",
    element: <Border />,
  },
  {
    path: "/transform",
    element: <Transform />,
  },
  {
    path: "/gradient",
    element: <Gradient />,
  },
]);
export default router;
