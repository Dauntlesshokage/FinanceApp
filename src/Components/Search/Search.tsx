import React, { ChangeEvent, SyntheticEvent, useState } from "react";
interface Props {
  onClick: (e: SyntheticEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}
export default function Search({
  onClick,
  handleChange,
  search,
}: Props): JSX.Element {
  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)}>Click</button>
    </div>
  );
}
