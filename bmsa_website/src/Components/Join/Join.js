/*
This is the about my page of the website
*/


import './Join.css'

import React, {useState, useEffect, useRef} from 'react';

export function Join() {

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
    <div>

      <div className="aboutme-content">
        <p className="aboutme-title">Wanna join our club!</p>

        <div className="aboutme-main-content">
          <img className = "aboutme-image" src={process.env.PUBLIC_URL + "img/join_club.png"}></img>
          <p className="aboutme-bio">
          <br></br>
          <br></br>
          <br></br>
            Feel free to reach out to:
            <br></br>
            <br></br>
            Davin Win Kyi: <a className="about-link" href="https://www.facebook.com/davin.kyi/">Davin's Facebook Profile</a>
            <br></br>
            Nu Nu: <a className="about-link" href="https://www.facebook.com/profile.php?id=100011295758926">Nu Nu's Facebook Profile</a>
            <br></br>
            Savannah Thaw: <a className="about-link" href="https://www.facebook.com/savannah.thaw">Savannah's Facebook Profile</a>
            <br></br>
            <br></br>
            Also feel free to contact us through our contact menu option 
          
          </p>
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
            <DropDownItem img={process.env.PUBLIC_URL + "/img/join_club.png"} text={"Join our club!"} website={"/Join"}/>
            <DropDownItem img={process.env.PUBLIC_URL + "/img/contact.jpeg"} text={"Contact"} website={"/Contact"}/>    
          </ul>
        </div>

        <div className="aboutme-educationExperience">
          <div>
          </div>

          <div>
          </div>
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

/*
        <a href="https://drive.google.com/file/d/173AAasbF66ZX1EUa88uzUN6o-4kdKU4C/view?usp=sharing">
          <button className="aboutme-cirriculumVitae">
            Cirriculumn Vitae
          </button>
        </a>
        */


/*
<div className="aboutme-experienceAndEducation">
          <div className="aboutme-education">
            <p>
              Education
            </p>

            <div className="aboutme-education-element">
              <img className="aboutme-education-img" src="img/UW icon.png"></img>
              <div className="aboutme-education-text">
                <p>University of Washington</p>
                <p> Bachelor of Computer Science 2020-2024</p>
              </div>
            </div>


            <div className="aboutme-education-element">
              <img className="aboutme-education-img" src="img/UW icon.png"></img>
              <div className="aboutme-education-text">
                <p>University of Washington</p>
                <p> Masters of Computer Science 2024-present</p>
              </div>
            </div>


          </div>

          <div className="aboutme-experience">
            <p>
              Experience
            </p>

            <div className="aboutme-experience-element">
              <img className="aboutme-experience-img" src="img/makeability icon.png"></img>
              <div className="aboutme-experience-text">
                <p>University of Washington</p>
                <p> Masters of Computer Science 2024-present</p>
              </div>
            </div>

            <div className="aboutme-experience-element">
              <img className="aboutme-experience-img" src="img/makeability icon.png"></img>
              <div className="aboutme-experience-text">
                <p>University of Washington</p>
                <p> Masters of Computer Science 2024-present</p>
              </div>
            </div>

            <div className="aboutme-experience-element">
              <img className="aboutme-experience-img" src="img/ubicomp.png"></img>
              <div className="aboutme-experience-text">
                <p>Ubiqioutus Computing Lab</p>
                <p> Feb 2023-Sep 2023</p>
              </div>
            </div>
          </div>
        </div>
        */