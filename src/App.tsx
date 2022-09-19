import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import "./styles/index.scss";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>CHANGE THEME</button>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />}></Route>
          <Route path={"/"} element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};

export default App;
