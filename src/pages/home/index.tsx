import { ReactElement } from "react";

import { Container } from "./styled";

import Navbar from "../../components/NavBar";
import Aside from "../../components/Aside";
import ListItems from "../../components/ListItems";

// import database from "../../utils/database";

export default function HomePage(): ReactElement {
  return (
    <Container>
      <Navbar />
      <Aside />
      <ListItems />
    </Container>
  );
}
