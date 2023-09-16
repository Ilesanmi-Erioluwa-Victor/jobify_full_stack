import Wrapper from 'assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from 'pages/DashboardLayout';


const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return <Wrapper><h3>BigSidebar</h3></Wrapper>;
};
export default BigSidebar;
