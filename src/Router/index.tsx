import { Route, Routes } from "react-router-dom";
import NonLoginRouter from "./NonLoginRouter";
import { NonLayoutBaseRoute } from "./NonLoginRouter/index.const";
import { TmpBaseRoute } from "./TmpRouter/index.const";
import Create from "@/pages/portfolio/Create";
import NaverCallback from "@/pages/NaverCallback";


const DefaultRouter = () => {
  return (
    <Routes>
      {/* <Route path={TmpBaseRoute} element={<TmpRouter />} /> */}
      <Route path={TmpBaseRoute} element={<Create />} />
      <Route path={NonLayoutBaseRoute} element={<NonLoginRouter />} />
      <Route path="/naver/callback" element={<NaverCallback />} />
      {/* 예: <Route path="/home" element={<Home />} /> 로 바꾸면 URL은 /home */}
    </Routes>
  );
};

export default DefaultRouter;
