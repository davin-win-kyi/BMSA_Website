import './News.css'

import React, {useState, useEffect, useRef} from 'react';

export function News() {

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

      <div className="teaching-main">
        <p className="teaching-title">News</p>

        <div className="teaching-classes">
          <a href="https://apnews.com/article/myanmar-military-suu-kyi-house-arrest-a76feadba52f619a921cf4b43e7dcf54">
            <img className="teaching-class-img" src={process.env.PUBLIC_URL + "/img/aung_san_suu_kyi.png"}></img>
          </a>
          <p className="teaching-class-text">
            <p>Aung San Suu Kyi is no longer in prison. But is now under house arrest</p>
          </p>
        </div>

        <div className="teaching-classes">
          <a href="https://apnews.com/article/suu-kyi-national-league-democracy-military-938b1071f7ca35a46e8147a39527c79">
            <img className="teaching-class-img" src={process.env.PUBLIC_URL + "/img/TinOo.png"}></img>
          </a>
          <p className="teaching-class-text">
            <p>Tin Oo, one of Aung San Suu Kyi's closest friend's has sadly passed away</p>
          </p>
        </div>

        <div className="teaching-classes">
          <a href="https://apnews.com/article/myanmar-rakhine-arakan-sittwe-villagers-rebels-aee13ef88e5082b23077bb0faadcd0d5">
            <img className="teaching-class-img" src={process.env.PUBLIC_URL + "/img/Rakhine_State.png"}></img>
          </a>
          <p className="teaching-class-text">
            <p>Continuing violence. Violence in Rakhine state</p>
          </p>
        </div>

        <div className="teaching-classes">
          <a href="https://www.bbc.com/news/topics/c302m85q5vzt">
            <img className="teaching-class-img" src={process.env.PUBLIC_URL + "/img/bbc_myanmar.png"}></img>
          </a>
          <p className="teaching-class-text">
            <p>Learn more about the current conflict with BBC news</p>
          </p>
        </div>

        <div className="teaching-classes">
          <a href="https://apnews.com/hub/myanmar">
            <img className="teaching-class-img" src={process.env.PUBLIC_URL + "/img/AP_news.png"}></img>
          </a>
          <p className="teaching-class-text">
            <p>Learn more about the current conflict with AP news</p>
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