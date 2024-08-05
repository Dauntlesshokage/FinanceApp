import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
interface Props {
  id: string;
  searchResults: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}
const Card: React.FC<Props> = ({
  id,
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <p>{searchResults.name}</p>
      <div className="details">
        <h2>{searchResults.exchangeShortName}</h2>
        <p>${searchResults.currency}</p>
      </div>
      <p>{searchResults.stockExchange}</p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResults.symbol}
      />
    </div>
  );
};
export default Card;
