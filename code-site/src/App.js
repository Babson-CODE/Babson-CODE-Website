import React from "react";
import NavBar from "./Components/Navigation/NavBar1";
import Footer from "./Components/Navigation/Footer2";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <NavBar />
      {/* <div style={{ marginTop: "90px" }}> */}
      <Routes />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
