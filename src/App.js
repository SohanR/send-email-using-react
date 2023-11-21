import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import GithubCorner from 'react-github-corner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';




function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
          'service_floapca', 
          'template_619ha4c', 
          form.current, 
          '1lddeiOY-rFCWLv94'
      )
      .then((result) => {
          toast.success('Email sent, Thank you!');
      }, (error) => {
          toast.error('Something went wrong,try again!');
      });

      e.target.reset();
  };
  return (
    <div className="App">
      <GithubCorner href="https://github.com/SohanR/send-email-using-react" /> 

      <h1 className='title'>Send Email Using ReactJS without Backend</h1> 


      <div className='container border'>
        <form className='row' style={{margin:"25px 85px 75px 100px"}} ref={form} onSubmit={sendEmail} >
            
            <label className='tag'>Name</label>
            <input className='form-control' type="text" name='name'  placeholder='' required/>
            

           
            <label className='tag'>Email</label>
            <input className='form-control' type="email" name='email'  placeholder='' required/>
        

        
            <label className='tag'>Message</label>
            <textarea className='form-control' name="message"  cols="25" rows="4"  placeholder='' required></textarea>

            <input className='form-control btn btn-primary' type="submit" value='send' style={{marginTop:'30px'}}/>
        </form>
      </div>

      <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="dark"
        />
    </div>
  );
}

export default App;
