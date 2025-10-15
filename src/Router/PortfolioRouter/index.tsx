import { Route, Routes } from "react-router-dom";
import { PortfolioRoutes } from "./index.const";
const PortfolioRouter = () => {
  return (
    <Routes>
      <Route
        path={PortfolioRoutes.PORTFOLIO_MAIN}
        element={<>포트폴리오 임시 홈</>}
      />
    </Routes>
  );
};
export default PortfolioRouter;
