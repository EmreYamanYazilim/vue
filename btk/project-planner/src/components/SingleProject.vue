<template>
    <div class="project" :class="{ complete: project.complete }">
        <div class="actions">
            <h2 @click="showDetails = !showDetails">{{ project.title }}</h2>
            <div class="icons">
                <span class="material-icons">edit</span>
                <span @click="deleteProject" class="material-icons">delete</span>
                <span v-if="!project.complete" @click="togglecomplete" class="material-icons tick">check</span>
                <span v-else-if="project.complete" @click="togglecomplete" class="material-icons close">close</span>
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
            uri: 'http://localhost:3000/projects/' + this.project.id,
            // dinamik yapmak için burdan verdim props içinden this ile projecti yakalayarak idsini alıyorum
        };
    }, methods: {
        deleteProject() {
            //this ile returndan uri çekerek yapacağım methodu bbelirtiyorum
            fetch(this.uri, { method: "DELETE" })
                .then(() => this.$emit('delete', this.project.id))
                .catch(err => console.log(err));
            // emit ile delete eventi ile Home.vueye işlem yapılan id verdim
        },
        togglecomplete() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ complete: !this.project.complete })
            })
                .then(() => this.$emit("complete", this.project.id))
                .catch(err => console.log(err));
        }
    },
};
</script>

<style>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-left: 8px solid rgb(243, 88, 32);
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
.project.complete {
    border-left: 8px solid green;
}
.close{
    color: rgb(243, 88, 32);
}
.close:hover{
    color: rgb(187, 67, 24);
}
.tick{
    color: rgb(6, 196, 6);
}
.tick:hover{
    color: rgb(4, 51, 4) 
}
</style>