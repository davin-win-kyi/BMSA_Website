import './Contact.css'

import React, {useState, useEffect, useRef} from 'react';

export function Contact() {

  const [open, setOpen] = useState(false);

  const [dropdown, setDropdown] = useState(process.env.PUBLIC_URL + '/drop_down_icon.png')

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        setDropdown(process.env.PUBLIC_URL + '/drop_down_icon.png');
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


  /*
  Function used to toggle the drop down
  */
  const toggleDropDown = () => {
    setDropdown(prevState => {
      return prevState === process.env.PUBLIC_URL + '/drop_down_icon.png' ? process.env.PUBLIC_URL + '/img/close icon.webp' : process.env.PUBLIC_URL + '/drop_down_icon.png';
    })
  }

  const handleClick = () => {
    toggleDropDown();
    setOpen(!open);
  }


  return (
    <div className="App">

      <div class="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" class="contact">

          <input type="hidden" name="access_key" value="a3e47878-a4da-4af6-ae2b-37afd0f827eb"></input>

          <div class="contact-title">
            <h2>Want to get in touch?</h2>
          </div>

          <input type="text" name="name" placeholder='Your Name' className="contact-inputs-name" required></input>
          <input type="text" name="email" placeholder='Your Email' className="contact-inputs-email" required></input>
          <textarea name="message" placeholder="Your message" className="contact-inputs-message" required></textarea>
          <button className="contact-button" type="submit">Send Message</button>
        </form>
      </div>



      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={handleClick}>
          <img src={dropdown}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Menu</h3>
          <ul>
          <DropDownItem img={process.env.PUBLIC_URL + "/img/home.png"} text={"Home"} website={"/"} />
            <DropDownItem img={process.env.PUBLIC_URL + "/img/activities.png"} text={"Activties"} website={"/Activities"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/news.png"} text={"News"} website={"/News"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/Join_club.png"} text={"Join our club!"} website={"/Join"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/contact.jpeg"} text={"Contact"} website={"/Contact"}/>   
          </ul>
        </div>
      </div>

      <div className="background"></div>

    </div>
  );
}

function DropDownItem(props) {
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a href={props.website}> {props.text} </a>
    </li>
  );
}