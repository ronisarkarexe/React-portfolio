import React from 'react';

const ProjectDetails = (props) => {
   const {img, name, title, link, github} = props.project
   return (
      <section className="col-md-4">
         <div className="mb-5">
            <img className="img-fluid img-round" src={img} alt=""/>
            <h4 className="mt-3 ms-2">{name}</h4>
            <p className="mt-3 ms-2">{title}</p>
            <div className="d-flex mt-4 ms-2">
               <a href={github} target="_blank"><button className="div-class-button">Github</button></a>
               <a href={link} target="_blank"><button className="ms-3 div-class-button">Visit Website</button></a>
            </div>
         </div>
      </section>
   );
};

export default ProjectDetails;