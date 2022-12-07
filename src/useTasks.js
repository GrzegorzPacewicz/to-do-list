import { useEffect, useState } from "react";

const getLocalStorageData = (propertName) =>
  JSON.parse(localStorage.getItem(propertName));

export const useTasks = () => {
  const [hideDone, setHideDone] = useState(getLocalStorageData("hideDone"));

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  });

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  return {
    tasks,
    hideDone,
    addNewTask,
    removeTask,
    setAllDone,
    toggleTaskDone,
    toggleHideDone,
  };
};
