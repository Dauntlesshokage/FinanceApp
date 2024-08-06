import { useParams } from "react-router";
import { CompanyProfile } from "../../../company";
import { useEffect, useState } from "react";
import { getCompanyProfile } from "../../../api";
import Sidebar from "../../Sidebar/Sidebar";
import CompanyDashboard from "../../CompanyDashboard/CompanyDashboard";

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
          <CompanyDashboard />
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </>
  );
}
