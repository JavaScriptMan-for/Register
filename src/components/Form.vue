<template>
    <!--Первая страница-->
    <form  action="/index.html">
    <input @load="Focus()" @input="userData($event.target.value)" id="first" type="text" placeholder="Имя"/>   <br>
    <input  @input="surnameData($event.target.value)" type="text" placeholder="Фамилия"/> <br>
    <input  @input="ageData($event.target.value)" type="number" placeholder="Возраст"/> <br>
    <input @input="emailData($event.target.value)" type="email" placeholder="E-mail"/> <br>
    <input @input="passData($event.target.value)" type="password" placeholder="Пароль"/> <br>
    <button 
    v-if="this.user != '' || 
    this.surname != '' ||
     this.age != '' ||
      this.email != '' ||
      this.password != ''
      "
       @click="submit()"  
       type="button">Отправить
    </button> <br>
        <button  type="button" id="close"
         v-show="this.user == '' 
         && this.surname == '' 
         && this.age == ''
          && this.email == ''
          && this.password == ''
          ">Отправить</button>
     
     
     
        <dialog id="xp">
    <p v-show="this.j == 1" class="error">Ошибка! Вы не ввели в форму какие-то данные.</p> <br v-if="this.j == 1">
    <span  v-show="this.j == 1" class="debug">Введите в форму всё, что проситься!</span> <br v-if="this.j == 1">
    <p  v-show="this.j == 2" class="seccsess">Вы успешно зарегестрировались</p>
    <a @click="Close()" href="#">Закрыть окно</a>
</dialog>
</form>

<!--Вторая страница-->





</template>
<script>
import App2 from "./Main.vue";

export default  {
    props: {
        a: "AAAA"
    },
    components: { App2 },
    data() {
        return {
            user: "",
            surname: "",
            age: ``,
            email: "",
            password: "",
            i: 1,
            j: 1

        }
        
    },
    methods: {
        userData(val) {
            this.user = val;
        },
        surnameData(val_2) {
            this.surname = val_2
        },
        ageData(val_3) {
            this.age = val_3
        },
        emailData(val_4) {
            this.email = val_4
        },
        passData(val_5) {
            this.password = val_5
        },
        submit() {
            if(this.user == '' || this.surname == '' || this.age == "" || this.email == "" || this.password == "") {
                this.i = 1
                this.j = 1;
                document.querySelector("#xp").showModal();
                setTimeout(()=>{
                    document.querySelector("#xp").close();
                },2000)
            } else {
                this.i = 2;
                this.j = 2;
                document.querySelector("#xp").showModal()
                setTimeout(()=>{
                    document.querySelector("#xp").close()
                    setTimeout(()=>{
              },1000)
                },2000)
                localStorage.setItem("i", this.i)
                localStorage.setItem("name", this.user);
                localStorage.setItem("surname", this.surname);
                localStorage.setItem("age", this.age);
                localStorage.setItem("email", this.email);
                localStorage.setItem("password", this.password)
          
            }
          
        },
        Focus() {
        document.querySelector('#first').focus() 
            },
        Close() {
            document.querySelector("#xp").close();
            document.querySelector("#sec").close()
        },

    }

     }
     
</script>



<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

input {
    outline: none;
    margin-bottom: 30px;
    color: white;
    border-bottom: 3px solid greenyellow;
    background-color: black;
    width: 400px;
    height: 60px;
    font-size: 30px;
   
    }
    input::placeholder {
        color: rgb(192, 190, 190);
        font-size: 30px;
        height: 60px;
    }
    button {
        color: greenyellow;
        width: 200px;
        height: 60px;
        border: black 3px solid;
        border-radius: 8px;
        color: white;
        background-color: blue;
        transition: 200ms;
        font-size: 20px;
        text-align: center;
        font-family: Verdana, sans-serif;
    }
    #close {
        background-color: rgb(93, 93, 126);
        cursor: not-allowed;
    }
    
    @media (hover: hover) {
        button:hover {
            background-color: rgb(58, 58, 190);
            transform: scale(1.04);
        }
        #close:hover {
            transform: scale(1.02);
        }
    }
    #first {
        margin-top: 10vh;
    }
    .error {
        color: red;
        font-size: 20px;
        font-family: Verdana, sans-serif;
    }
    .debug {
        color: rgb(255, 255, 255);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
    }
    .text_error {
        color: white;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
    }
    dialog {    
        margin-top: 550px;
       margin-left: 35%;
       background-color: rgb(0, 0, 0);
    }
    a {
        text-decoration: none;
        color: rgb(0, 140, 255);
        font-size: 20px;
    }
    #sec {
        margin-top: 10px !important;
    }
    .seccsess {
        font-size: 20px;
        color: greenyellow;
    }
    form  {
        display: flex;
        justify-content: center;
        align-items: center;
       flex-direction: column;
    }
</style>
./Main.vue