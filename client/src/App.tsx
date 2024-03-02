import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./pages/Blog";
import BlogView from "./components/BlogView/BlogView";
import About from "./pages/About";


interface IRoute {
  path: string,
  element: React.ReactElement,
};

const routes: IRoute[] = [
  {
    path: "/" ,
    element: <About />
  },
  {
    path: "/about" ,
    element: <About />
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







