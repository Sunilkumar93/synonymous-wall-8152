import { Button, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
const data = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/gvtQ7vdLL1NIzHnP61goT/cf11fdce21cdd03939556f8b620d1fc0/LS_M3_Home.jpg?w=2641&q=80&fm=webp",
    h1: "shop new clothing",
    h2: "& accessories",
    colSpan: "3",
    mt: "500px",
    mb: "15px",
    button: ["explore the edit", "take the fulll house toor"],
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/4NK6QXYqXQVTDhpZ9UMWNK/d911d177da539390c2d1b6daa495ac8e/RR_Jewelry.jpg?w=856&q=80&fm=webp",
    h1: "shop new clothing",
    h2: "& accessories",
    colSpan: "1",
    mt: "300px",
    mb: "10px",
    button: ["shop jewelry"],
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/6HzwDJ0UOm79B8yDxaLdZl/284875498314791ff31a37b44d8dfc84/RR_Tops.jpg?w=856&q=80&fm=webp",
    h1: "shop new clothing",
    h2: "& accessories",
    colSpan: "1",
    mt: "300px",
    mb: "10px",
    button: ["shop toys"],
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/2efDE4cBwaR3ZQyPzztR7J/597dd3c7dd19dca2852c0a43198f5d6d/RR_Candles.jpg?w=856&q=80&fm=webp",
    h1: "shop new clothing",
    h2: "& accessories",
    colSpan: "1",
    mt: "300px",
    mb: "10px",
    button: ["shop candles"],
  },
];

export default function CetegoryCardWithButton() {
  return (
    <Grid templateColumns="repeat(3,1fr)" gap={10} my="10">
      {data?.map((item) => {
        return (
          <GridItem
            backgroundImage={item.image}
            bgSize="100%"
            colSpan={item.colSpan}
            key={item.image}
          >
            <HStack justifyContent="center" mt={item.mt} mb={item.mb}>
              {item.button.map((button) => (
                <Button>
                  {
                    <Text _hover={{ textDecoration: "underline" }}>
                      {button}
                    </Text>
                  }
                </Button>
              ))}
            </HStack>
          </GridItem>
        );
      })}
    </Grid>
  );
}
