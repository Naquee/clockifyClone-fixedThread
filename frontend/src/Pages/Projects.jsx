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
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, UpDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
const Projects = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Heading fontWeight={"400"} size={["md", "lg"]} color={"gray.600"}>
          Projects
        </Heading>
        <Button color="#fff" display={["none","none","block"]} _hover={{ bg: "blue.400" }} bgColor={"#03A9F4"}>
          CREATE NEW PROJECT
        </Button>
        <Button display={["block","block","none"]} color="#fff" _hover={{ bg: "blue.400" }} bgColor={"#03A9F4"}>
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
          <Flex gap="1" display={["none", "none", "block"]}
         
          >
            {" "}
            <Text color={"grey"}>FILTER</Text>
          </Flex>
          <Flex 
           
           justifyContent="center"
          alignItems={"center"} gap="1">
            {" "}
            <Text>Active</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
          <Flex 
          justifyContent="center"
          alignItems={"center"} gap="1">
            {" "}
            <Text>Client</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
          <Flex 
          justifyContent="center"
          alignItems={"center"} gap="1">
            {" "}
            <Text>Access</Text> <ChevronDownIcon fontSize={"lg"} />
          </Flex>
          <Flex 
          justifyContent="center"
          alignItems={"center"} gap="1">
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
        <HStack bg="#fff" justifyContent={"space-between"} pr="14">
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
          <Box display={["block", "block", "none"]}>
            <ChevronDownIcon />
          </Box>
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
          <HStack
            key={index}
            bg="#fff"
            justifyContent={"space-between"}
            pr="14"
          >
            <Flex p="3" alignItems={"center"} gap={2}>
              <Checkbox />
              <Text>{el.name}</Text>
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
            <Box display={["block", "block", "none"]}>
              <ChevronDownIcon />
            </Box>
          </HStack>
        ))}
    </>
  );
};
