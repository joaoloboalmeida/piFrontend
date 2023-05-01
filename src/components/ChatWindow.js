import React, { useState, useEffect, useRef } from "react";
import './ChatWindow.css';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from "emoji-picker-react";
import MessageItem from "./MessageItem";
import { List } from "@mui/material";


export default ({user}) => {

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const[list, setlist] = useState([
    {author: 123, body: 'teste teste teste'}
    ,{author: 123, body: 'teste teste teste teste'}
    ,{author: 1234, body: 'teste  teste'},
    {author: 123, body: 'teste teste teste'}
    ,{author: 123, body: 'teste teste teste teste'}
    ,{author: 1234, body: 'teste  teste'},
    {author: 123, body: 'teste teste teste'}
    ,{author: 123, body: 'teste teste teste teste'}
    ,{author: 1234, body: 'teste  teste'},{author: 123, body: 'teste teste teste'}
    ,{author: 123, body: 'teste teste teste teste'}
    ,{author: 1234, body: 'teste  teste'}]);

    useEffect(()=> {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[list]);

    const handleEmojiClick = (e, emojiObject) =>{
        setText(text + emojiObject.emoji);
        console.log(emojiObject);

    }
    const abirEmoji = () =>{
    setEmojiOpen(true);
    }
    const HandleCloseEmoji = () =>{
        setEmojiOpen(false)
    }
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="chatWindow--headerinfo">
                    <img className="chatWindow--avatar" src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" />
                    <div className="chatWindow--name">Maria</div>
                </div>

                <div className="chatWindow--headerbuttons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
            <div ref ={body} className="chatWindow--body">
                {list.map((item, key) =>(
                    <MessageItem
                    key={key}
                    data={item}
                    user={user}
                    />
                ))}        

            </div>
            <div className="chatWindow--emojiarea" style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker width="100%"
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    skinTonesDisabled
                />
            </div>

            <div className="chatwindow--footer">

                <div className="chatWindow--pre">

                    <div className="chatWindow--btn" onClick={abirEmoji} onDoubleClick={HandleCloseEmoji}>
                        
                        <InsertEmoticonIcon style={{ color: '#919191' }} />
                    </div>

{/*       <div className="chatWindow--btn" onclick={HandleCloseEmoji}>
                        
                        <InsertEmoticonIcon style={{ color: '#919191' }} />
    </div>*/}

                </div>

                <div className="chatWindow--inputarea">
                    <input className="chatWindow--input"
                     type="text" 
                     placeholder="Digite uma mensagem" 
                     value={text}
                     onChange={e=>setText(e.target.value)}/>

                </div>
                <div className="chatWindow--pos">

                    <div className="chatWindow--btn">
                        <SendIcon style={{ color: '#919191' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}