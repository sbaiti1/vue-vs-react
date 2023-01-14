
<script setup>
import { onMounted, reactive, ref, watch } from 'vue'

import ListUser from '../components/ListUser.vue';
var state = reactive({
    counter :0,
})



const add = ()=>{
    state.counter++
}
const style = {
    color : 'red'
}


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
            <Suspense>
                <ListUser/>
                <template #fallback>
                    <p>Loading ... </p>
                </template>
            </Suspense>
        </div>
    </div>
    
</template>

<style scoped >
    .red{
        color: red;
        font-size: 3rem;
    }
</style>