<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TesteView from './TesteView.vue';
import { ref } from 'vue';

const x = ref(true)
console.log(x);
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="x = !x">
      <TesteView  :class="[
        x ? 'teste' : 'teste2',
       'teste3'
       ]"  />
    </button>
   
  </main>
</template>



<style>
.teste {
  display: flex;
  justify-content: center;
  font-size: 50px;
  background-color: aqua;  
  border-radius: 25px;
}
.teste2 {
  display: flex;
  justify-content: center;
  font-size: 50px;
  background-color: rgb(255, 123, 0);  
  border-radius: 25px;
}

.teste3 {
  
  font-size: 150px;
}
</style>