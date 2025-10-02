import { Route, Routes } from "react-router-dom";
import { MainRoutes } from "./index.const";
import * as Pages from "@pages/index";
const MainRouter = () => {
  return (
    <Routes>
      <Route path={MainRoutes.MAIN_HOME} element={<Pages.MainHome />} />
      <Route
        path={MainRoutes.CREATE_PORTFOLIO}
        element={<Pages.CreatePortfolio />}
      />
    </Routes>
  );
};
export default MainRouter;
