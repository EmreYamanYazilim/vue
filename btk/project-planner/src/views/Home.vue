<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id" >
        <SingleProject :project="project" @delete="silinenVeri"></SingleProject>
      </div>
    </div>
  </div>
</template>


<script>
import SingleProject from '@/components/SingleProject.vue'

export default {
  components: {
    SingleProject
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message));
  },
  methods: {
    silinenVeri(id) {
        this.projects = this.projects.filter(project =>project.id !== id);  // arrow fun 
      
        //uzun yontem
      // this.projects = this.projects.filter(function (project) {  // uzun yöntem
      //   return project.id !== id
      // })
    }
  },
}
</script>

<style></style>