import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex bg="tomato" color="white" fontSize="20" cursor="pointer">
      <Box p="4" ml="10em" _hover={{ color: "grey" }} transition="0.3s">
        <Link to={"/about"}>
          <h2>About Me</h2>
        </Link>
      </Box>
      <Spacer />
      <Box p="4" mr="10em">
        <Link to={"/"}>
          <h2>David Marbello</h2>
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
