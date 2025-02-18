import { useParams } from "react-router";
import { CompanyProfile } from "../../../company";
import { useEffect, useState } from "react";
import { getCompanyProfile } from "../../../api";
import Sidebar from "../../Sidebar/Sidebar";
import CompanyDashboard from "../../CompanyDashboard/CompanyDashboard";
import Tile from "../../Tile/Tile";
import TenKFinder from "../../TenKFinder/TenKFinder";
import Spinner from "../../Spinner/Spinner";

interface Props {}
export default function CompanyPage(props: Props): JSX.Element {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="DCF" subTitle={company.dcf.toString()} />
            <Tile title="Sector" subTitle={company.sector} />

            <TenKFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
