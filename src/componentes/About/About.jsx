import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <Center mt={"10em"}>
      <Box maxW={"600px"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="Task.jpg"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md" color={"blue.500"}>
                Sobre Nosotros
              </Heading>

              <Text py="2" color={"grey"}>
                Esta aplicacion es una herramienta para ir apuntando cosas que
                quieres, debes o podrías hacer. Nos permiten recordar asuntos en
                el momento en el que nosotros lo decidimos
              </Text>
            </CardBody>

            <CardFooter>
              <Link to={"/home"}>
                <Button variant="solid" colorScheme="blue">
                  Buy Latte
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </Center>
  );
}

export default About;
