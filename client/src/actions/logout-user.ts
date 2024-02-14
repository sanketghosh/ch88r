const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const logoutUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("ERROR! Something went wrong.");
  }
};
