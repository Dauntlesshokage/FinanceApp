import React from "react";
import logo from "./logo.svg";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";
import "./App.css";
import Search from "./Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(e);
  }
  async function onClick(e: SyntheticEvent) {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResults(result.data);
    }
    console.log(searchResults);
  }
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResults} />
    </div>
  );
}

export default App;
