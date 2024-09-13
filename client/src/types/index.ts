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

export type Conversation = {
  id: string;
  lastMessage: string;
  updatedAt: Date;
  users: UserType[];
  isGroup: boolean;
  group?: Group;
};

export type Group = {
  name: string;
  groupDescription: string;
};
