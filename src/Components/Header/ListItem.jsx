import React from "react";

const ListItem = ({ index, setActive, active, items }) => {
  const handleClick = () => {
    setActive(index);
  };
  return (
    <li className="nav-item mx-0 mx-lg-1" key={index} onClick={handleClick}>
      <a
        className={
          active === index
            ? "nav-link py-3 px-0 px-lg-3 rounded active"
            : "nav-link py-3 px-0 px-lg-3 rounded"
        }
        href={items.href}
      >
        {items.name}
      </a>
    </li>
  );
};

export default ListItem;
