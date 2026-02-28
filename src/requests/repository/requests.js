import axiosInstance from "../../app/instance";

export const GenerateOtp = async ({ email }) => {
    try {
        const response = await axiosInstance.post('/api/otp/send', { email: email });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}
export const VerifyOtp = async ({ email, otp }) => {
    try {
        const response = await axiosInstance.post('/api/otp/verify', { email: email, otp: otp });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}
