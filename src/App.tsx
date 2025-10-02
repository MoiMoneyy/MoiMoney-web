import { useNavigate } from "react-router-dom";
import DefaultRouter from "./Router";
import { useEffect } from "react";
import { useAuthStore } from "@/shared/store/auth";
import DefaultLayout from "./shared/components/DefaultLayout";

const App = () => {
  const navigate = useNavigate();
  // const isLogin = useAuthStore((s) => s.isLogin);
  const isLogin = true;
  useEffect(() => {
    if (isLogin) {
      navigate("/main", {
        replace: true,
      });
    } else {
      navigate("/", {
        replace: true,
      });
    }
  }, []);

  return (
    <DefaultLayout>
      <DefaultRouter />
    </DefaultLayout>
  );
};

export default App;
