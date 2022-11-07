import React from "react";

export default function Meme() {
  return (
    <main className="meme">
      <form className="meme--form">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          className="form-input-top-text"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          className="form-input-bottom-text"
        />
        <button className="form-button">Get an new meme image 🖼️</button>
      </form>
    </main>
  );
}
