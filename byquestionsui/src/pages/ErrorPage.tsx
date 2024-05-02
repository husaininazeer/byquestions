import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const ErrorPage = (): ReactElement => {
  return (
    <>
      <Layout>
        <div
          className="errorMessage"
          style={{ textAlign: "center", fontSize: "x-large" }}
        >
          Oops😅, you took a wrong turn
          <Link to="/">Go back home🏠</Link>
        </div>
      </Layout>
    </>
  );
};

export default ErrorPage;
