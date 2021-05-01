import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Image/typingCoding.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown,} from '@fortawesome/free-solid-svg-icons'


const HomeSection = () => {
   return (
      <section id="home" className="container">
         <div className="row">
            <div className="col-md-6 mt-5 pt-5">
               <h1 className="mt-5 name-text pt-5">Here I'am Roni <br/> Chandra Sarkar </h1>
               <h5 className="mt-3 mb-3 text-font text-secondary">Im a MERN Developer who is always creating and learning awesome stuff. let's start scrolling and learn more <br/> about me</h5>
               <div>
                  <a href="https://github.com/ronisarkar1"><i class="fab fa-github git-color fa-2x"></i></a>
                  <a href="https://web.facebook.com/ronisarkar.outlook"><i class="fab ps-3 fa-facebook color fa-2x"></i></a>
                  <a href="https://www.linkedin.com/in/ronisarkar76/"><i class="fab ps-3 fa-linkedin link-color fa-2x"></i></a>
                  <a href="https://medium.com/@ronisarkar2244"><i class="fab ps-3 fa-2x medium-color fa-medium"></i></a>
               </div>
               <div className="mt-4">
                  <a href="#contact"><button className="me-4 bth-color-hire">Hire Me</button></a>
                  <a href="https://drive.google.com/file/d/1-kHrSF5m7LR-TpNtdma1rjs8IU_gVc1J/view" target="_blank"><button as={Link} className="bth-color">Download Resume <FontAwesomeIcon icon={faArrowDown} /> </button></a>
               </div>
            </div>
            <div className="col-md-6">
               <img className="img-fluid img-animation mt-5" src={img} alt=""/>
            </div>
         </div>
      </section>
   );
};

export default HomeSection;