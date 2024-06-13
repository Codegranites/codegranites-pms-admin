'use server';

import Calls from '@/app/api/call';
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

const BaseUrl = 'https://pms-backend-rvoy.onrender.com';
const $AuthHttp = Calls(BaseUrl);


export const verifyEmail = async (id?: string) => {
    if (!id) {
        return {
          message: "Error verifying email",
          status: 400
        };
    }

    try{
        const res = await $AuthHttp.get(`${BaseUrl}/account/verify-email/${id}`)
        return {
                status: res.status,
                message: res.data.message,
            };
        } catch (e: any) {
            return {
                message: e?.response?.data.message,
                status: e?.response?.status,
            };
        }
    };

