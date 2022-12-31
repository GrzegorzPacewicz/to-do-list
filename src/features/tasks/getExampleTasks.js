export const getExampleTasks = async () => {
  const response = await fetch("/todolists-react/exampleTasks.json");

  if (!response.ok) {
    throw new Error(response.text);
  }

  return await response.json();
};
