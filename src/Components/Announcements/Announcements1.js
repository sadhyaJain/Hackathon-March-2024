// AnnouncementList.js
import React from 'react';
import './AnnouncementList.css';

let announcement=[
    {
        title:"Parso is holi",
        details:"rubbish"
    },
    {
        title:"Today we fucked up",
        details:"fucked up"
    },
    {
        title:"We did good soemthing",
        detail:"lmao noob"
    }
]
const AnnouncementList = () => {
  return (
    <div className="announcement-list">
      <h2>Announcements</h2>
      <ul>
        {announcement.map((announcement, index) => (
          <li key={index}>
            <h3>{announcement.title}</h3>
            <p>{announcement.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnnouncementList;