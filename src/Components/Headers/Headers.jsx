import { Container } from "@chakra-ui/react";
import React from "react";
import Addvertisement from "./Addvertisement";
import Loginandlanguage from "./Loginandlanguage";
import Navandsearch from "./Navandsearch";
import Tabs from "./Tabs";

export default function Headers() {
  return (
    <Container maxW="full" p="0">
      <Addvertisement
        image={
          "https://images.ctfassets.net/5de70he6op10/59kyQzC1IlwtW1mFbWHkc1/aa7134672aae2516dad42268183d406d/093022_George_Viv_HolidayPreShop_PrimaryBanner_LS_NonLoyalty.jpg"
        }
      />
      <Loginandlanguage />
      <Navandsearch />
      <Tabs />
    </Container>
  );
}
