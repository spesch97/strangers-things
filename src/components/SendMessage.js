import { Input } from "antd";
import { useState } from "react";
import { messageFetch } from "../api";

const SendMessage = ({ post, token, postID }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={async () => {
        await messageFetch(token, message, postID);
      }}
    >
      <Input
        placeholder="type message here"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="messageButton" type="submit">
        Message Seller
      </button>
    </form>
  );
};

export default SendMessage;
