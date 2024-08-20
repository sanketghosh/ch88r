// import mongoose from "mongoose";

// export type MessageType = {
//   _id: string;
//   senderId: string;
//   receiverId: string;
//   message: string;
// };

// const messageSchema = new mongoose.Schema<MessageType>(
//   {
//     senderId: {
//       type: String,
//       ref: "User",
//       required: true,
//     },
//     receiverId: {
//       type: String,
//       ref: "User",
//       required: true,
//     },
//     message: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Message = mongoose.model<MessageType>("Message", messageSchema);
// export default Message;
