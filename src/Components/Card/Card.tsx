import React from "react";
import "./Card.css";
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}
const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <p>{companyName}</p>
      <div className="details">
        <h2>{ticker}</h2>
        <p>${price}</p>
      </div>
      <p>Some details mannn!</p>
    </div>
  );
};
export default Card;
