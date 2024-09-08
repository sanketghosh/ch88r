import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export const generateUniquePassKey = () => {
  const uniquePasskey = uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals, adjectives],
    separator: "-",
    style: "lowerCase",
    length: 4,
  });

  return uniquePasskey;
};
