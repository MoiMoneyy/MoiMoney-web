import { useNavigate } from "react-router-dom";
import DefaultRouter from "./Router";
import { useEffect } from "react";

// 로그인 등 공통 처리를 위한 component
const isLogin = true;
const App = () => {
  const navigate = useNavigate();

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
    </>
  );
};

export default App;
