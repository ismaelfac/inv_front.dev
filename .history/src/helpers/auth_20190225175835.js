export function login(credentials){
    return new Promise((res, rej) => {
        console.log("entro a la promesa")
        axios.post('http://127.0.0.1:8000/api/auth/login',credentials).then((response) => {
            console.log("entro al response")
            res(response.data)
        }).catch((err) => {
            console.log("error")
            rej('El email o paswword son incorrectos')
        })
    });
}
export function getLocalUser(){
    const userStr = localStorage.getItem("user")
    if(!userStr){
        return null;
    }
    return JSON.parse(userStr)
}