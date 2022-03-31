import React from "react";
import DayListItem from "./DayListItem";
export default function DayList(props) {

  const { days, value, onChange } = props;

  const dotw = days.map(perDay => {
    return (
      <DayListItem
        key={perDay.id}
        name={perDay.name}
        spots={perDay.spots}
        selected={perDay.name === value}
        onChange={onChange}
      />)
  });

  return (
    <ul> {dotw} </ul>
    );
  };
