import React from 'react';
import yogger from '../../../Image/yogger.PNG'
import thiti from '../../../Image/rides.PNG'
import rock from '../../../Image/Rock.PNG'
import cosmetic from '../../../Image/Cosmetic.PNG'
import booking from '../../../Image/Booking Time.PNG'
import club from '../../../Image/Club.PNG'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import yoga from '../../../Image/yogger1.PNG'
import club1 from '../../../Image/club1.PNG'
import rock1 from '../../../Image/Handrok1.PNG'
import tithi2 from '../../../Image/thite1.PNG'

const projects = [
   {
      img: yogger,
      img2: yoga,
      name: 'Yogger',
      title: 'Yogger is a Full Stack booking Application. Users can choices her/his desire Service.Cultivated positive relationships with participants by interacting with groups during fitness classes. ',
      link: 'https://yogger-f430e.web.app/',
      github: 'https://github.com/ronisarkar1/Yogger-project',
      technology: 'Node.js, MongoDB, React, Javascript,HTML5, Firebase auth, Cloud Database, React-Router, Express.js, Bootstrap, CSS '
   },
   {
      img: thiti,
      img2: tithi2,
      name: 'Tithi Riders',
      title: 'A web application with Admin & Customer dashboard. A user can select their destination. And see Google Map also. Served customers in a friendly, efficient manner following outlined steps of service.',
      link: 'https://react-auth-89ed8.web.app/',
      github: 'https://github.com/ronisarkar1/React-auth-project',
      technology:'React, Firebase, React-Router, Bootstrap, FontAwesome, Javascript,CSS, HTML5, Fake json data',
   },
   {
      img: rock,
      img2: rock1,
      name: 'Hard Rock Lyric Search',
      title: 'In this application, a user can easily search for the sone of his choice. If a user searches with this first letter of a song name, it will return a related song',
      link: 'https://ronisarkar1.github.io/hard-rock/index.html',
      github: 'https://github.com/ronisarkar1/hard-rock',
      technology:'HTML5, JavaScript, CSS',

   },
   {
      img: club,
      img2: club1,
      name: 'International Champions Cup',
      title: 'This is International Championship Cup.There are many teams here. A user click on Explore button, the member details of the them will be able to see everything',
      link: 'https://upbeat-jang-4060b2.netlify.app/',
      github: 'https://github.com/ronisarkar1/React-router-project',
      technology:'Javascript, HTML5, CSS, React, React-Router, Bootstrap, FontAwesome, The Sports DB API'
   },
   {
      img: booking,
      img2: booking,
      name: 'Cruise Queen',
      title: 'This web is a ship ticket booking system application. A user will able to set the location and take the ticket of this ship, and also see total price',
      link: 'https://ronisarkar1.github.io/Cruise-Queen/',
      github: 'https://github.com/ronisarkar1/Cruise-Queen',
      technology:'',
   },
]

const Project = () => {
   return (
      <section id="project" className="color-container">
         <div className="container mt-5">
            <h1 className="text-center mt-5 pt-5 text-sizing">My Projects</h1>
            <div className="row mt-5">
               <div className="project-details">
                  {
                     projects.map(project => <ProjectDetails project={project}></ProjectDetails>)
                  }
               </div>
            </div>
         </div>
      </section>
   );
};

export default Project;