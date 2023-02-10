import styled from 'styled-components';
import colors from '../../styles/colors';

interface IContainer {
  showSearch?: boolean;
}

export const Container = styled.section<IContainer>`
  height: 100vh;
  padding: 40px 28px;

  display: flex;
  flex-direction: column;
  flex: 1;

  background-color: ${colors.lightBlue};

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  div.title-group {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 0;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        width: ${(props) => (props.showSearch ? '400px' : '0')};
        height: 38px;
        padding: ${(props) => props.showSearch && '0 15px'};

        border: none;
        border-radius: 5px;
        background-color: #e9e9e9;

        color: ${colors.darkBlue};

        transition: 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;

    li {
      width: 100%;
      height: 50px;
      padding: 0 15px;

      display: flex;
      align-items: center;

      border-radius: 8px;
      background-color: ${colors.darkBlue};

      overflow: hidden;
      a {
        text-decoration: none;
      }
      figure {
        display: flex;
        align-items: center;
        gap: 14px;
      }
    }
  }
`;
