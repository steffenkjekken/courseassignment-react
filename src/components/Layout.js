import Header from "./UI/Header";
import Footer from "./UI/Footer";

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>
    <div className="pt-1" style={{
        minHeight:"calc(100vh - 105px)",
        maxWidth:"930px",
        margin: "auto"
    }}>{children}</div>
    </main>
    <Footer/>
    </>
  )
}

export default Layout;
