import { Box, Flex, Spacer } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex bg="red.400" color="white" fontSize="20" cursor="pointer">
      <Box p="4" ml="10em">
        <h2>Mi Lista De Tareas</h2>
      </Box>
      <Spacer />
      <Box p="4" mr="10em">
        <h2>David Marbello</h2>
      </Box>
    </Flex>
  );
}

export default Navbar;
