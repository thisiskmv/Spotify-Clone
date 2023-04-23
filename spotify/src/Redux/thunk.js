import {getToken} from "./action"
import { Playlists } from "./action";
import { Track } from "./action";
import { getAlbum } from "./action";
import { CategoryPlaylists } from "./action";
import { getSearchResults } from "./action";

let client_id= 'd49a92ae8bd040d18dc326af31826688';

let client_secret= 'b2769937a71c40f099f495b6e0f978a5';






function thunkActionCreator(method,TOKEN,oldToken,query) {

console.log(query)
    return (dispatch,getState)=>{


      // token..................................................
        const getData = async (dispatch) => {
          console.log("refresh token called")
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
            // spotify_token
            localStorage.setItem("spotify_token",JSON.stringify({token:token.access_token,timestamp:Date.now()}));
            // console.log("====>", token);
          };

          const storeOldToken  =(tokenData)=>{
              dispatch({type:"oldToken",payload:tokenData})
          }
        


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
            dispatch(Playlists(data.playlists.items))

          

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
          async function getAlbumTrack( TOKEN) {
            let res = await fetch(
              `https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=0&limit=20`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await res.json();
            dispatch(getAlbum(data))
            // return data;
          }
           

          // search data.........................................
          async function getAllSearchResults( TOKEN,query,limit) {
            let response = await fetch(
              `https://api.spotify.com/v1/search?query=${query}&type=track&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=${limit}`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await response.json();

            dispatch(getSearchResults(data.tracks.items))

          }
           

          // category playlists.......................................
          async function getCategoryPlaylists(category, offset, limit, TOKEN) {
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
            console.log(data);
            // return data.playlists.items;
          }


          async function getAllCategoryPlaylists(offset, limit, TOKEN) {
            let response = await fetch(
              `https://api.spotify.com/v1/browse/categories?country=IN&offset=${offset}&limit=${limit}`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await response.json();
            dispatch(CategoryPlaylists(data.categories.items))
            // console.log(data.categories.items);
            // return data.playlists.items;
          }




          if(method==="token"){
            getData(dispatch) 
          }
          if(method==="playlist"){
            getPlaylists('bollywood','18',TOKEN)
          }
          if(method==='searchResults'){
            getAllSearchResults(TOKEN,query,5)
            
          }
          if(method==='category'){
            // getCategoryPlaylists( "15", "30", TOKEN)
            getAllCategoryPlaylists("15", "36", TOKEN)
          }
          if(method==='oldToken'){
            storeOldToken(oldToken)
          }
          if(method==='album'){
            getAlbumTrack(TOKEN)
          }
    }
    
  }
  export default thunkActionCreator