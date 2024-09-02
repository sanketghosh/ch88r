import { API_BASE_URL } from "@/constants";

export const getLoggedInUserChats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/conversations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.conversations || [];
  } catch (error) {
    console.error("Fetch all chats failed:", error);
    return { chats: [] };
  }
};
