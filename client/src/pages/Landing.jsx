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

      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            facilis culpa laborum repellat placeat blanditiis, illo quo,
            temporibus sapiente sunt debitis molestias autem iusto
            necessitatibus at eveniet aspernatur perspiciatis quos.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
