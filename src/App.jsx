import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rootpage from "./router/Rootpage";
import Homepage from "./router/Homepage";

import Aboutpage from "./router/Aboutpage";
import Projectspage from "./router/Projectspage";
import Contactpage from "./router/Contactpage";

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
        { path: "/contact", element: <Contactpage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
