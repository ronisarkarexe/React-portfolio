import React from 'react';
import emailjs from 'emailjs-com';
import roni from '../../../Image/ronisarkar.png'

const Contact = () => {

  function emailSubmit(e){
      e.preventDefault();

      emailjs.sendForm('service_0py6ypg', 'template_wiv5c42', e.target, 'user_N4wlg8o7eoWrLWD4uYidQ')
         .then((result) => {
            console.log(result.text);
            alert('Email send successfully')
         }, (error) => {
            console.log(error.text);
         });
         e.target.reset()
  }

   return (
      <section id="contact" className="contact-container">
         <div className="container">
            <div className="row pt-3">
               <div className="col-md-4 mt-5">
                  <h1 className="mb-5 text-con-color style-text">Get in touch_</h1>
                  <div>
                     <h5 className="text-con-color font-family">PHONE: <span className="span-text">+8801714653780</span></h5>
                     <h5 className="text-con-color font-family">EMAIL: <span className="span-text">ronichandrasarkar@gmail.com</span></h5>
                  </div>
                  <div className="mt-5">
                     <a href="https://github.com/ronisarkar1"><i class="fab fa-github git-color fa-2x"></i></a>
                     <a href="https://www.linkedin.com/in/ronisarkar76/"><i class="fab ps-3 fa-linkedin link-color-chang fa-2x"></i></a>
                     <a href="https://medium.com/@ronisarkar2244"><i class="fab ps-3 fa-2x medium-color-change fa-medium"></i></a>
                  </div>
                  <img className="img-fluid-header mt-4" src={roni} alt="roni"/>
               </div>
               <div className="col-md-8 mt-5">
                     <h5 className="ms-2 font-family text-con-color">Or just write me a letter here_</h5>
                     <form className="contact-form" onSubmit={emailSubmit}>
                        <div className="row pt-3 mx-auto">
                           <div className="form-group mx-auto">
                                 <input type="text" className="form-control" name="name" placeholder="Name"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input type="email" className="form-control" name="email" placeholder="Email"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <textarea type="text" className="form-control" id="" name="message" placeholder="Your Massage"/>
                           </div>
                           <div className="form-group mx-auto">
                                 <input className="send-massage-btn" type="submit" value="send massage"/>
                           </div>
                        </div>
                       
                     </form>
               </div>
            </div>
            <footer className="text-center pb-3 mt-4">Copyright &copy; By Roni Sarkar</footer>
         </div>
      </section>
   );
};

export default Contact;