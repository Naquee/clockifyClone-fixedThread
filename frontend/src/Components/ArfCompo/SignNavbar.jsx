import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SignNavbar() {
  return (
    <>
      <Box
        // bg={useColorModeValue('gray.100', 'gray.900')}
        w="80%"
        m="auto"
        mt="1rem"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to={"/"}>
              <img src="https://app.clockify.me/assets/logo.svg" alt="" />
            </Link>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <Link to="/login">
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Box color="#03A9F4">Log in</Box>
                  </MenuButton>
                </Link>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
