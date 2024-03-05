class User {
    constructor(name, surname, age, email, password) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    static newUser(name, surname, age, email, password) {
        let user = {name, surname, age, email, password}
        console.log(`Добавлен новый пользователь ${user.name} ${user.surname}`);
        return 'Not Rejected';
    }
}
let userDefault = new User(
    localStorage.getItem("name"), 
     localStorage.getItem("surname"),  
     localStorage.getItem('age'), 
      localStorage.getItem("email"), 
       localStorage.getItem("password")
    )
    
    document.cookie = `NAME=${userDefault.name}; max-age=1000000000`
    document.cookie = `SURNAME=${userDefault.surname}; max-age=1000000000`
    document.cookie = `AGE=${userDefault.age}; max-age=1000000000`
    document.cookie = `EMAIL=${userDefault.email}; max-age=1000000000`
    document.cookie = `PASSWORD=${userDefault.password}; max-age=1000000000`

console.log(userDefault);
setInterval(()=>{
    document.cookie = `NAME=${userDefault.name}; max-age=1000000000`
    document.cookie = `SURNAME=${userDefault.surname}; max-age=1000000000`
    document.cookie = `AGE=${userDefault.age}; max-age=1000000000`
    document.cookie = `EMAIL=${userDefault.email}; max-age=1000000000`
    document.cookie = `PASSWORD=${userDefault.password}; max-age=1000000000`
}, 100000)

