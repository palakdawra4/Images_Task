import React from "react";
import PieChart from "./components/Piechart"; // Make sure the filename matches
import PollResults from "./components/PollResult";

// Define the shape of the poll data
interface PollData {
  labels: string[];
  values: number[];
  colors: string[];
}

const App: React.FC = () => {
  const pollData: PollData = {
    labels: ["Yes - 90% (1,024)", "No - 10% (103)"],
    values: [1024, 103],
    colors: ["#9166cc", "#e4aa1f"],
  };

  return (
    <div style={{ width: "30%", margin: "auto", textAlign: "left" }}>
      <PieChart data={pollData} />
      <PollResults />
    </div>
  );
};

export default App;
