import Wrapper from 'assets/wrappers/DashboardFormPage';
import { FormRow } from 'components';
import { Form, useNavigation, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from 'utils/CustomFetch';

const Profile = () => {
  const { user } = useOutletContext();

  const { name, lastName, email, location } = user;

  const naviagtion = useNavigation();

  const isSubmitting = naviagtion.state === 'submitting';
  return <Wrapper>Profile</Wrapper>;
};

export default Profile;
