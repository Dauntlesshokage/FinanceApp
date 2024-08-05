import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}
export default function CardPortfolio({
  portfolioValue,
  onPortfolioDelete,
}: Props): JSX.Element {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <DeletePortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValue={portfolioValue}
      />
    </>
  );
}
