import { useState } from "react";
import { useAuth } from "../components/login/authProvider";

export const Login = () => {
  const [user, setUser] = useState({
    loged: true,
    username: "",
    password: "",
  });
  const { authProcess } = useAuth();

  const handlerForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authProcess(user);
  };

  return (
    <>
      <section className="h-full w-full font-actor">
        <section className="flex items-center">
          <section className="bg-indigo-50 h-screen w-[30rem] flex flex-col items-center justify-center gap-10">
            <section className="flex flex-col items-center gap-28">
              <figure className="w-48 overflow-hidden">
                <img src={penta_purple} alt="penta" />
              </figure>
              <figure className="w-14 h-14 bg-[#220d47] rounded-2xl">
                <img
                  src={user}
                  alt=""
                  className="w-full h-full object-center"
                />
              </figure>
            </section>
            <form className="flex flex-col items-end gap-6">
              <section className="flex flex-col gap-6">
                <Input
                  id="username"
                  label="Username"
                  func={formHandler}
                  type="text"
                />
                <Input
                  id="password"
                  label="Password"
                  func={formHandler}
                  type="password"
                />
              </section>
              <Link to="/" unstable_viewTransition>
                <button
                  type="button"
                  className="shadow-md hover:shadow-[#220d47]/50 bg-[#220d47] h-7 w-24 text-sm text-indigo-50 rounded-xl border border-transparent hover:scale-110 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-800 transition-all duration-200 delay-75 ease-linear"
                >
                  Acceder
                </button>
              </Link>
            </form>
          </section>
          <section className="bg-[#220d47] w-screen h-screen flex justify-center items-center">
            <figure className="w-96">
              <img src={penta} alt="" />
            </figure>
            {/*  <div className="w-36 h-36 bg-purple-300 rounded-2xl"></div> */}
          </section>
        </section>
      </section>

      {
        // <form action="#" className="flex flex-col w-64 ">
        //   <label htmlFor="userName">Username</label>
        //   <input
        //     name="username"
        //     className="text-black placeholder:text-black/50"
        //     type="text"
        //     id="userName"
        //     onChange={(event) => handlerForm(event)}
        //   />
        //   <label htmlFor="password">password</label>
        //   <input
        //     name="password"
        //     className="text-black placeholder:text-black/50"
        //     type="password"
        //     id="password"
        //     onChange={(event) => handlerForm(event)}
        //   />
        //   <button onClick={(event) => handleLogin(event)}>Login</button>
        // </form>
      }
    </>
  );
};
