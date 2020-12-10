import React, { useReducer, useState } from "react";
import { stylePreset } from "../../helpers/modalStyle";
import Modal from "react-modal";

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
            <p>item.name</p>
            <p>item.author</p>
            <audio controls>
              <source
                src="https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
                type="audio/mpeg"
              />
            </audio>
          </ListItem>
        ))}
      </SearchList>
    </Overlap>
  );
};
