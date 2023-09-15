import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh page not fo</h3>
        <Link to={'/'}>Back to Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
