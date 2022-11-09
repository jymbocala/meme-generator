import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomMemeImage =
    memesArray[Math.floor(Math.random() * memesArray.length)].url;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        url: randomMemeImage
      };
    });
  }

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

      <img src={meme.url} alt="render of a meme" className="meme--image" />
    </main>
  );
}
