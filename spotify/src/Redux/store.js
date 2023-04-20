import {legacy_createStore as myStore} from "redux"
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import reducer from "./Reducer";
let store= myStore(reducer,applyMiddleware(thunk));


store.subscribe(()=>{
    console.log(store.getState().getPlaylists);
  })
export default store;