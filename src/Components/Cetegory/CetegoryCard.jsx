import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
let data = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/7jXvmMVDvBGbZ5ax59qC5r/af2ec2a1774f120eee1d0fe5c6f4412a/LS_M1a_jackets.jpg?w=856&q=80&fm=webp",
    h1: "shop new",
    h2: "clothing& accessories",
    colSpan: "1",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/3oktWnvoX15F1kZ0WG8SYD/ef2ef25b1b7bc38587dd0f374c71907c/LS_M1b_Shoes.jpg?w=856&q=80&fm=webp",
    h1: "",
    h2: "shop shoes",
    colSpan: "1",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/5Yr2tYsYs7WS7y2S9FzZu4/976815d22202c70be9017483809197f4/LS_M1c_skirts.jpg?w=856&q=80&fm=webp",
    h1: "",
    h2: "shop skrit",
    colSpan: "1",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/5wF5faH6ao1X9vqla1KqJK/99ce45550031f6c44ebb4c692b4a69e5/LS_M2a_dresses.jpg?w=856&q=80&fm=webp",
    h1: "",
    h2: "shop dersses",
    colSpan: "1",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/4ViZ4IpRi0cErovgLJcSF8/e438f6000d881848b06f46dfa0b5a231/LS_M2b_New_Apparel___Accessories.jpg?w=856&q=80&fm=webp",
    h1: "",
    h2: "shop legware",
    colSpan: "1",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/jsCESTloNoXHssi8X1zFX/23b1b67b7821eb482d04231e2cd4832a/LS_M2c_new_apparel___accessories.jpg?w=856&q=80&fm=webp",
    h1: "shop new clothing",
    h2: "& accessories",
    colSpan: "1",
  },
  
];
export default function CetegoryCard() {
  return (
    <Grid templateColumns="repeat(3,1fr)" gap={5} my={9}>
      {data?.map((item) => {
        return (
          <GridItem key={item.image} colSpan={item.colSpan}>
            <Image src={item.image} alt="image" />
            <Text fontSize="md" as="u">
              {item.h1}
            </Text>
            <br />
            <Text fontSize="md" as="u">
              {item.h2}
            </Text>
          </GridItem>
        );
      })}
    </Grid>
  );
}
