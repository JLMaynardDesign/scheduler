import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const { spots, selected, name, onChange } = props;

  const dayClass = classNames('day-list__item',
    {
      "day-list__item--selected": selected,
      "day-list__item--full": !spots
    }
  );
  const formatSpots = () => {
    if (spots > 1) {
      return `${spots} spots remaining`;
    } else if (spots === 1) {
      return `1 spot remaining`;
    } else {
      return `no spots remaining`;
    }
  };

  return (
    <li onClick={() => onChange(name)} className={dayClass} selected={selected} key={name}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
} 