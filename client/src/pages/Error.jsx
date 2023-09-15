import { Link , useRouteError} from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage"
import img from "../assets/images/not-found.svg"

const Error = () => {
  console.log(error)
  return <div>
    <h1>Error</h1>
    <Link to={"/"}>Back to Home</Link>
  </div>;
}

export default Error
