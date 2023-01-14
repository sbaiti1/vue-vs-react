
<script setup>
import { onMounted, reactive, ref, watch } from 'vue'


var state = reactive({
    counter :0,
})

var data = [];

const fetchData = async ()=>{
    console.log("test")
    var response = await fetch("https://jsonplaceholder.typicode.com/users")
    // data = await response.Response;
    console.log(response)
}


const add = ()=>{
    state.counter++
}
const style = {
    color : 'red'
}

onMounted(()=>{
    fetchData()
})

</script>


<template>
    <div >
        <h1 :style="style">{{ state.counter }}</h1>
        <button @click="add">Add One</button>
        
        <input type="number" name=""  id="" v-model="state.counter" >

        <p class="red" v-if="state.counter==10">
            this is counter == 10 
        </p>
        <div class="elements">
            <ul>
                <li v-for="item in state.data" :key="item.name">{{item.name + item.email }}</li>
            </ul>
        </div>
    </div>
    
</template>

<style scoped >
    .red{
        color: red;
        font-size: 3rem;
    }
</style>