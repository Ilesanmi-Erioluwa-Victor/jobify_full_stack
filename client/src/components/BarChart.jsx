import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const BarChat = ({ data }) => {
  return (
    <ResponsiveContainer
      width='100%'
      height={300}
    >
      <BarChart
        data={data}
        margin={{ top: 50 }}
      >
        <CartesianGrid strokeDasharray={'3 3'} />
        <XAxis dataKey={'date'} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar
          dataKey={'count'}
          fill='#2cb1c'
          barSize={75}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChat;
