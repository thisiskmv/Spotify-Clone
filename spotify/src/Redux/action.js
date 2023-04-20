export let getToken=(data)=>{
  return {
    type:"token",
    payload:data
  }
}


export let Playlists=(data)=>{
  return {
    type:"playlist",
    payload:data
  }
}

export let Track=(data)=>{
  return {
    type:"track",
    payload:data
  }
}


export let getAlbum=(data)=>{
  return {
    type:"album",
    payload:data
  }
}

export let getSearchResults=(data)=>{
  return {
    type:"search",
    payload:data
  }
}


export let CategoryPlaylists=(data)=>{
  return {
    type:"categoryPlay",
    payload:data
  }
}