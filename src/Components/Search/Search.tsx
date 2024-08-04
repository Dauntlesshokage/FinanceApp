import React, { ChangeEvent, SyntheticEvent, useState } from "react";
type Props = {};
export default function Search(props: Props): JSX.Element {
  const [search, setSearch] = useState<string>("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(e);
  }
  function onClick(e: SyntheticEvent) {
    console.log(e);
  }
  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)}>Click</button>
    </div>
  );
}
