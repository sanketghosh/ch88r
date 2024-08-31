import { API_BASE_URL } from "@/constants";

export const searchUsers = async (query: string) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/users/search?searchQ=${encodeURIComponent(query)}`,
      {
        credentials: "include", // Ensures cookies are sent with the request
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("User search failed:", error);
    return { users: [] };
  }
};
