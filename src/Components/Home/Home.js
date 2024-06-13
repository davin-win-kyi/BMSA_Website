import './Home.css'

import React, {useState, useEffect, useRef} from 'react';

export function Home() {

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

  /*
  Return block
  */
  return (
    <div className="App">

      <div className="home-elements">
        <img className="profile-photo" src={process.env.PUBLIC_URL + 'img/BMSA_home.png'}></img>

        <div className="home-info">

          <p className="home-name">Burma Myanmar Student Association (BMSA)</p>
          <p className="home-description">Enlightening Students in Burmese Culture!</p>

          <div className="home-social">
            <a href="https://www.facebook.com/BMSAnetwork/">
              <img className="home-social-first" src={process.env.PUBLIC_URL + "/img/facebook.svg"}></img>
            </a>

            <a href="https://www.instagram.com/bmsauw/">
              <img className="home-social-other1" src={process.env.PUBLIC_URL + "/img/instagram_icon.png"}></img>
            </a>

            <a href="https://linktr.ee/bmsauw.savemyanmar">
              <img className="home-social-other2" src={process.env.PUBLIC_URL + "/img/linktree.png"}></img>
            </a>
          </div>
        </div>
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