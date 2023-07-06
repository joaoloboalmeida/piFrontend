import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { Link } from "react-router-dom";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        
        <button ><Link to="/Profile">Alterar Nome e e-mail</Link></button> 
        
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
