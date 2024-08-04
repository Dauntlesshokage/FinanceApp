import Card from "../Card/Card";
interface Props {}
export default function CardList(props: Props): JSX.Element {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={100} />
      <Card companyName="Microsoft" ticker="MSFT" price={120} />
      <Card companyName="Tesla" ticker="TSLA" price={200} />
    </div>
  );
}
