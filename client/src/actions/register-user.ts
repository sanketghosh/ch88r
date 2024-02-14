import { RegisterFormDataType } from "@/components/forms/register-form";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (formData: RegisterFormDataType) => {
  const response = await fetch(`${API_BASE_URL}/api/v1/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const resposneBody = await response.json();

  if (!response.ok) {
    throw new Error(resposneBody.message);
  }
};
