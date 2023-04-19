let initial={
    getPlaylists:[]
    
}

let reducer=(state=initial,action)=>{
    if(action.type === "data"){
        return {
            ...state,
            data:action.payload
        }
    }
    return state;
}
export default reducer