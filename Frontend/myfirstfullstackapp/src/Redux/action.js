
import axios from "axios"



export const loginAction = ({email,password})=>{
    

    // console.log(email,password)
    return (dispatch)=>{
        // dispatch({type:"LOADING",payload:true})
        // console.log(email,password)
        axios.post("https://apricot-binturong-yoke.cyclic.app/user/login",{email,password})
        .then((res)=>{
        // console.log(res.data.message);
        if(res.data.response===undefined) {
            alert(res.data.message)
        }else {
            dispatch({type:"LOGIN_SUCCESS"})
            alert(res.data.response)
            localStorage.setItem("login-token",res.data.token)
            localStorage.setItem("login-name",res.data.name)
            localStorage.setItem("login-userId",res.data.userId)
        }
        }).catch((error)=>{
        console.log(error)
        dispatch({type:"ERROR"})
        })
        // dispatch({type:"LOADING",payload:false})
    }
}

export const logoutAction=()=>{
    return (dispatch)=>{
        dispatch({type:"LOGOUT"})
        localStorage.removeItem("login-token")
        localStorage.removeItem("login-name")
        localStorage.removeItem("login-userId")
    }
}

export const signupAction = ({name,email,password,confirmPassword})=>{
    
    // console.log(name,email,password,confirmPassword)

    axios.post("https://apricot-binturong-yoke.cyclic.app/user/signup",{name,email,password,confirmPassword})
    .then((res)=>{
        console.log(res);
        alert(res.data)
    }).catch((error)=>{
        console.log(error)
    })
}

export const getProductAction = ({type,sort})=>{
    return (dispatch)=>{
        dispatch({type:"LOADING",payload:true})
        axios.get("https://apricot-binturong-yoke.cyclic.app/product")
        .then((res)=>{
            // console.log(res.data);
            dispatch({type:"PRODUCT_SUCCESS",payload:res.data})
        }).catch((error)=>{
            console.log(error)
            dispatch({type:"ERROR"})
        })
        dispatch({type:"LOADING",payload:false})
    }
}


export const postProductAction = ({title,image,description,price,category})=>{
    
    const userId = localStorage.getItem("login-userId")
    const name = localStorage.getItem("login-name")

    return(dispatch)=>{
        console.log({name,title,image,description,price,category,userId})
        
        axios.post(`https://apricot-binturong-yoke.cyclic.app/product`,{name,title,image,description,price,category,userId})
        
        .then((res)=>{
            // console.log(res);
            alert(res.data)
            dispatch({type:"LOADING",payload:true})
            axios.get("https://apricot-binturong-yoke.cyclic.app/product")
            .then((res)=>{
                // console.log(res.data);
                dispatch({type:"PRODUCT_SUCCESS",payload:res.data})
            }).catch((error)=>{
                console.log(error)
                dispatch({type:"ERROR"})
            })
        dispatch({type:"LOADING",payload:false})
            
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const getYourAdAction = ()=>{
    const userId = localStorage.getItem("login-userId")
    return (dispatch)=>{
        // console.log(userId)
        dispatch({type:"LOADING",payload:true})
        axios.get(`https://apricot-binturong-yoke.cyclic.app/product/${userId}`)
        .then((res)=>{
            // console.log(res.data);
            dispatch({type:"AD_SUCCESS",payload:res.data})
        }).catch((error)=>{
            console.log(error)
            dispatch({type:"ERROR"})
        })
        dispatch({type:"LOADING",payload:false})
    }
}

export const updateYourAdAction = ({title,image,description,price,category},id)=>{
    
    const userId = localStorage.getItem("login-userId")
    const name = localStorage.getItem("login-name")

    return(dispatch)=>{
        // console.log(id,{name,title,image,description,price,category,userId})
        
        axios.put(`https://apricot-binturong-yoke.cyclic.app/product/${id}`,{name,title,image,description,price,category,userId})
        
        .then((res)=>{
            // console.log(res);
            alert(res.data)
            dispatch({type:"LOADING",payload:true})
            axios.get("https://apricot-binturong-yoke.cyclic.app/product")
            .then((res)=>{
                console.log(res.data);
                dispatch({type:"PRODUCT_SUCCESS",payload:res.data})
            }).catch((error)=>{
                console.log(error)
                dispatch({type:"ERROR"})
            })
        dispatch({type:"LOADING",payload:false})
            
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const deleteYourAdAction = (id)=>{
    
    

    return(dispatch)=>{
        // console.log(id)
        
        axios.delete(`https://apricot-binturong-yoke.cyclic.app/product/${id}`)
        .then((res)=>{
            // console.log(res);
            alert(res.data)
            dispatch({type:"LOADING",payload:true})
            axios.get("https://apricot-binturong-yoke.cyclic.app/product")
            .then((res)=>{
                // console.log(res.data);
                dispatch({type:"PRODUCT_SUCCESS",payload:res.data})
            }).catch((error)=>{
                console.log(error)
                dispatch({type:"ERROR"})
            })
        dispatch({type:"LOADING",payload:false})
            
        }).catch((error)=>{
            console.log(error)
        })
    }
}




