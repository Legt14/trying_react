import { Outlet } from "react-router-dom";
import { NavaBar } from "../components/navBar/NavaBar";

export const Home = () => {
  return (
    <>
      <section className="bg-gray-900 text-gray-300 min-h-screen min-w-screen p-4">
        <NavaBar />
        <Outlet />
      </section>
    </>
  );
};
