import React from 'react';

const PersonalDerails = () => {
   return (
      <section className="container mt-5">
         <div className="row personal-details">
            <div className="col-md-4 pt-4 pb-3 ps-4 div-class">
               <h5>Personal Details</h5>
               <hr/>
               <p>Email: <span className="text-secondary">ronichandrasarkar@gmail.com</span></p>
               <p>Languages: <span className="text-secondary">Bangla, English and Hindi</span></p>
               <p>Nationality: <span className="text-secondary">Bangladesh</span></p>
            </div>
            <div className="col-md-8 mt-2">
               <h3 className="personal-header">My MERN Developer journey</h3>
               <p className="text-secondary">I started a Full-stack web developer journey 1 year ago when I feel bored in lockdown. And the journey till now has been really awesome. I like to solve problems through my skills and intellectual curiosity. I love to learn new technologies and features. There was always a passion working inside me. I can come this far today for this patient.</p>
               <p className="text-secondary">I am learning and highly passionate about Javascript development technologies such as:-
                  MARN Stack (MongoDB, React, Redux Express.js, Node.js)</p>
            </div>
         </div>
      </section>
   );
};

export default PersonalDerails;