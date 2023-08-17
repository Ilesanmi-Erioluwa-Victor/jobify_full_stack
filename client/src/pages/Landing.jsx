import Wrapper from 'assets/wrappers/LandingPage';
import main from 'assets/images/main.svg';
import logo from 'assets/images/logo.svg';

const Landing = () => {
  return (
    <Wrapper>
      
      <nav>
        <img
          src={logo}
          alt='Logo'
          className='logo'
        />
      </nav>

      <div className="container page"></div>

    </Wrapper>
  );
};

export default Landing;
