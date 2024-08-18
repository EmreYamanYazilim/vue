<template>
    <div id="project">
        <div class="actions">
            <h2 @click="showDetails = !showDetails">{{ project.title }}</h2>
            <div class="icons">
                <span class="material-icons">edit</span>
                <span @click="deleteProject" class="material-icons">delete</span>
                <span class="material-icons">check</span>
            </div>
        </div>
        <div v-if="showDetails" class="details">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showDetails: false,
            uri: 'http://localhost:3000/projects/' + this.project.id, // dinamik yapmak için burdan verdim props içinden this ile projecti yakalayarak idsini alıyorum
        };
    }, methods: {
        deleteProject() {
            //this ile returndan uri çekerek yapacağım methodu bbelirtiyorum
            fetch(this.uri, { method: "DELETE" })
            .then(() => this.$emit('delete', this.project.id));
            // emit ile delete eventi ile Home.vueye işlem yapılan id verdim
        },
    },
};
</script>

<style scoped>
#project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-left: 4px solid rgb(243, 88, 32);
}

h2 {
    cursor: pointer;
}

.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}

.material-icons:hover {
    color: #616060;
}
</style>