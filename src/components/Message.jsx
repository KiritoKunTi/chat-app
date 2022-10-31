import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  message: `flex items-center shadow-xl m-7 py-2 px-6 rounded-tl-full rounded-tr-full`,
  name: `fixed mt-[-4rem] text-xs text-gray-600`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-bl-full`,
};

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.message}>
      <p className={style.name}>{user.displayName}</p>
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
