import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import coding from '../../../Image/coding.jpg'

const Skills = () => {



   return (
      <section id="skill" className="container mt-5 pt-5">
         <div className="row">
            <div className="col-md-6">
               <img className="img-fluid" src={coding} alt=""/>
            </div>
            <div className="col-md-6 mt-5 pt-3">
               <h1 className="change-text">My Skills</h1>
               <h5 className="text-secondary">CRAZY FULL STACK DEVELOPER AND WANTS TO EXPLORE EVERY TECH STACK</h5>
               <label for="customRange3" class="form-label">HTML5</label>
               <ProgressBar now={80} label={`${80}%`} />
               <label for="customRange3" class="form-label">CSS</label>
               <ProgressBar now={75} label={`${75}%`} />
               <label for="customRange3" class="form-label">Bootstrap</label>
               <ProgressBar now={90} label={`${90}%`} />
               <label for="customRange3" class="form-label">JavaScript</label>
               <ProgressBar now={80} label={`${80}%`} />
               <label for="customRange3" class="form-label">React</label>
               <ProgressBar now={85} label={`${85}%`} />
               <label for="customRange3" class="form-label">Node</label>
               <ProgressBar now={75} label={`${75}%`} />
               <label for="customRange3" class="form-label">MongoDB</label>
               <ProgressBar now={80} label={`${80}%`} />

               <p className="text-secondary"><i class="far point-color fa-hand-point-right mt-4"></i> Develop highly interactive Front end / User Interfaces for your web like protfolio, Ecommerce website</p>
               <p className="text-secondary"><i class="far point-color fa-hand-point-right"></i> Integration of third party services such as Firebase/Heroku/Netlify</p>
            </div>
         </div>
      </section>
   );
};

export default Skills;