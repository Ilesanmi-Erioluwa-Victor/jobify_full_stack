import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from 'assets/wrappers/StatsContainer';
import StatItem from './StatItem';

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bcg: '#fef3c7',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return (
          <StatItem
            key={item.title}
            {...item}
          />
        );
      })}
    </Wrapper>
  );
};

export default StatsContainer;
