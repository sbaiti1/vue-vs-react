
<script setup>
import { onMounted, reactive, ref, watch } from 'vue'

var state = reactive({
    data:[]
})


const  fetchData = async ()=>{
    console.log("test")
    var response = await fetch("https://jsonplaceholder.typicode.com/users")
    state.data = await response.json();
    console.log(state.data)
}

await fetchData();

</script>
<template>
    <div>
        <ul>
            <li v-for="item in state.data" :key="item.name">{{item.name + item.email }}</li>
        </ul>
    </div>
</template>


<style scoped>
:root{
    --primary-color :blueviolet
}
    ul{
        margin: 2em;
        display: grid;
        list-style: none;
        place-content: center ;
        

    }
    ul>li{
        cursor: pointer;
    }
    ul>li:nth-child(2n){
        color: var(--primary-color,blueviolet);
        padding: 1em;
        transition: all .3s ease;
    }
    ul>li:hover{
        transform: rotate(3deg);
        
    }
</style>