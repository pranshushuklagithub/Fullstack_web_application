const intitialState = {
    isAuth : false,
    products : [],
    yourAd:[],
    isError : false,
    isLoading : false
}

export const loginReducer = (state=intitialState,action) =>{
    if(action.type==="LOGIN_SUCCESS") {
        return {...state,isAuth:true}
    }else if(action.type==="ERROR") {
        return {...state,isError:true}
    }else if(action.type==="LOGOUT"){
        return {...state,isAuth:false}
    }
    return state;
}

export const productReducer = (state=intitialState,action)=>{
    if(action.type==="PRODUCT_SUCCESS") {
        return {...state,products:action.payload}
    }else if(action.type==="ERROR"){
        return {...state,isError:true}
    }else if(action.type==="LOADING"){
        return {...state,isLoading:action.payload}
    }else if(action.type==="AD_SUCCESS"){
        return {...state,yourAd:action.payload}
    }
    return state;
}