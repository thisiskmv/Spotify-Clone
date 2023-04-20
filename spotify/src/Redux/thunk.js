import {getToken} from "./action"
import { Playlists } from "./action";
import { Track } from "./action";
import { getAlbum } from "./action";
import { CategoryPlaylists } from "./action";
import { getSearchResults } from "./action";
let client_id= 'd49a92ae8bd040d18dc326af31826688';
let TOKEN='BQBg3AoKcvuOBRQBQcEEks_0qRk2PiFcOevY4YPmxMfmNAAmel3LS62nZc-o6pmi2PT34f3fkurJrjO136GjzN9qjlWlgdcqfd7NlPwkmb9nd-ux_Ycm'
let client_secret= 'b2769937a71c40f099f495b6e0f978a5';





 function thunkActionCreator(method) {

    return (dispatch)=>{

      // token..................................................
        const getData = async (dispatch) => {
            let data = await fetch(`https://accounts.spotify.com/api/token`, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(client_id + ":" + client_secret),
              },
              body: "grant_type=client_credentials",
            });
          
            let token = await data.json();
            dispatch(getToken(token.access_token))
            // localStorage.setItem("spotify_token",JSON.stringify(token.access_token));
            // console.log("====>", token);
          };
        
          // async function refreshToken() {
          //   let newToken = await getData();
          //   console.log(newToken)
            
          // }


          // playlists////////////////////////////////////
          async function getPlaylists(category, limit, TOKEN) {
            let response = await fetch(
              `https://api.spotify.com/v1/browse/categories/${category}/playlists?country=IN&offset=5&limit=${limit}`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await response.json();
            dispatch(Playlists(data))
            // console.log(data);
            // return data.playlists.items; 
          }
        //  track................................................
          async function getTrack(dispatch,playlistID, TOKEN) {
            let res = await fetch(
              `https://api.spotify.com/v1/playlists/${playlistID}/tracks?offset=0&limit=20`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await res.json();
            dispatch(Track(data))
            return data;
          }
          

          // albumtrack.........................................
          async function getAlbumTrack(dispatch,albumID, TOKEN) {
            let res = await fetch(
              `https://api.spotify.com/v1/albums/${albumID}/tracks?offset=0&limit=20`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await res.json();
            dispatch(getAlbum(data))
            return data;
          }
           

          // search data.........................................
          async function getAllSearchResults(query, type, limit, TOKEN) {
            let response = await fetch(
              `https://api.spotify.com/v1/search?type=${type}&q=${query}?offset=5&limit=${limit}`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await response.json();
            dispatch(getSearchResults(data))
            // console.log(data)
            // return data;
          }
           

          // category playlists.......................................
          async function getCategoryPlaylists(dispatch,category, offset, limit, TOKEN) {
            let response = await fetch(
              `https://api.spotify.com/v1/browse/categories/${category}/playlists?country=IN&offset=${offset}&limit=${limit}`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await response.json();
            dispatch(CategoryPlaylists(data))
            // console.log(data);
            return data.playlists.items;
          }




          if(method==="token"){
            getData(dispatch) 
          }
          if(method==="playlist"){
            getPlaylists('party','11',TOKEN)
            getPlaylists('rock','12',TOKEN)
            getPlaylists(TOKEN);
          }
          if(method==='searchResults'){
            getAllSearchResults("punjabi","track,artist",25,TOKEN)
          }
    }
    
  }
  export default thunkActionCreator