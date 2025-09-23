import { Route, Routes } from "react-router-dom";
import { TmpRoutes } from "./index.const";
import * as Pages from "@pages/index";
const TmpRouter = () => {
  return (
    <Routes>
      <Route path={TmpRoutes.TMP_HOME} element={<Pages.TmpHome />} />
    </Routes>
  );
};
export default TmpRouter;
