import { Route, Routes } from "react-router-dom";
import { FavoriteRoutes } from "./index.const";
const FavoriteRouter = () => {
  return (
    <Routes>
      <Route
        path={FavoriteRoutes.FAVORITE_HOME}
        element={<>임시 관심종목 홈</>}
      />
    </Routes>
  );
};
export default FavoriteRouter;
