import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogView from "./components/BlogView/BlogView";


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
    element: <Blog /> 
  },
  {
    path: "/contact",
    element: <h1>contact</h1>
  },
  {
    path: "/work",
    element: <h1>Work</h1>
  },

  // minor routes
  {
    path: "/blog/view",
    element: <BlogView />
  }
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







