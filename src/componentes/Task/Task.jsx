/* eslint-disable react/prop-types */
import { useState } from "react";
import { Stack, Center, Input, Flex, Box, Spacer } from "@chakra-ui/react";

function Task({ addTask }) {
  const [tasks, setTasks] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    addTask(tasks);
    setTasks("");
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <Flex fontSize="20" cursor="pointer">
          <Center>
            <Stack>
              <Box p="4" ml="10em">
                <Input
                  w="30em"
                  mt="5em"
                  border={2}
                  variant="outline"
                  placeholder="add task"
                  size="sm"
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  type="text"
                />
              </Box>
              <Spacer />
              <Box p="4" mr="10em">
                <button>Add</button>
              </Box>
            </Stack>
          </Center>
        </Flex>
      </form>
    </div>
  );
}

export default Task;
