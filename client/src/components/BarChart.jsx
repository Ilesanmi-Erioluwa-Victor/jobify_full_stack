import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const BarChat = ({data}) => {
  return <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data} margin={{top: 50}}>
      
 </BarChart>
  </ResponsiveContainer>;
};

export default BarChat;
