import React from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import { useState } from "react";
import data from "../helper/starterData";
const Home = () => {
  const [task, setTask] = useState(data);
  return (
    <div>
      <Header task={tasks} setTask={setTask} />
      <ShowTasks />
    </div>
  );
};

export default Home;
