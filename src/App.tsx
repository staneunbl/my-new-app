import React from "react";
import ListGroup from "./components/ListGroup.tsx";

function App() {
  let items = ["Philippines", "Taiwan", "Singapore", "Hongkong"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
