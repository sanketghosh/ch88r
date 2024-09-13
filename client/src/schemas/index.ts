import * as z from "zod";

// REGISTER SCHEMA
export const RegisterSchema = z
  .object({
    username: z
      .string()
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores, without spaces",
      )
      .min(1, {
        message: "Username of atleast four characters needed.",
      })
      .max(12, {
        message: "Maximum twelve characters acceptable.",
      }),
    email: z.string().email({
      message: "A valid email is required",
    }),
    password: z.string().min(6, {
      message: "At least 6 characters needed.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  });

// LOGIN SCHEMA
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Not a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Must be of atleast six characters.",
  }),
});

// UPDATE USER DETAILS (eg. username, email) SCHEMA
export const UpdateUserDetailsSchema = z.object({
  username: z
    .string()
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores, without spaces",
    )
    .min(4, {
      message: "Username of atleast four characters needed.",
    })
    .max(12, {
      message: "Maximum twelve characters acceptable.",
    }),
  email: z.string().email({
    message: "Not a valid email address.",
  }),
});

export const UpdatePasswordSchema = z.object({
  currentPassword: z.string().min(6, {
    message: "Must be of atleast six characters.",
  }),
  newPassword: z.string().min(6, {
    message: "Must be of atleast six characters.",
  }),
});

export const UpdateBioSchema = z.object({
  userBio: z
    .string()
    .min(2, {
      message: "At least 2 characters.",
    })
    .max(150, {
      message: "Not more than 150 characters.",
    })
    .optional(),
});

/*
export const AddUserSchema = z.object({
  addUser: z.string(),
});

export const CreateGroupSchema = z.object({
  groupUserNames: z.string().array(),
});
*/

/* 
ADD USERS TO GROUP SCHEMA 
*/

export const CreateGroupSchema = z.object({
  groupName: z.string().min(1, {
    message: "Group name is required.",
  }),
  groupDescription: z.string().min(1, {
    message: "You need a group description to get started.",
  }),
  groupParticipantsIds: z.array(z.string()),
});

/* 
START INDIVIDUAL CONVERSATION
*/

export const StartIndividualConversationSchema = z.object({
  participantId: z.string(),
});
