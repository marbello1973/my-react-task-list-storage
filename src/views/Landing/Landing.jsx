import { Link } from "react-router-dom";
import {
  Center,
  Text,
  Card,
  CardBody,
  CardHeader,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
//configurado con chakra
function Landing() {
  return (
    <Center mt={10}>
      <Card align="center">
        <CardHeader>
          <Heading size="md" color="green.500">
            App Task
          </Heading>
        </CardHeader>
        <CardBody>
          <Text
            bgGradient="linear(to-r, teal.500, green.500)"
            bgClip="text"
            fontSize="6xl"
            border="1px"
            borderRadius="10px"
            borderColor="gray.200"
          >
            <h1>Welcome to my to-do list app</h1>
          </Text>
        </CardBody>
        <CardFooter>
          <Link to={"/home"}>
            <Button colorScheme="green">View here</Button>
          </Link>
        </CardFooter>
      </Card>
    </Center>
  );
}

export default Landing;
