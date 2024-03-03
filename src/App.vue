<template>
    <div @click="pagesFind" v-show="this.i == 1" class="comp">
        <Form></Form>
    </div>
    <div v-show="this.i == 2" class="comp" >
    <Main></Main>
</div>
</template>
<script>

import "./assets/style.css"
import Form from "./components/Form.vue";
import Main from "./components/Main.vue";
export default {
    components: {
        Form, Main
    },
    data() {
        return {
            i: localStorage.getItem("i")
        }
    },
    methods: {
   page: function() {
          setInterval(()=>{
            if(localStorage.getItem("i") == '1') {
                this.i = 1
            }
            if(localStorage.getItem("i") == '2') {
                this.i = 2
            }
          },100)
        }
    },
    beforeMount() {
        this.page()
    }
}


</script>
<style scoped>
  .comp {
        width: 100%;
    }
</style>./components/Main.vue