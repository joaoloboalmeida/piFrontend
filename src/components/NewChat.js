import React, { useState } from "react";
import './NewChat.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default({user, chatlist, show, setShow}) => {

    const [list, setlist] = useState([
        {id:123, avatar: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png', name:'Maria' },
        {id:123, avatar: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png', name:'Maria' },
        {id:123, avatar: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png', name:'Maria' },
        {id:123, avatar: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png', name:'Maria' }
    ]);

    const handleClose =() =>{
        setShow(false);
    }
    return(
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFFFF'}}/>

                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item,key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar"src={item.avatar}></img>
                        <div className="newChat--itemname">{item.name}</div>
                    </div>    
                ))}
                
            </div>
        </div>
    );
}