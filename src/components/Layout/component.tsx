import { Outlet } from "react-router-dom";
import { Header } from "..";

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};
