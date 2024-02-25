import React, { useContext } from "react";
import Header from "../components/Header";
import Foother from "../components/Foother";
import AuthContext from "../../context/AuthContext";

function RootLayout({ children }) {
  const {} = useContext(AuthContext);
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Foother />
    </div>
  );
}

export default RootLayout;
