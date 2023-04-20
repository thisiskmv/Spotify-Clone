let initial={
    token:{
        toke:"",
        time:""
    },
    getPlaylists:[],
    getTrack:[],
    getAlbumTrack:[],
    SearchResults:[],
    CategoryPlaylists:[]
}

let reducer=(state=initial,action)=>{
    switch(action.type){
        case 'playlist':
            return {...state,playlists: action.payload}
        case 'token':
            return {...state,token: {toke: action.payload,time:new Date().getTime()}}
        case 'track':
            return {...state,track: action.payload}
        case 'album':
            return {...state,album: action.payload}
        case 'searchResults':
            return {...state,searchResults: action.payload}
        case 'CategoryPlaylists':
            return {...state,CategoryPlaylists: action.payload}
        default: return state;                        
    }
    return state;
}
export default reducer