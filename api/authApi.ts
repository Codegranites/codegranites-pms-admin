import Calls from './call';
import { toast } from 'react-toastify';

const BaseUrl = 'https://pms-backend-rvoy.onrender.com/';

const $AuthHttp = Calls(BaseUrl);

export const signUpUser = async (props: { fullName: string; phoneNumber: string; email: string; password: string }) => {
	try {
		const res = await $AuthHttp.post('/account/register', props);
		if (res?.status === 201) {
			toast.success('Registration successful!');
		}
		return res?.data;
	} catch (e: any) {
		console.log('signup call error from api call', e);
		if (e?.response?.status === 400) {
			if (e?.response?.data?.message === 'Validation failed') {
				const validationErrors = e?.response?.data?.errors;
				for (const errorKey in validationErrors) {
					toast.error(validationErrors[errorKey]);
				}
			} else {
				toast.error('User already exist. Please signin to continue.');
			}
		} else if (e?.response?.status === 409) {
			toast.error('Invalid Inputs');
		} else {
			toast.error('An error occurred during registration. Please try again later.');
		}
		throw e?.response?.data || { message: e.message };
	}
};
