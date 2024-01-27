import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


interface IRoute {
  path: string,
  element: React.ReactElement,
};

const routes: IRoute[] = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <h1>About</h1>
  },
  {
    path: "/blog",
    element: <h1>blog</h1>
  },
  {
    path: "/contact",
    element: <h1>contact</h1>
  },
];

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {
                    routes.map((route) => (<Route {...route} />))
                }
            </Routes>
        </BrowserRouter>
    )
}







