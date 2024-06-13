import './Activities.css'

import React, {useState, useEffect, useRef} from 'react';

export function Activities() {

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

      <p className="projects-title">Activities!</p>

      <div class="grid-container">
        <div class="grid-item">
          <a href="https://jsis.washington.edu/csead/programs/language-instruction/burmese/">
            <img className="project-img" src={process.env.PUBLIC_URL + "/img/classes.png"}></img>
            <p>Wanna learn some burmese</p>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://www.tbsousa.org/v11_10/default.html">
          <img className="project-img" src={process.env.PUBLIC_URL + "/img/burmese_buddhist.png"}></img>
            <p>Interested in Burma's rich buddhist culture</p>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://www.facebook.com/SaveBurmaSeattleWA/">
            <img className="project-img" src={process.env.PUBLIC_URL + "/img/mohingya.png"}></img>
            <p>Food fair!</p>
          </a>
        </div>
        <div class="grid-item">
          <a href="https://www.facebook.com/BMSAnetwork/posts/3589824937804167/?paipv=0&eav=AfYTHu1pZiOeBgpXb8uwfnbEW85bLYEAH-tDHSGOFapOGD-PZJFmXMf0Zv1yRTDZqIM&_rdr">
            <img className="project-img" src={process.env.PUBLIC_URL + "/img/thadingyut.png"}></img>
            <p>thadingyut (Lighting Festival)</p>
          </a>
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