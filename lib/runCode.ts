import axios from "axios";

export const runCode = async (
	code: string,
	languageId: number,
	problemId: string,
) => {
	try {
		const res = await axios.post(
			process.env.NEXT_PUBLIC_SERVER_URL! + "/submit",
			{
				code,
				languageId,
				problemId,
			},
		);
		return res.data;
	} catch (error) {
		console.error("Error running code:", error);
		throw error;
	}
};
