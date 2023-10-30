import { useRouteError } from 'react-router';

const ErrorElement = () => {
  const error = useRouteError();
  return <h4>There eas an error...!</h4>;
};

export default ErrorElement;
