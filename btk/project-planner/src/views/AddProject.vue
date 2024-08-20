<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id:Number,
      title: "",
      details: ""
    }
  },
  methods: {
    handleSubmit() {

      let project = {
        title: this.title,
        details: this.details,
        complete: false
      }
      fetch("http://localhost:3000/projects/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
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