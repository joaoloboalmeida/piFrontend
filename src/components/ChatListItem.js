import React from 'react';
import './ChatListItem.css'
export default ({onClick, active, data}) => {
    return (
        <div
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className='chatListItem-avatar' src={data.Image} alt=''/>
            <div className='chatListItem-lines'>
                 <div className='chatListItem-line'>
                        <div className='chatListItem-name'>{data.title}</div>
                        <div className='chatListItem-date'>19:00</div>
                 </div>
                 <div className='chatListItem-line'>
                       <div className='chatListItem-lastmsg'>
                            <p>IAE CARAI</p>
                        </div> 
                 </div>
            </div>
         </div>
    )
}