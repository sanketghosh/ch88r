export type AuthenticatedUserType = {
  userId: string;
  userUsername: string;
  userEmail: string;
  userAvatar: string | null;
  userCreatedAt: Date | string;
};

export type UserType = {
  id: string;
  image: string;
  username: string;
  email: string;
  userAbout: string;
  avatar: string;
  createdAt: Date;
};

export type DataType = {
  image: string;
  username: string;
  lastMessage: string;
};
