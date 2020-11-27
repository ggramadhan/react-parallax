import React, { useState, useEffect } from "react";
import "./App.scss";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 
  const renderContent = () => (
    <>
      <div className="Parallax__content__heading">
        <h1 className="Parallax__content__heading__text">Gilang Ramadhan</h1>
        <h2 className="Parallax__content__heading__caption">
         Everyone can write the codes
        </h2>
      </div>
      <div className="Parallax__content__cta">
        <p>
          <b>Step by step for use this codes</b>
        </p>
        <p>
          <b>1. Clone this project</b> 
        </p>
        <p>
          <b>2. NPM Install or Yarn</b><br/>  for install depedencies project 
        </p>
        <p>
          <b>3. NPM Start or Yarn Start</b><br/> for running development enviroment!
        </p>
        <p>
          <b>4. Happy Hacking</b>
        </p>
      </div>
    </>
  );

  return (
    <>
    <section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className="Parallax__background-laptop"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="Parallax__content">{renderContent()}</div>
      </section>
      </>
  );
}

export default App