import BottomNav from "./BottomNav";
import * as S from "./index.style";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Container>
      <S.Content id="test">
        {children}
        <BottomNav />
      </S.Content>
    </S.Container>
  );
};

export default DefaultLayout;
