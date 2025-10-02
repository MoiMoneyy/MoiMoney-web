import { Route, Routes } from "react-router-dom";
import NonLoginRouter from "./NonLoginRouter";
import { NonLayoutBaseRoute } from "./NonLoginRouter/index.const";
import { MainBaseRoute } from "./MainRouter/index.const";
import NaverCallback from "@/pages/NaverCallback";
import MainRouter from "./MainRouter";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path={MainBaseRoute} element={<MainRouter />} />
      <Route path={NonLayoutBaseRoute} element={<NonLoginRouter />} />
      <Route path="/naver/callback" element={<NaverCallback />} />
      {/* 예: <Route path="/home" element={<Home />} /> 로 바꾸면 URL은 /home */}
    </Routes>
  );
};

export default DefaultRouter;
