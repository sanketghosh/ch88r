import { API_BASE_URL } from "@/constants";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const registerUser = async (
  formData: z.infer<typeof RegisterSchema>,
) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  console.log(responseData);
  return responseData;
};
