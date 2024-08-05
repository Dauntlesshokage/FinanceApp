import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
interface Props {
  id: string;
  searchResults: CompanySearch;
}
const Card: React.FC<Props> = ({ id, searchResults }: Props): JSX.Element => {
  return (
    <div className="card">
      <p>{searchResults.name}</p>
      <div className="details">
        <h2>{searchResults.exchangeShortName}</h2>
        <p>${searchResults.currency}</p>
      </div>
      <p>{searchResults.stockExchange}</p>
    </div>
  );
};
export default Card;
