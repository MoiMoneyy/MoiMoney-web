import { Route, Routes } from "react-router-dom";
import NonLoginRouter from "./NonLoginRouter";
import { NonLayoutBaseRoute } from "./NonLoginRouter/index.const";
import { HomeBaseRoute } from "./HomeRouter/index.const";
import NaverCallback from "@/pages/NaverCallback";
import HomeRouter from "./HomeRouter";
import { FavoriteBaseRoute } from "./FavoriteRouter/index.const";
import FavoriteRouter from "./FavoriteRouter";
import { PortfolioBaseRoute } from "./PortfolioRouter/index.const";
import { UserBaseRoute } from "./UserRouter/index.const";
import PortfolioRouter from "./PortfolioRouter";
import UserRouter from "./UserRouter";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path={HomeBaseRoute} element={<HomeRouter />} />
      <Route path={FavoriteBaseRoute} element={<FavoriteRouter />} />
      <Route path={PortfolioBaseRoute} element={<PortfolioRouter />} />
      <Route path={UserBaseRoute} element={<UserRouter />} />
      <Route path={NonLayoutBaseRoute} element={<NonLoginRouter />} />
      <Route path="/naver/callback" element={<NaverCallback />} />
    </Routes>
  );
};

export default DefaultRouter;
