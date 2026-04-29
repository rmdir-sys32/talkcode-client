import axios from "axios";

export const joinWaitlist = async (data: { email: string }) => {
	const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;
	if (!API_URL) {
		throw new Error("NEXT_PUBLIC_SERVER_URL is not defined");
	}

	try {
		const res = await axios.post(`${API_URL}/join`, data);
		return res.data;
	} catch (error: any) {
		throw new Error(error.response?.data?.message || "Could not join waitlist");
	}
};
