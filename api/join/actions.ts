"use server";

import postgres from "postgres";

export const joinWaitlist = async (data: { email: string }) => {
	const connectionString = process.env.DATABASE_URL;
	if (!connectionString) {
		throw new Error("DATABASE_URL is not defined");
	}

	const sql = postgres(connectionString, { ssl: "require" });

	try {
		await sql`INSERT INTO waitlist (email) VALUES (${data.email})`;
		return { success: true };
	} catch (error: any) {
		if (error.code === "23505") { // Unique violation
			throw new Error("Email already exists");
		}
		throw new Error(error.message || "Could not join waitlist");
	} finally {
		await sql.end();
	}
};
