import { lazy } from "react";

export const allRouters: {
  [key: string]: React.LazyExoticComponent<() => JSX.Element>;
} = {
  "/": lazy(() => import("@/pages/pageA")),
  "/pageA": lazy(() => import("@/pages/pageA")),
  "/pageB": lazy(() => import("@/pages/pageB")),
};
