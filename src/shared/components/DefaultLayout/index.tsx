import * as S from "./index.style";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default DefaultLayout;
