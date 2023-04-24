let initial={
    isAuth:false,
    token:{
        toke:"",
        time:""
    },
    getPlaylists:[],
    getDetailsPlaylist:{},
    getTrack:[],
    getAlbumTrack:[],
    searchResults:[],
    CategoryPlaylists:[]
}

let reducer=(state=initial,action)=>{
    switch(action.type){
        case 'playlist':
            return {...state,getPlaylists: action.payload}
        case 'detailsplaylist':
            return {...state,getDetailsPlaylist: action.payload}
        case 'token':
            return {...state,token: {toke: action.payload,time:new Date().getTime()}}
        case 'auth':
            return {...state,isAuth:action.payload}
        case 'authfalse':
            return {...state,isAuth:action.payload}
        case 'oldToken':
             return {...state,token :{toke:action.payload.token, time:action.payload.timestamp}}

        case 'track':
            return {...state,track: action.payload}
        case 'album':
            return {...state,album: action.payload}
        case 'search':
            return {...state,searchResults: action.payload}
        case 'categoryPlay':
            return {...state,CategoryPlaylists: action.payload}
        default: return state;                        
    }
    return state;
}
export default reducer