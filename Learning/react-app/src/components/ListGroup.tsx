// import { Fragment } from "react";

function ListGroup() {
  const item = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
