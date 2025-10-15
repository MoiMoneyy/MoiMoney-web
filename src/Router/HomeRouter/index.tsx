import { Route, Routes } from "react-router-dom";
import { HomeRoutes } from "./index.const";
import * as Pages from "@pages/index";
const HomeRouter = () => {
  return (
    <Routes>
      <Route path={HomeRoutes.HOME_MAIN} element={<Pages.MainHome />} />
      <Route
        path={HomeRoutes.CREATE_PORTFOLIO}
        element={<Pages.CreatePortfolio />}
      />
    </Routes>
  );
};
export default HomeRouter;
