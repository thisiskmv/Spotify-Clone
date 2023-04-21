import {getToken} from "./action"
import { Playlists } from "./action";
import { Track } from "./action";
import { getAlbum } from "./action";
import { CategoryPlaylists } from "./action";
import { getSearchResults } from "./action";
let client_id= 'd49a92ae8bd040d18dc326af31826688';

let TOKEN='BQCwAR_NSn5g93_e5_gCafSjdfODt-747g5F6cUNazGFa3KG83CZ_9c5LYZt1DpYcm4SHUZQtNGWcOCfaf-_3zG1E6-26ol5w2XJ3edTBU_b7k0E3p2e'

// let TOKEN='BQChE0QZWhBrlSnz-N8z1aa7ci9GWMZUwmbzC-0a5LMfSThYtYUfzzL-AtMzURjAsz0ivcPg6yJJE9zTyyR5e5RL_jd9KM0H698two2XOpe8-IwKH3HP'

let client_secret= 'b2769937a71c40f099f495b6e0f978a5';





 function thunkActionCreator(method,TOKEN) {
    return (dispatch)=>{

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
            console.log(data);

            
            try {

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
              // console.log(data);
              
            } catch (error) {
              console.log(error)
            }


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