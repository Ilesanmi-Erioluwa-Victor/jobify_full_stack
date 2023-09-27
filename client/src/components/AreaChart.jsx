import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChat = ({ data }) => {
  return (
    <ResponsiveContainer
      width={'100%'}
      height={300}
    >
      <AreaChart
        data={data}
        margin={{ top: 50 }}
      >
        <CartesianGrid strokeDasharray={'3 3'} />
        <XAxis dataKey={'date'} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChat;
