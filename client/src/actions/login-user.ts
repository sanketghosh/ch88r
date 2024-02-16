import { LoginFormDataTypes } from "@/components/forms/login-form";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (formData: LoginFormDataTypes) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  // console.log(responseBody.username);
  return responseBody;
};
