import "../styles/globals.css";
import "../styles/login.scss";
import "../styles/register.scss";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../layout/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
