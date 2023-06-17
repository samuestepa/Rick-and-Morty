const validation = (userData) => {
    const error = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        error.email = 'email inválido'
    } 
    if(!userData.email){
        error.email ='este campo no puede estar vacio'
    } 
    if(userData.email.length > 35){
        error.email = 'este campo no puede tener más de 35 caracteres'
    } 
    if(!/.*\d+.*./.test(userData.password)){
        error.password = 'debe contener al menos un número'
    } 
    if(userData.password.length < 6 || userData.password.length > 10){
        error.password = 'debe contener entre 6 y 10 caracteres'
    }  
    return error;
}

export default validation;

