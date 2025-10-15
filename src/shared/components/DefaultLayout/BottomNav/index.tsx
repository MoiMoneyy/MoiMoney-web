import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./index.style";
import * as NavIcon from "@assets/BottomNav";

const navList = [
  {
    Icon: NavIcon.Home,
    ActiveIcon: NavIcon.HomeActive,
    title: "홈",
    link: "/home",
  },
  {
    Icon: NavIcon.Portfolio,
    ActiveIcon: NavIcon.PortfolioActive,
    title: "포트폴리오",
    link: "/portfolio",
  },
  {
    Icon: NavIcon.Favorite,
    ActiveIcon: NavIcon.FavoriteActive,
    title: "관심종목",
    link: "/favorite",
  },
  {
    Icon: NavIcon.User,
    ActiveIcon: NavIcon.UserActive,
    title: "My페이지",
    link: "/user",
  },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <S.Container>
      <S.ButtonList>
        {navList.map(({ ActiveIcon, Icon, ...el }) => {
          const isActive = location.pathname.includes(el.link);

          const handleClickButton = () => {
            navigate(el.link);
          };
          return (
            <S.NavButton key={el.title} onClick={handleClickButton}>
              <img src={!isActive ? Icon : ActiveIcon} />
              <S.Title
                style={{
                  color: isActive ? "#6A7CF0" : "#B3B3B3",
                  fontWeight: isActive ? "700" : "600",
                }}
              >
                {el.title}
              </S.Title>
            </S.NavButton>
          );
        })}
      </S.ButtonList>
    </S.Container>
  );
};

export default BottomNav;
