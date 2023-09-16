import Wrapper from 'assets/wrappers/SmallSidebar';
import { useDashboardContext } from 'pages/DashboardLayout';

const SmallSidebar = () => {
  const data = useDashboardContext();

  return <Wrapper>
    <div className="sidebar-container show-sidebar">
      <div className="content">
        <button type="button" className="close-btn">

        </button>
   </div>
    </div>
  </Wrapper>;
};

export default SmallSidebar;
