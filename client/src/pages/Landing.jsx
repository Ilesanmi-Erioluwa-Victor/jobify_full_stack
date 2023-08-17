import Wrapper from 'assets/wrappers/LandingPage';
import main from 'assets/images/man.svg';
import logo from 'assets/images/logo.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Logo" />
      </nav>
      <h1>Landing Page </h1>
    </Wrapper>
  );
};

export default Landing;
