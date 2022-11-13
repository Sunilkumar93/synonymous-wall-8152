import { HStack, Box } from "@chakra-ui/react";
import React from "react";

export default function Tabs() {
  return (
    <HStack
      w="full"
      justifyContent="space-between"
     pl='20'
     pr='20'
      borderBottom="1px solid RGBA(0, 0, 0, 0.36)"
    >
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>New!</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Dressrd</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Clothing</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Shoes</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Accessories</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Gifts</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Home&Furniture</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Beauty&Wellness</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Gerden&Outdoor</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>BHLDN Weddings</Box>
      <Box _hover={{ color: "teal" ,borderBottom:"1px solid teal"}} py='7'>Sale</Box>
    </HStack>
  );
}
