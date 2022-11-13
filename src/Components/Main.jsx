import { Container } from "@chakra-ui/react";
import React from "react";
import Cetegeorytab from "./Cetegory/CetegeoryTab";
import CetegoryCard from "./Cetegory/CetegoryCard";
import CetegoryCardWithButton from "./Cetegory/CetegoryCardWithButton";

export default function Main() {
  return (
    <Container maxW="90%">
      <Cetegeorytab />
      <CetegoryCard />
      <CetegoryCardWithButton />
    </Container>
  );
}
