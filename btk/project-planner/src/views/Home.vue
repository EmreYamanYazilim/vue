<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current='current'></FilterNav>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject 
        :project="project" 
        @delete="silinenVeri" 
        @complete="tamamlananVeri"
        ></SingleProject>
      </div>
    </div>
  </div>
</template>


<script>
import SingleProject from '@/components/SingleProject.vue'
import FilterNav from '@/components/FilterNav.vue'; 

export default {
  components: {
    SingleProject,
    FilterNav
  },
  data() {  
    return {
      projects: [],
      current:'all'
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
      this.projects = this.projects.filter(project => project.id !== id);  // arrow fun 
      //uzun yontem
      // this.projects = this.projects.filter(function (project) {  // uzun yöntem
      //   return project.id !== id
      // })
    },
    tamamlananVeri(id){
      let p = this.projects.find(projectx=>projectx.id ===id);
      p.complete = !p.complete
    }
  },
}
</script>

<style>
.router-link-active {
  background-color: hsla(160, 100%, 37%, 0.2);
  border-radius: 5px;
  

}
</style>