<template>
    <h1>Single Blogg</h1>

    <input type="text" v-model="title" placeholder="Title"/> <br/>
    <input type="text" v-model="content" placeholder="Content" /> <br/>
    <input type="date" v-model="date" /><br/>
    <button @click="updateBlogg">Update</button> <br>
    <button @click="deleteBlogg">Delete Blogg</button>

</template>

<script>
export default {
    data(){
        return{
            title: "",
            content: "",
            date: ""
            
        }
    },
    created(){
       const id = this.$route.params.id
       fetch('http://localhost:5192/api/Blogg/'+ id)
       .then(data => data.json())
       .then(blogg => {
        this.title = blogg.title
        this.content = blogg.content
        this.date = blogg.date

       })
    },
    methods: {
        updateBlogg(){
            const blogg = {
                title: this.title,
                content: this.content,
                date: this.date
            }

            const id = this.$route.params.id
            fetch('http://localhost:5192/api/Blogg/'+ id, {
                method:'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(blogg)
            })
            .then(() =>{
                this.$router.push('/blogg')

            })
            
        },
        
        deleteBlogg(){
            const id = this.$route.params.id

            fetch('http://localhost:5192/api/Blogg/' + id, {
                method:'DELETE'
            })
            .then(()=>{
                this.$router.push('/blogg')
            })
        }


    }
}
</script>