import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Components/Pages/HomePage/HomePage";
import SearchPage from "../Components/Pages/SearchPage/SearchPage";
import CompanyPage from "../Components/Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile />,
          },
          {
            path: "income-statement",
            element: <IncomeStatement />,
          },
        ],
      },
    ],
  },
]);
