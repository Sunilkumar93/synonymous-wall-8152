import {
  Flex,
  HStack,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function Loginandlanguage() {
  return (
    <Flex justifyContent="flex-end" p="3" pr="20" fontSize="12" bg="gray.100">
      <HStack gap="4">
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button color="teal" variant="link" size="sm" fontWeight="light">
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
                <path d="M8.742 14.554a7.027 7.027 0 1 0-4.97-2.056 7.01 7.01 0 0 0 4.97 2.056zM4.527 3.312a5.961 5.961 0 1 1 0 8.43 5.943 5.943 0 0 1 0-8.43z"></path>
                <path d="M15.49 14.275a9.542 9.542 0 0 0 0-13.495l-.756.756A8.473 8.473 0 0 1 2.75 13.519l-.756.756a9.51 9.51 0 0 0 6.73 2.79v1.366H4.433V19.5h9.653v-1.07H9.794v-1.428a9.492 9.492 0 0 0 5.696-2.727z"></path>
              </Box>
              English ($)
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <VStack align="start">
                <Text>Currency</Text>

                <Link color="teal">USD($)</Link>

                <Text>Language</Text>
                <HStack>
                  <Link color="teal">English</Link>
                  <Link>French</Link>
                </HStack>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Button color="teal" variant="link" size="sm" fontWeight="light">
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
            mr="1"
          >
            <path d="M10 11.32a5.588 5.588 0 1 1 5.588-5.587A5.594 5.594 0 0 1 10 11.321zm0-10.024a4.437 4.437 0 1 0 4.437 4.437A4.442 4.442 0 0 0 10 1.296z"></path>
            <path d="M19.5 19.855H.5v-.575a11.422 11.422 0 0 1 4.132-8.988l.712.906a10.176 10.176 0 0 0-3.678 7.506h16.668a10.178 10.178 0 0 0-3.677-7.506l.711-.906A11.423 11.423 0 0 1 19.5 19.28z"></path>
          </Box>
          Sing in / Sing up
        </Button>
      </HStack>
    </Flex>
  );
}
