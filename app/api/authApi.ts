import Calls from './call';
import { toast } from 'react-toastify';

const BaseUrl = 'https://pms-backend-rvoy.onrender.com/';

const $AuthHttp = Calls(BaseUrl);

export async function resetPassword(props: { email: string }) {
  try {
    const resetResponse = await $AuthHttp.post(
      `/account/${props.email}/send-reset-password-link`,
      props
    );

    if (resetResponse.status === 200) {
      toast.success('Password Reset link successfully sent');
    }
    return resetResponse;
  } catch (error) {
    toast.error('An error occured');
    return error;
  }
}

// james@#$2D
