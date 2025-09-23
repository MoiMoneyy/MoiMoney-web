import { Route, Routes } from "react-router-dom";
import * as Pages from "@pages/index";
import { NonLayoutRoutes } from "./index.const";

const NonLoginRouter = () => {
  return (
    <Routes>
      <Route path={NonLayoutRoutes.LOGIN} element={<Pages.LoginPage />} />
    </Routes>
  );
};

export default NonLoginRouter;
