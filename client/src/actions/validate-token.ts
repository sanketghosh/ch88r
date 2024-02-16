const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/v1/validate-token`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Invalid token");
  }

  const res = response.json();
  return res;

  /*  const res = await response.json();
  return res; */
};
