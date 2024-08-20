<template>
  <form @submit.prevent="guncelleme">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>


<script>
export default {
  props:['id'],
  data() {
    return {
      title:"",
      details:"",
      uri: "http://localhost:3000/projects/" + this.id
    }
  },
  mounted() {
    fetch(this.uri)
    .then(res =>res.json())
    .then(data => {
      this.title = data.title;
      this.details= data.details;
    });

  },
  methods: {
    guncelleme(){
      fetch(this.uri,{
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
          title:this.title,
          details:this.details,          
        })
      })        
      .then(()=> this.$router.push("/"))
      .catch(err => console.log(err)) 
    }
  },
}
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 15px;
}

label {
  color: #1f1e1e;
  display: block;
  margin: 20px 0 10px 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #00BD7E;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #00BD7E;
  border-radius: 4px;
  box-sizing: border-box;
}

form button {
  display: block;
  margin: 20px auto 0;
  background: #00BD7E;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
}

textarea:focus-visible {
  border: 1px solid #00BD7E;
  box-sizing: border-box;


}
</style>