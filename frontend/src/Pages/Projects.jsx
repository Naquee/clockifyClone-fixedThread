import {
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  Flex,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, UpDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { AiOutlineStar, AiOutlineMore } from "react-icons/ai";
const Projects = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Heading fontWeight={"400"} size={["md", "lg"]} color={"gray.600"}>
          Projects
        </Heading>
        <Button
          color="#fff"
          display={["none", "none", "block"]}
          _hover={{ bg: "blue.400" }}
          bgColor={"#03A9F4"}
        >
          CREATE NEW PROJECT
        </Button>
        <Button
          display={["block", "block", "none"]}
          color="#fff"
          _hover={{ bg: "blue.400" }}
          bgColor={"#03A9F4"}
        >
          CREATE NEW
        </Button>
      </HStack>
      <Grid
        gap={"8"}
        mt="9"
        bg="#fff"
        p="3"
        border={"1px solid #ccced0"}
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
      >
        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={14}
        >
          <Flex
            gap="1"
            display={["none", "none", "flex"]}
            alignItems={"center"}
          >
            {" "}
            <Text color={"grey"}>FILTER</Text>
          </Flex>
          <Flex justifyContent="center" alignItems={"center"} gap="1">
            {" "}
            <Text>Active</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
          <Flex justifyContent="center" alignItems={"center"} gap="1">
            {" "}
            <Text>Client</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
          <Flex justifyContent="center" alignItems={"center"} gap="1">
            {" "}
            <Text>Access</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
          <Flex justifyContent="center" alignItems={"center"} gap="1">
            {" "}
            <Text>Billing</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
        </Grid>
        <HStack>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" outLine="#ccced0" placeholder="Project name" />
          </InputGroup>
          <Button
            border="1px solid #03A9F4"
            color={"#03A9F4"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            pl={7}
            pr={9}
            display={["none", "block", "block"]}
            textAlign="center"
            alignItems="center"
          >
            APPLY FILTER
          </Button>
          <Button
            border="1px solid #03A9F4"
            color={"#03A9F4"}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
            pl={9}
            pr={9}
            display={["block", "none", "none"]}
            textAlign="center"
            alignItems="center"
          >
            APPLY
          </Button>
        </HStack>
      </Grid>
      <Grid mt="8">
        <Flex bg="#e4eaee" p="3">
          <Text>Projects</Text>
        </Flex>
        <HStack color="grey" bg="#fff" justifyContent={"space-between"} pr="14">
          <Flex p="3" alignItems={"center"} gap={2}>
            <Checkbox />
            <Text>Name</Text>
            <UpDownIcon fontSize={"12"} />
          </Flex>

          <Box display={["none", "none", "block"]}>
            <Flex p="3" alignItems={"center"} gap={2}>
              <Text>CLIENT</Text>
              <UpDownIcon fontSize={"12"} />
            </Flex>
          </Box>
          <Box display={["none", "none", "block"]}>
            <Flex p="3" alignItems={"center"} gap={2}>
              <Text>AMOUNT</Text>
              <UpDownIcon fontSize={"12"} />
            </Flex>
          </Box>
          <Box display={["none", "none", "block"]}>
            {" "}
            <Flex p="3" alignItems={"center"} gap={2}>
              <Text>PROGRESS</Text>
              <UpDownIcon fontSize={"12"} />
            </Flex>
          </Box>

          <Box display={["none", "none", "block"]}>
            <Flex p="3" alignItems={"center"} gap={2}>
              <Text>ACCESS</Text>
              <UpDownIcon fontSize={"12"} />
            </Flex>
          </Box>

          <Box display={["none", "none", "none"]}>
            <ChevronDownIcon />
          </Box>
          <Flex p="3" alignItems={"center"} gap={2}></Flex>
          <Flex p="3" alignItems={"center"} gap={2}></Flex>
        </HStack>
        <DataFetch />
      </Grid>
    </Box>
  );
};
export default Projects;
const DataFetch = () => {
  const [DataFetch, setDataFetch] = useState();
  const FakeData = [
    { name: "clockify" },
    { name: "drive" },
    { name: "chakra" },
  ];
  useEffect(() => {
    setDataFetch(FakeData);
  }, []);

  return (
    <>
      {DataFetch?.length &&
        DataFetch.map((el, index) => (
          <HStack bg="#fff" justifyContent={"space-between"} pr="14">
            <Flex
              display={["none", "none", "flex"]}
              p="3"
              alignItems={"center"}
              gap={2}
            >
              <Checkbox />
              <Text>Name</Text>
            </Flex>

            <Box display={["none", "none", "block"]}>
              <Flex p="3" alignItems={"center"} gap={2}>
                <Text>CLIENT</Text>
              </Flex>
            </Box>
            <Box display={["none", "none", "block"]}>
              <Flex p="3" alignItems={"center"} gap={2}>
                <Text>AMOUNT</Text>
              </Flex>
            </Box>
            <Box display={["none", "none", "block"]}>
              {" "}
              <Flex p="3" alignItems={"center"} gap={2}>
                <Text>PROGRESS</Text>
              </Flex>
            </Box>

            <Box display={["none", "none", "block"]}>
              <Flex p="3" alignItems={"center"} gap={2}>
                <Text>ACCESS </Text>
              </Flex>
            </Box>
            <Box display={["none", "none", "block"]}>
              <Flex p="3" alignItems={"center"} gap={8}>
                <AiOutlineStar />
                <AiOutlineMore />
              </Flex>
            </Box>
          </HStack>
        ))}
      {DataFetch?.length &&
        DataFetch.map((el, index) => (
          <>
            <Accordion
              key={index}
              allowMultiple
              display={["block", "block", "none"]}
            >
              <AccordionItem>
                <h2>
                  <AccordionButton gap={"2"}>
                    <Checkbox m="-1" />
                    <Box flex="1" textAlign="left">
                      Section 2 title
                    </Box>

                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        ))}
    </>
  );
};
