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
    <Container size={1050} >
      <Stack align="center" mt="sm" pb="60px">
        <Title order={2} fz={40} mt="xl">Todo List</Title>
        <Text size="sm" c="dimmed" fz={22} m="xs">
          All : {tasks.length} | Done : {tasks.filter((t) => t.isDone).length}
        </Text >
        {/* เพิ่ม Task */}
        <Button  size="lg" radius="md" color="cyan" onClick={handleAdd}>Add Task</Button>
        {/* แสดง Task Cards */}
        <Stack align="center"  w="100%">
            {tasks.map((task) => (
              <Card
                withBorder
                shadow="sm"
                radius="lg"
                key={task.id}
                mih={150}
                py={25}
                m="sm"
                w="100%"  
              >
        <Group justify="space-between" align="flex-start" h="100%">
              <Stack justify="space-between" h="100%">
                <Text
                  fw={600}
                  td={task.isDone ? "line-through" : "none"}
                  fz={27}
                  px={10}
                >
                  {task.title}
                </Text>

                <Text size="xl" c="dimmed" px={10}>
                  {task.description}
                </Text>
                {task.dueDate && (
                  <Text size="xl" c="gray" px={10}>
                    Due: {task.dueDate.toLocaleDateString()}
                  </Text>
                )}
                {task.doneTime && (
                  <Text fz={18} c="yellow" px={10}>
                    Done at: {task.doneTime.toLocaleString()}
                  </Text>
                )}
          </Stack>

          <Group>
            <Checkbox
              checked={task.isDone}
              onChange={() => toggleDoneTask(task.id)}
              color="blue"
              size="xl"
              label={<Text fz="h3" >Done</Text>}
            />

            <ActionIcon variant="light" size="xl" color="red" aria-label="Settings" onClick={() => deleteTask(task.id)} > 
              <IconTrash style={{ width: '70%', height: '70%' }} stroke={2} /> 
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
