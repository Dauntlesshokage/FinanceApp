import React from "react";
import logo from "./logo.svg";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";
import "./App.css";
import Search from "./Components/Search/Search";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  function onPortfolioCreate(e: any) {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) {
      return;
    }
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);

    console.log(e);
  }
  function onPortfolioDelete(e: any) {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  }
  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(e);
  }
  async function onSearchSubmit(e: SyntheticEvent) {
    e.preventDefault();
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
      <Navbar />

      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      {serverError && <h1>{serverError}</h1>}

      <CardList
        searchResults={searchResults}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}

export default App;
