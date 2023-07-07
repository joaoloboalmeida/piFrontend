import React from "react";
import Img from "../img/ChatIcon.jpeg";

const ChatIntro = () => {
  
  return (
    <div className="intro">
        <div className="centered-message">
          <img src={Img} alt="" />
        <p><b>Bem Vindo ao IChat</b></p>
        <b>Para iniciar uma conversa, pesquise  a pessoa no campo de pesquisa.</b>
        </div>
        <div className="info">Massa para teste:<break/>
        Iesb; iesb@gmail.com; Senha:12345678 <break/>
        IesbTeste; iesbTeste@gmail.com; Senha:12345678 <break/>
        
        </div>
    </div>
  );
};

export default ChatIntro;
