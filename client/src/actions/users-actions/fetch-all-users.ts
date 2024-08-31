import { API_BASE_URL } from "@/constants";

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users`, {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch all users failed:", error);
    return { users: [] }; // Return an empty array in case of failure
  }
};
