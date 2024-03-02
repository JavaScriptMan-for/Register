<template>
    <div @click="pagesFind" v-show="this.i == 1" class="comp">
        <Form></Form>
    </div>
    <div v-show="this.i == 2" class="comp" >
    <App2></App2>
</div>
</template>
<script>

import "./assets/style.css"
import Form from "./components/Form.vue";
import App2 from "./components/App2.vue";
export default {
    components: {
        Form, App2
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
</style>