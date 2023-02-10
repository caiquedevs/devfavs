import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${colors.lightBlue};
`;
