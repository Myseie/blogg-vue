<template>
    <h2>BloggsList</h2>
    <p v-for="blogg in bloggs" :key="blogg.id">
    <router-link :to=" '/bloggs/'+ blogg.id ">{{ blogg.title }}</router-link></p>
</template>

<script>
export default{
    name:'bloggsList',
    data(){
        return {
            bloggs: []
        }
    },

    created(){
        fetch('http://localhost:5192/api/Blogg')
            .then(data => data.json())
            .then(bloggs => {
            this.bloggs = bloggs
        }) 
    }
}
</script>