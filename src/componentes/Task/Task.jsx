/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Task.module.css";

import { Stack, Center, Flex, Box } from "@chakra-ui/react";

function Task({ addTask }) {
  const [tasks, setTasks] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    addTask(tasks);
    setTasks("");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmit}>
        <Flex fontSize="16" cursor="pointer" mt="5em">
          <Center>
            <Stack>
              <Box p="4">
                <input
                  className={styles.input}
                  placeholder="add task"
                  value={tasks}
                  onChange={(e) => setTasks(e.target.value)}
                  type="text"
                />{" "}
                <button className={styles.button}>add</button>
              </Box>
            </Stack>
          </Center>
        </Flex>
      </form>
    </div>
  );
}

export default Task;
