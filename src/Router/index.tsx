import { Route, Routes } from "react-router-dom";
import NonLoginRouter from "./NonLoginRouter";
import { NonLayoutBaseRoute } from "./NonLoginRouter/index.const";
import { TmpBaseRoute } from "./TmpRouter/index.const";
import TmpRouter from "./TmpRouter";

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path={TmpBaseRoute} element={<TmpRouter />} />
      <Route path={NonLayoutBaseRoute} element={<NonLoginRouter />} />
      {/* 예: <Route path="/home" element={<Home />} /> 로 바꾸면 URL은 /home */}
    </Routes>
  );
};

export default DefaultRouter;
