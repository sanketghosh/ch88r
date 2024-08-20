import { API_BASE_URL } from "@/constants";

export const logoutUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("ERROR! Something went wrong.");
  }

  console.log(responseData);
  return responseData;
};
