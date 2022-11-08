import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImageUrl, setMemeImageUrl] = React.useState("");

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = memesData.data.memes;
    const randomMemeImage =
      memesArray[Math.floor(Math.random() * memesArray.length)].url;
    setMemeImageUrl(randomMemeImage);
  }

  console.log(memeImageUrl);

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
        <button className="form-button" onClick={getMemeImage}>
          Get an new meme image 🖼️
        </button>
      </form>

      {memeImageUrl !== "" && <img src={memeImageUrl} alt="render of a meme" className="meme--image" />}
    </main>
  );
}
