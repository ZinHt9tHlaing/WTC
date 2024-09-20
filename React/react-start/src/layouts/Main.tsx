import { Outlet } from "react-router-dom";
import { MyNavbar } from "../components/MyNavbar";
import { useState } from "react";

const Main = () => {
  // const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   setUsername(null);
  //   setEmail(null);
  // };

  return (
    <nav className="p-5">
      <MyNavbar />
      {/* <Outlet  /> */}
    </nav>
  );
};

export default Main;
