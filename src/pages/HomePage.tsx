import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Card,
  Group,
  Checkbox,
  ActionIcon,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { LoremIpsum } from "lorem-ipsum";
import { randomId } from "@mantine/hooks";
import { v4 as uuidv4 } from "uuid";
interface Task {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  dueDate: Date | null;
  doneTime: Date | null;
}



export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Mantine + TS",
      isDone: false,
      dueDate: new Date(),
      doneTime: null,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
      dueDate: new Date(),
      doneTime: null,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
      dueDate: new Date(),
      doneTime: null,
    },
  ]);
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const handleAdd = () => {
    const newTask: Task = {
      id: uuidv4(),
      title: randomId(),
      description: lorem.generateWords(10),
      isDone: false,
      dueDate: new Date(),
      doneTime: null,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Delete task
  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // Toggle done
  const toggleDoneTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isDone: !t.isDone, doneTime: !t.isDone ? new Date() : null} : t))
    );
  };

  

  return (
    <Container size="60.5%" >
      <Stack align="center" mt="lg" pb="25px">
        <Title order={2} fz="h2" >Todo List</Title>
        <Text size="sm" c="dimmed" >
          All : {tasks.length} | Done : {tasks.filter((t) => t.isDone).length}
        </Text >
        {/* เพิ่ม Task */}
        <Button  size="sm"  color="cyan" onClick={handleAdd}>Add Task</Button>
        {/* แสดง Task Cards */}
        <Stack align="center"  w="100%">
            {tasks.map((task) => (
              <Card
                withBorder
                shadow="sm"
                radius="md"
                key={task.id}
                mih={60}
                mb="xs"
                w="100%"  
              >
        <Group justify="space-between" align="flex-start" h="100%">
              <Stack justify="space-between" h="100%">
                <Text
                  fw={600}
                  td={task.isDone ? "line-through" : "none"}
                  size="lg"
                >
                  {task.title}
                </Text>

                <Text  c="dimmed" size="sm">
                  {task.description}
                </Text>
                {task.dueDate && (
                  <Text size="xs" c="gray" >
                    Due: {task.dueDate.toLocaleDateString()}
                  </Text>
                )}
                {task.doneTime && (
                  <Text size="xs" c="upper" >
                    Done at: {task.doneTime.toLocaleString()}
                  </Text>
                )}
          </Stack>

          <Group align="center">
            <Checkbox
              checked={task.isDone}
              onChange={() => toggleDoneTask(task.id)}
              color="cyan"
              
              label={<Text size="sm"  >Done</Text>}
            />

            <ActionIcon variant="light"  color="red" aria-label="Settings" onClick={() => deleteTask(task.id)} > 
              <IconTrash style={{ width: '69%', height: '69%' }} stroke={2} /> 
            </ActionIcon>
          </Group>
        </Group>
      </Card>
    ))}
  </Stack>
      </Stack>
    </Container>
  );
}
