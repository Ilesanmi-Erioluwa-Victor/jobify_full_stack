import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
    },
  ];
  return <div>StatsContainer</div>;
};

export default StatsContainer;
