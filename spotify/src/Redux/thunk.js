import myAction from "./action";
let client_id= 'd49a92ae8bd040d18dc326af31826688';
let TOKEN='BQD5-md3nCNLYkJxQqnjwDSJ0vAKBrKu-rooefridNPhZGOSidDfy1EAPGG2QnqYRql3Ost5mt7-6w4m6_BYbVHALBvjb6MQrlgN6JnBsmgKV3DKsho_'
let client_secret= 'b2769937a71c40f099f495b6e0f978a5';
 function thunkActionCreator(method) {
    return (dispatch)=>{
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
            dispatch(myAction(token))
            console.log("====>", token);
          };
        
          async function getPlaylists( TOKEN) {
            let response = await fetch(
              `https://api.spotify.com/v1/browse/categories/sleep/playlists?country=IN&offset=5&limit=30`,
              {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            let data = await response.json();
            dispatch(myAction(data.playlists.items))
            // console.log(data);
            // return data.playlists.items; 
          }

          async function getTrack(playlistID, TOKEN) {
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
            return data;
          }
          
          async function getAlbumTrack(albumID, TOKEN) {
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
            return data;
          }
          
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
            return data;
          }
          
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
            // console.log(data);
            return data.playlists.items;
          }




          if(method==="token"){
            // getData(dispatch)
            getPlaylists(TOKEN)
          }
    }
    
  }
  export default thunkActionCreator