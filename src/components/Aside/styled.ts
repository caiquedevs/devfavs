import styled from "styled-components";
import colors from "../../styles/colors";

export const AsideBar = styled.aside`
  width: 100%;
  max-width: 364px;
  height: 100vh;
  padding: 40px 28px 0px 28px;

  display: flex;
  flex-direction: column;

  background-color: ${colors.darkBlue};

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 14px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      border-radius: 4px;
      background-color: ${colors.brightBlue};
      user-select: none;
      transition: 0.3s ease-out all;
      filter: brightness(0.7);

      &.active {
        transform: translate(10px, 0px);
        filter: brightness(1);
      }

      a {
        width: 100%;
        min-height: 70px;
        padding: 0 25px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 14px;

        cursor: pointer;
      }

      img {
        max-width: 30px;
        max-height: 30px;
      }

      span {
        opacity: 0;
        transition: 0.2s all;
        transform: translate(-20px, 0px);
      }

      span.active {
        opacity: 1;
        transform: translate(0px, 0px);
      }
    }
  }
`;
