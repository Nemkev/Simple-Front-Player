import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";
import ReactHlsPlayer from "react-hls-player";

import { Overlap, ListItem, SearchList } from "./songs.style";

const simpleData = [
  { name: "Huita", author: "Dolboeb" },
  { name: "Zalupa", author: "Idiot" },
  { name: "Daun", author: "Pripizdok" },
  { name: "Java", author: "Developer" },
];

// const songs = await axios.get('http://localhost:8080/api/tracks').then(resp => resp.data.data);

export const Songs = () => {

  const [
    {
      listOfsongs
    },
    setState,
  ] = useReducer(
    (s, a) => ({
      ...s,
      ...a,
    }),
    {
      listOfsongs: [],
    }
  );

  useEffect(()=>{
    const getSongs = async() => {
      const songs = await axios.get('http://localhost:8080/api/tracks');
      console.log("songs",songs.data.data)
      setState({listOfsongs:songs.data.data})
    };
    getSongs()
  },[])
  return (
    <Overlap>
      <SearchList>
        {listOfsongs && listOfsongs.map((item:any)=>(
          <>
          <p>{item.trackTitle}</p>
          <p>{item.artistName}</p>
          </>
        ))}
      </SearchList>
    </Overlap>
  );
};
