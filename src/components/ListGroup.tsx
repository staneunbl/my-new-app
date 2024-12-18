import React from "react";
import { useState } from "react";
// import { Fragment } from "react";
// import { MouseEvent } from "react"; // this is now available globally.

interface ListGroupProps {
  // props: define shape or interface of an object
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // Hook - this component can have data or state that will change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // let items = ["Philippines", "Taiwan", "Singapore", "Hongkong"];
  //items = []; // overriding

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Items available.</p> : null} */}
      {items.length === 0 && <p>No Items available.</p>}
      <ul className="list-group">
        <li className="list-group-item">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index); // setSelectedIndex updates the state variable selectedIndex to the value of the clicked item's index.
              }}
            >
              {item}
            </li>
          ))}
        </li>
      </ul>
    </>
  );
}

export default ListGroup;
