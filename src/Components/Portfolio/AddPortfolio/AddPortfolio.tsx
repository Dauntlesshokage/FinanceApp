import { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}
export default function AddPortfolio({
  onPortfolioCreate,
  symbol,
}: Props): JSX.Element {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input type="text" readOnly={true} hidden={true} value={symbol} />
      <button type="submit">Add</button>
    </form>
  );
}
