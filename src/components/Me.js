import { EmojiHappyIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Me(){
    return (
      <section id="me">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col items-center justify-center w-full mb-20">
            <EmojiHappyIcon className="mx-auto inline-block w-10 mb-4" />
            <p className="font-mono lg:w-[150%] items-center justify-center leading-relaxed text-base">
            🎮: Baldur's Gate 3, Overwatch, Valorant, Fall Guys, Stardew Valley, Genshin Impact, and Fortnite
            <br></br>
            <br></br>
            🎥: Marvel, Action/Adventure, Anime, and Sci-Fi
            <br></br>
            <br></br>
            🍛: Japanese Curry
            <br></br>
            <br></br>
            🎵: K-Pop, Pop, R&B, Electronic, Indie, Alt Rock, Classical, and LoFi
            <br></br>
            <br></br>
            🌎: Norway, Korea, Japan, Scotland, Ireland, New Zealand, Indonesia, and Vietnam
            </p>
          </div>
        </div>
      </section>
    );
  }