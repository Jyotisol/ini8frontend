import "./App.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./getuser/User";
import Add from "./adduser/Add";
import Edit from "./updateuser/Edit";


const App = () => {
  const route = createBrowserRouter([
     {
      path:"/",
      element: <User/>,
     },
     {
      path:"/add",
      element:<Add/>,
     },
     {
      path:"/edit/:id",
      element:<Edit/>,
     }
  ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App
