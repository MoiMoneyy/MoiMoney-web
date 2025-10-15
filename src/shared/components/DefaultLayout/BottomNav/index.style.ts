import { LAYER_LEVEL } from "@/shared/constant";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0px -1px 12px 0px #0000001a;
  background-color: white;
  /* background-color: blue; */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${LAYER_LEVEL.botom_nav};
`;

export const ButtonList = styled.div`
  display: flex;
  height: 45px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
export const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  align-items: center;
`;

export const Title = styled.span`
  font-family: Pretendard;
  font-weight: 600;
  line-height: 1.6;
  font-size: 11px;
`;
