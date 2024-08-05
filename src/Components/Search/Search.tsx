import React, { ChangeEvent, SyntheticEvent, useState } from "react";
interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
}
export default function Search({
  onSearchSubmit,
  handleSearchChange,
  search,
}: Props): JSX.Element {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  );
}
