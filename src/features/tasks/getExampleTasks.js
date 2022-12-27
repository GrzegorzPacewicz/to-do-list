export const getExampleTasks = async () => {
  const response = await fetch("/todolists-react/exampleTasks.json");

  if ((!response.ok)) {
    new Error(response.text);
  }

  return await response.json();
};

// import { useState, useEffect } from "react";
// import axios from "axios";

// export const useExampleTasks = () => {
//   const [exampleTasks, setExampleTasks] = useState({
//     status: "loading",
//   });

//   useEffect(() => {
//     const getTasks = async () => {
//       try {
//         const response = await axios.get("/todolists-react/exampleTasks.json");
//         setExampleTasks({
//           status: "success",
//         });
//       } catch (error) {
//         setExampleTasks({
//           status: "error",
//         });
//       }
//     };
//     setTimeout(getTasks, 1000);
//   }, []);

//   return useExampleTasks;
// };
