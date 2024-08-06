import { CompanyKeyMetrics } from "../../../company";
import RatioList from "../../RatioList/RatioList";
import Table from "../../Table/Table";
import { testIncomeStatementData } from "../../Table/testData";

interface Props {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];
export default function DesignPage(props: Props): JSX.Element {
  return (
    <>
      <h1>Finshark Design page</h1>
      <h2>This is design page of the web app</h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  );
}
