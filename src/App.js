import React from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import BoardMessage from "./components/BoardMessage";
import ManagementBoard from "./components/ManagementBoard";
import ManagementPost from "./components/ManagementPost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="leftSide">
          <Posts />
        </div>
        <div className="rightSide">
          <BoardMessage />
          <ManagementBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
