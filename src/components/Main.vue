<script>

export default {
    data() {
        return {
           user: localStorage.getItem("name"),
           surname: localStorage.getItem("surname"),
           age: localStorage.getItem("age"),
           email: localStorage.getItem("email")
        }
    },
    methods: {
    pageNot() {
    
   } ,
   back() {
    localStorage.setItem("i", 1)
   }
    },
    beforeMount() {
        if(this.name != localStorage.getItem('name') && this.surname != localStorage.getItem("surname") && this.age != localStorage.getItem("age") && this.email != localStorage.getItem("email") && this.password != localStorage.getItem("password")) {
            localStorage.setItem("i", '1')
        }
    }
}
</script>
<template>
    <header>
        <h2>Добро пожаловть на сайт</h2>
    </header>
<h1>Здесь можете выбрать проект на который хотите перейти!</h1> <br>
<ul>
    <li>Гонка - <a href="https://javascriptman-for.github.io/CarGames/ ">https://javascriptman-for.github.io/CarGames/ </a></li>
    <li>Даня и пылессос - <a href="#">Пока что разрабатывается</a></li>
</ul>
<a @click="back ()">Назад</a>


 
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
 h2 {
    font-size: 30px;
    color: white;
    font-family: Verdana, sans-serif;
    margin-top: 150px;
    margin-left: 0px;
 }
 header {
    background-image: url("../assets/header.jpg");
    width: 100%;
    background-size: cover;
    height: 400px;
    display: flex;
    justify-content: center;
    margin-left: 0px;
 }
 h1 {
    color: red;
 }
 li {
    color: aqua;
    font-size: 20px;
 }
 a {
    color: blue;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
 }
</style>