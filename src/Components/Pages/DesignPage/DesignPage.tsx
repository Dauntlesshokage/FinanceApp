import RatioList from "../../RatioList/RatioList";
import Table from "../../Table/Table";

interface Props {}
export default function DesignPage(props: Props): JSX.Element {
  return (
    <>
      <h1>Finshark Design page</h1>
      <h2>This is design page of the web app</h2>
      <RatioList />
      <Table />
    </>
  );
}
