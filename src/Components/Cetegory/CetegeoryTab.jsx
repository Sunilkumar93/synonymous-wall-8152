import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
const data = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/47eyZCpBqV1g7NsCX5SE2Y/65bf35ea0f4c96a6b1290f8daa50922d/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp",
    id: "1",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/4K5YPMs18qEApJJRubJYM6/273445b781bd85456eff903bb1b22893/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp",
    id: "2",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/1XVNuuUR1dhl2K9FPuLCFQ/6131f2813ddfa4b584c7d3b137a55234/LS_M0_Banner_c.jpg?w=630&q=80&fm=webp",
    id: "3",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/1LVnnHVrAz8vqXmMqh6Bfm/c31c8c3adf1ffb266acc45a659ae6b95/LS_M0_Banner_d.jpg?w=630&q=80&fm=webp",
    id: "4",
  },
];
export default function Cetegeorytab() {
  return (
    <HStack mt="7">
      {data?.map((item) => {
        return (
          <Box key={item.id} >
            <Image src={item.image} alt="image" />
          </Box>
        );
      })}
    </HStack>
  );
}
