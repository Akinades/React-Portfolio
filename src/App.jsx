import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rootpage from "./router/Rootpage";
import Homepage from "./router/Homepage";

import Aboutpage from "./router/Aboutpage";
import Projectspage from "./router/Projectspage";
import Contact from "./components/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        { path: "/about", element: <Aboutpage /> },
        { path: "/projects", element: <Projectspage /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
