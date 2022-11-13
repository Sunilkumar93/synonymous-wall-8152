import { Box, Input, Flex, HStack, Image } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

export default function Navandsearch() {
  return (
    <Flex
      borderBottom="1px solid RGBA(0, 0, 0, 0.36)"
      pl="20"
      pr="20"
      justifyContent="space-between"
    >
      <HStack m="0">
        <Box
          p="6"
          borderLeft="2.5px solid RGBA(0, 0, 0, 0.36)"
          borderTop="3px solid green"
          m="0"
        >
          <Image src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg" />
        </Box>
        <Box
          p="1.09rem"
          alignContent="center"
          borderLeft="2.5px solid RGBA(0, 0, 0, 0.36)"
          borderRight="2.5px solid RGBA(0, 0, 0, 0.36)"
          marginInlineStart="0"
        >
          <Image src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg" />
        </Box>
      </HStack>
      <HStack gap='3'>
        <HStack border="1px solid gray" pl="2" pr="2" borderRadius="5px">
          <Input
            type="text"
            placeholder="Search Anthropologie"
            border="none"
            p="0"
          />
          <Search2Icon ml="0" />
        </HStack>
        <Box
          as="svg"
          role="img"
          width="20px"
          height="20px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="teal"
          _hover={{
            fill: "brand.accent",
          }}
          mr="0.4"
        >
          <path d="M14.78 6.49V5.185C14.78 2.601 12.637.5 10 .5S5.22 2.601 5.22 5.184v1.307H0v7.973C0 17.24 2.357 19.5 5.254 19.5h9.493c2.897 0 5.253-2.26 5.253-5.036V6.49zM6.22 5.185C6.22 3.153 7.914 1.5 10 1.5s3.78 1.653 3.78 3.684v1.307H6.22zM19 14.464c0 2.225-1.908 4.036-4.253 4.036H5.254C2.908 18.5 1 16.69 1 14.464V7.49h4.22v2.427h1V7.491h7.56v2.427h1V7.491H19z"></path>
        </Box>
      </HStack>
    </Flex>
  );
}
