import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <Center>
      <Box>
        <Card align="center">
          <CardHeader>
            <Heading size="md"> About Me</Heading>
          </CardHeader>
          <CardBody>
            <Text color="grey" fontSize="18px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              veniam cupiditate itaque debitis in ea expedita perferendis omnis.
              Quae sunt voluptatum fugiat nisi ipsa praesentium magni modi nam
              expedita animi.
            </Text>
          </CardBody>
          <CardFooter>
            <Link to={"/home"}>
              <Button colorScheme="blue">View here</Button>
            </Link>
          </CardFooter>
        </Card>
      </Box>
    </Center>
  );
}

export default About;
