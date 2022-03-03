import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
import BoardMessage from "./components/BoardMessage/BoardMessage";
import ManagementBoard from "./components/ManagementBoard/ManagementBoard";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="App">
      {modalVisible ? <Modal closeFunction={toggleModal} /> : <></>}
      <Navbar />
      <div className="content">
        <div className="leftSide">
          <Posts toggleFunction={toggleModal} />
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
