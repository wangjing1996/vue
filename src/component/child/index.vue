<template>
   <div>
        <ul v-for='i in data'>
            <li>{{i.name}}</li>
            111
        </ul>
   </div>
</template>
<script>
  export default {
      data(){
          return{
              data:null
          }
      },
   beforeCreate(){
       this.axios.get('/api/list').then((data)=>{
           this.data=data.data.list
           console.log(this.data)
       })
   },
   beforeRouteEnter(to,from,next){
       next(vm=>{
           console.log(vm)
       })
   }
  }

</script>
<style>


</style>