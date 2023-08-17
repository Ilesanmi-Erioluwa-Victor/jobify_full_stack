import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{
  path: "/",
  element: <h1>Home Page</h1>
}]);

const App = () => {
  return <h1>Jobify App</h1>;
};

export default App;
