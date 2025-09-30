import { useNavigate } from "react-router-dom";
import DefaultRouter from "./Router";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuthStore } from "@/shared/store/auth";
import NaverCallback from "./pages/NaverCallback";
// 로그인 등 공통 처리를 위한 component
const App = () => {
  const navigate = useNavigate();
  const isLogin = useAuthStore((s) => s.isLogin);
  console.log('isLogin', isLogin)

  useEffect(() => {
    //로그인 시 페이지 이동
    if (isLogin) {
      navigate("/tmp", {
        replace: true,
      });
    }
  }, [isLogin, navigate]);

  return (
    <>
      <DefaultRouter />
      {/* <Route path="/naver/callback" element={<NaverCallback />} /> */}
    </>
  );
};

export default App;