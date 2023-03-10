import Head from "next/head";
import { Inter } from "@next/font/google";
import Title from "../components/Title";
import NewTask from "../components/NewTask";
import Action from "../components/Action";
import Task from "@/components/Task";
import DangerActions from "@/components/DangerActions";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [allTasks, setallTasks] = useState<string[]>([]);

  function handleAddTask(taskName: string) {
    setallTasks((prevState) => [...prevState, taskName]);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <Title text="todoInput" />
        <NewTask onAdd={handleAddTask} />

        <Title text="todoList" />
        <Action />

        {allTasks.map((task) => (
          <Task message={task} />
        ))}

        <DangerActions />
      </main>
    </>
  );
}
