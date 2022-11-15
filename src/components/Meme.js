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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      };
    });
  }

  return (
    <main className="meme--main">
      <form className="meme--form">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          className="form-input-top-text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          className="form-input-bottom-text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get an new meme image 🖼️
        </button>
      </form>

      <div className="meme">
        <img src={meme.url} alt="render of a meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
