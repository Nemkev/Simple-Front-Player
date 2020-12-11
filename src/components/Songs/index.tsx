import React, { useReducer, useState } from "react";
import { stylePreset } from "../../helpers/modalStyle";
import Modal from "react-modal";
import ReactHlsPlayer from "react-hls-player";

import { Overlap, ListItem, SearchList } from "./songs.style";

const simpleData = [
  { name: "Huita", author: "Dolboeb" },
  { name: "Zalupa", author: "Idiot" },
  { name: "Daun", author: "Pripizdok" },
  { name: "Java", author: "Developer" },
];

export const Songs = () => {
  return (
    <Overlap>
      <SearchList>
        {simpleData.map((item: any) => (
          <ListItem>
            <p>{item.name}</p>
            <p>{item.author}</p>
            <ReactHlsPlayer
              url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
              autoplay={false}
              controls={true}
              width="100%"
              height="auto"
/>
          </ListItem>
        ))}
      </SearchList>
    </Overlap>
  );
};
