import React from 'react'

const Search = () => {
  return (
    <div className="search">
    <div className="searchForm">
      <input
        type="text"
        placeholder="Find a user"
        
      />
    </div>
      <div className="userChat" >
        <img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt="" />
        <div className="userChatInfo">
          <span>Ro</span>
        </div>
      </div>
  </div>
  )
}

export default Search;