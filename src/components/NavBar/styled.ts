import styled from "styled-components";
import colors from "../../styles/colors";

export const Nav = styled.nav`
  width: 100%;
  max-width: 77px;
  height: auto;
  min-height: 100vh;
  padding: 34px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${colors.lightBlue};

  label {
    cursor: pointer;

    input {
      appearance: none;
      display: none;
    }
  }

  svg {
    font-size: 30px;
    background-color: ${colors.white};
    border-radius: 8px;
  }
`;
