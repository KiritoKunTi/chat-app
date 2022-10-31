import React from "react";

const style = {
  form: `h-14 w-full max-w-[728px] flex absolute bottom-0 text-xl`,
  input: `w-full text-xl p-3 bg-gray-900 text-white border-none outline-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = () => {
  return (
    <form className={style.form}>
      <input className={style.input} type="text" placeholder="Message" />
      <button className={style.button}>Send</button>
    </form>
  );
};

export default SendMessage;
