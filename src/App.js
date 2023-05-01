
import React, {useState, useEffect} from "react";
import './App.css';

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default  ()=> {

    const [chatlist, setChatList] = useState([
        {chatId: 1, title: 'Fulano', Image: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'},
        {chatId: 2, title: 'Fulano', Image: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'},
        {chatId: 3, title: 'Fulano', Image: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'},
        {chatId: 4, title: 'Fulano', Image: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'},
        {chatId: 5, title: 'Fulano', Image: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'}
    ]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id: 123,
        avatar: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
        name:'Maria Lacerda'
    });

    const [showNewChat, setShowNewChat] = useState(false);

    const handleNewChat = () =>{
        setShowNewChat(true);
    }

    return(
        <div className="app-window">
            <div className="sidebar">
                <NewChat  
                    chatlist={chatlist}
                    user={user}
                    show = {showNewChat}
                    setShow={setShowNewChat}
                 />
                <header>
                    <img  className="header-avatar" src={user.avatar}></img>
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon style={{color: '#919191'}}/>
                        </div>

                        <div onClick={handleNewChat} className="header-btn">
                            <ChatIcon style={{color: '#919191'}}/> 
                        </div>

                        <div>
                            <MoreVertIcon style={{color: '#919191'}}/> 
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search-input">
                        <SearchIcon style={{color: '#919191'}}/>
                        <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
                    </div>
                </div>

                <div className="chatlist">
                    {chatlist.map((item, key)=>(
                        <ChatListItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={()=>setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>

            </div>

            
            <div className="content-area">
                {activeChat.chatId !== undefined &&
                        <ChatWindow 
                        user = {user}/>
                }       
                {activeChat.chatId === undefined &&
                    <ChatIntro/>
                }
                <ChatIntro/>
            </div>
        
                    
        </div>
        

        
  )
}