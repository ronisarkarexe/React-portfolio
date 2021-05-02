import React, { useState } from 'react';
import { Modal , Button, Carousel, CarouselItem} from 'react-bootstrap';

const ProjectDetails = (props) => {
   const {img, name, title, link, github,technology, img2} = props.project;

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   return (
      <section className="col-md-4">
         <div className="mb-5">
            <div className="hover01">
               <div>
                  <figure>
                     <img className="img-fluid img-round" src={img} alt=""/>
                  </figure>
               </div>
            </div>
            <div className="d-flex mt-4">
               <button onClick={handleShow} className="div-class-button">Read More <i class="fas fa-arrow-right"></i></button>
               <a href={github} target="_blank"><button className=" ms-2 div-class-button">Github</button></a>
               <a href={link} target="_blank"><button className="ms-2 div-class-button">Website</button></a>
            </div>
         </div>
         <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Carousel fade>
              <CarouselItem>
              <img className="img-fluid" src={img} alt=""/>
              </CarouselItem>
              <CarouselItem>
              <img className="img-fluid" src={img2} alt=""/>
              </CarouselItem>
           </Carousel>
            <p className="ms-2 summary-size mt-3">Summary: <span className="title-car-size text-secondary">{title}</span></p>
            <h6 className=" ms-2">Technology used: <span className="text-secondary">{technology}</span></h6>
            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
         </div>
      </section>
   );
};

export default ProjectDetails;