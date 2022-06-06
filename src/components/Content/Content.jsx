import React, {useState} from "react";
import "./Content.css";
import pink from "../Images/pink.jpg";
import flowerk from "../Images/flowerk.jpg";
import pinkk from "../Images/pinkk.jpg";
import smallk from "../Images/smallk.jpg";
import threek from "../Images/threek.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Content() {
  const [isActive, setIsActive] = useState('black')
  const handleClick = (e) => {
           console.log("this is working fine");
           e.preventDefault();
          setIsActive( e.target.style.color = "red")
    console.log(e.target);

    }
  
  return (
    <>
      <div className="headingtext">
        <h4>Любовь - Кардиганы короткие - </h4>
        <h4 id="pink-text">Укороченный кардиган</h4>
      </div>
      <section className="photos">
        <div className="small-photos">
          <img className="zoomA" src={flowerk} alt="kardigan" />
          <img className="zoomA" src={pinkk} alt="kardigan" />
          <img className="zoomA" src={smallk} alt="kardigan" />
          <img className="zoomA" src={threek} alt="kardigan" />
        </div>
        <div className="main-photo">
          <input type="checkbox" id="clickZoom" />
          <label htmlFor="clickZoom">
            <img src={pink} alt="kardigan" />
          </label>
        </div>
      </section>
      <aside>
        <div className="content-text">
          <h4>Укороченный кардиган</h4>
          <h2>Romance</h2>
          <p>3500p.</p>
        </div>
        <div className="circles">
          <p>Цвет: зеленый</p>
          <span className="dot" id="dot1"></span>
          <span className="dot" id="dot2"></span>
          <span className="dot" id="dot3"></span>
        </div>
        <div className="btns">
          <div className="custom-select">
            <button className="btn">
              <select>
                <option value="0">Выбрать размер</option>
                <option value="1">XS</option>
                <option value="2">S</option>
                <option value="3">M</option>
                <option value="4">L</option>
              </select>
            </button>
          </div>
          <button id="btn2">Добавить в корзину</button>
          <FavoriteBorderIcon
            onClick={handleClick}
            sx={{
              position: "absolute",
              top: "632px",
              left: "1680px",
              marginRight: "20px",
              height: "36px",
              width: "36px",
              color: isActive ? 'black': 'red'
            }}
          />
        </div>
        <div>
          <ul className="content-ul">
            <li>
              <a href="#">ОПИСАНИЕ</a>
            </li>
            <li>
              <a href="#">ПОДРОБНЕЕ</a>
            </li>
            <li>
              <a href="#">УХОД</a>
            </li>
          </ul>
          <div className="des">
            <p>
              Удлиненный кардиган свободного кроя. Выполнен из мохера, который
              придает кардигану легкость и воздушность, а шерсть в составе
              делает изделие теплым и актуальным в любой сезон.
            </p>
            <p>
              Благодаря искуственным волокнам в составе кардиган становится
              более комфортным в носке и хорошо держит свою первоначальную форму
              долгое время. Универсальные оттенки и необычный дизайн добавят
              изюминку в ваш образ.
            </p>
            <p>
              Его можно стилизовать с платьями из струящихся материалов, узкими
              джинсами или широкими брюками нейтральных оттенков. Сделан вручную
              в Санкт-Петербурге.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Content;
