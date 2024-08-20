<template>
    <nav class="filter-nav">
        <button @click="updateFilter('all')" :class="{ active: current === 'all' }">all</button>
        <button @click="updateFilter('completed')" :class="{active: current === 'completed'}">Tamamalanan</button>
        <button @click="updateFilter('ongoing')" :class="{active:current === 'ongoing'}">ongoing</button>

    </nav>
</template>

<script>

export default {
    props: ['current'],
    data() {
        return {
            
        }
    },
}
</script>

<style></style>