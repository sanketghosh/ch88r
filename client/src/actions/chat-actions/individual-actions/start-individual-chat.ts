import { API_BASE_URL } from "@/constants";

export const startIndividualChat = async (formData: string) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/individual-conversation`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message);
    }

    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("ERROR! Cannot submit form. ", error);
    return error;
  }
};
