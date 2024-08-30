// Helper function to generate a random hex color
export const useGetRandomHexColor = () => {
  // Step 1: Define the array of fruit names
  const colors: string[] = [
    "#dc2626",
    "#ea580c",
    "#d97706",
    "#ca8a04",
    "#65a30d",
    "#16a34a",
    "#059669",
    "#0d9488",
    "#0891b2",
    "#0284c7",
    "#2563eb",
    "#4f46e5",
    "#7c3aed",
    "#9333ea",
    "#c026d3",
    "#db2777",
    "#e11d48",
  ];

  // Step 2: Create a function that returns a random fruit from the array
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return { getRandomColor };
};
