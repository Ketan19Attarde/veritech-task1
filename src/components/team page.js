// TeamPage.js

import React from 'react';

import '../index.css';

const teamMembers = [
  { name: 'Richard Jenkins', position: 'CEO', image: 'images/team images/image1.jpg' },
  { name: 'Luella Blevins', position: 'Vice President', image: 'images/team images/image11.jpg' },
  { name: 'Foster Mathis', position: 'Vice President', image: 'images/team images/image3.jpg' },
  { name: 'Tyson Moss', position: 'Software Engineer', image: 'images/team images/image2.jpg' },
  { name: 'Kendra Hunt', position: 'Software Engineer', image: 'images/team images/image6.jpg' },
  { name: 'Dilan Jenkins', position: 'Sales Officer', image: 'images/team images/image7.jpg' },
  { name: 'Zuri McPherson', position: 'Marketing Officer', image: 'images/team images/image10.jpg' },
  // Add more team members here...
];

const TeamPage = () => {
  return (
    <div className="team-page">

    <div className='company_name'>
    <div className='company_name_box'>
    <h1>VeriTech</h1>
    </div>
    </div>

    <div className='para'>
    <p>Welcome to VeriTech, where a dedicated team of professionals works together to bring innovation, creativity and expertise to software industry get to know the individuals who make our company thrive.</p>
    <hr></hr>
    </div>
    
      <h1>Our Team</h1>
      <div className="team-members">
      
        {teamMembers.map((member, index) => (
          
            <>
           
            <div className="card" style={{ "width": "18rem", "maxHeight": "360px" , "margin" :"10px","padding" :"10px"}}>
   <img className="card-img-top" src={member.image} alt="Card image cap" style={{ "height": "200px" ,"width":"100%"}}/>
  <div className="card-body">
     <p className="card-text">{member.name}</p>
     <p className="card-text">{member.position} </p>
   </div>
   </div>
           
          {/* <TeamMember key={index} name={member.name} position={member.position} image={member.image} /> */}
          </>
          
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
