import axios from "axios"



export const loginAction = (loginUser)=>{

}

export const signupAction = (signupUser)=>{
    
    const {name,email,password,confirmPassword} = signupUser
    console.log(name,email,password,confirmPassword)

//     fetch("http://localhost:8000/user/signup", {
//     method: "POST",
//     body: JSON.stringify({name,email,password,confirmPassword}),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
// .then(res => console.log(res));


    axios.post("http://localhost:8000/user/signup",{name,email,password,confirmPassword})
    .then((res)=>{
        console.log(res);
    }).catch((error)=>{
        console.log(error)
    })

}