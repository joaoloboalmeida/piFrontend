import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import ChatIntro from "./ChatIntro";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
      </div>

      {data.user?.displayName ? ( 
         <>
         <Messages />
         <Input />
       </>
        
      ) : (
        <ChatIntro />
      )}

      
    </div>
  );
};

export default Chat;
