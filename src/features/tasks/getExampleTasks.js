export const getExampleTasks = async () => {
  const response = await fetch("/todolists-react/exampleTasks.json");

  if ((!response.ok)) {
    new Error(response.text);
  }

  return await response.json();
};