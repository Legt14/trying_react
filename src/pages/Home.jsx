import { Outlet } from "react-router-dom";
import { NavaBar } from "../components/navBar/NavaBar";

export const Home = () => {
  return (
    <>
      <section className="bg-gray-900 h-screen w-screen">
        <NavaBar />
        <Outlet />
      </section>
    </>
  );
};
