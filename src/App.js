import React, { useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import data from './components/data/Data';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [item, setItem] = useState(data);
  const [value, setValue] = useState("");
  console.log(item, 'data')
  console.log(value);

  const handleChange = (e) => {
    let result = e.target.value;
    if (result.length < 1 || result === ' ') {
      alert('pls enter text')
    } else {
        setValue(result.trim());
    }
    };
   
  return (
    <div className="App">
      <Navbar
        handleChange={handleChange}
      />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/Коллекции"
          element={
            <>
              <h2 id="d-text">Добавьте к этому образу</h2>
              <div className="data">
                {item
                  .filter((el) => el.des.toLowerCase().includes(value))
                  .map((el) => {
                    return (
                      <>
                        <div style={{ marginRight: "50px" }} key={el.id}>
                          <img src={el.image} alt="#" />
                          <p style={{ fontSize: "30px" }}>{el.des}</p>
                          <h3 style={{ fontSize: "35px" }}>{el.name}</h3>
                          <h3
                            style={{
                              fontSize: "30px",
                            }}
                          >
                            {el.price}
                          </h3>
                        </div>
                      </>
                    );
                  })}
              </div>
            </>
          }
        />
      </Routes>

      <>
        <h2 id="d-text">Добавьте к этому образу</h2>
        <div className="data">
          {item
            .filter((el) => el.des.toLowerCase().includes(value))
            .map((el) => {
              return (
                <>
                  <div style={{ marginRight: "50px" }} key={el.id}>
                    <img src={el.image} alt="#" />
                    <p style={{ fontSize: "30px" }}>{el.des}</p>
                    <h3 style={{ fontSize: "35px" }}>{el.name}</h3>
                    <h3
                      style={{
                        fontSize: "30px",
                      }}
                    >
                      {el.price}
                    </h3>
                  </div>
                </>
              );
            })}
        </div>
      </>
    </div>
  );
}

export default App;

