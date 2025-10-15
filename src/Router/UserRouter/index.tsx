import { Route, Routes } from "react-router-dom";
import { UserRoutes } from "./index.const";
const UserRouter = () => {
  return (
    <Routes>
      <Route path={UserRoutes.USER_MAIN} element={<>유저 홈 임시</>} />
    </Routes>
  );
};
export default UserRouter;
