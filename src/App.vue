<template>
   <div class="login" v-if="this.login === false">
      <div class="form-inner">
        <input 
          type="text" 
          v-model="username" 
          placeholder="Masukkan username Anda..." />
      </div>
      <div v-if="this.username!= ''">
        <input 
          @click="this.login=true"
          type="submit" 
          value="Masuk" />
      </div>
  </div>
  <div class="chat" v-if="login === true">
    <header>
      <h3>@{{sendto}}</h3>
    </header>

    <div class="chat box">
      
    </div>

    <footer>
      <form @submit.prevent="SendMessage">
        <label for="sendto">Kirim Pesan Ke:</label>
        <input 
        type="text" 
        v-model="sendto"
        placeholder="nama...">
        <input 
          type="text" 
          v-model="pesan" 
          placeholder="Write a message..." />
        <input 
        @click="simpanData(this.username,this.sendto,this.pesan)"
          type="submit" 
          value="Send" />
      </form>
    </footer>
  </div>
</template>

<script>
import firebase from "./firebaseinit";
import * as firestore from "firebase/firestore";
const db = firestore.getFirestore(firebase);

export default {
  data () {
      return {
        username : '',
        login :false,
        sendto:'',
        pesan:''
      }
  },
  methods:{
    simpanData(nama,pesan,tujuan){
      firestore.addDoc(firestore.collection(db, "data"), {name: nama, message:pesan, sendto:tujuan});
    }
  }
}

</script>

<style lang="scss" scoped>

</style>