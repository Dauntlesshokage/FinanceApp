import { CompanySearch } from "../../company";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
interface Props {
  searchResults: CompanySearch[];
}
export default function CardList({ searchResults }: Props): JSX.Element {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card id={result.symbol} key={uuidv4()} searchResults={result} />
        ))
      ) : (
        <p>No such companies found</p>
      )}{" "}
    </>
  );
}
