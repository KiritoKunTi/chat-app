import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const style = {
  form: `h-14 w-full max-w-[728px] flex absolute bottom-0 text-xl`,
  input: `w-full text-xl p-3 bg-gray-900 text-white border-none outline-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input === "") {
      return alert("please enter a valid message");
    }

    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button}>Send</button>
    </form>
  );
};

export default SendMessage;
