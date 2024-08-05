import { SyntheticEvent } from "react";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}
export default function DeletePortfolio({
  portfolioValue,
  onPortfolioDelete,
}: Props): JSX.Element {
  return (
    <>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button>X</button>
      </form>
    </>
  );
}
