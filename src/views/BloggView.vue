<template>
    <h1>Bloggs</h1>
    <BloggsList :key="bloggsKey"/>
    <p>
        <input type="text" placeholder="Title" v-model="title"><br>
        <input type="text" placeholder="Content" v-model="content"><br>
        <input type="Date" placeholder="Date" v-model="date"> <br>
        <button @click="saveBlogg">Save Post</button>

    </p>
</template>

<script>
import BloggsList from '@/components/BloggsList.vue';
export default{
    components:{
        BloggsList
    },

    data(){
        return{
            title: "",
            content: "",
            date: "",
            bloggsKey: 0

        }
    },
    
    methods:{
        
        saveBlogg(){
            const blogg = {
                title: this.title,
                content: this.content,
                date: this.date,

            }
            
            fetch('http://localhost:5192/api/Blogg',{
                method: 'POST',
                body: JSON.stringify(blogg),
                headers: {'Content-Type': 'application/json'}
            })
            .then(()=> {
                this.bloggsKey++
                
            })

        }
    }

}
    </script>