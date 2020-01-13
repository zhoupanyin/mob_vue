<template>
  <div>
    <P>{{kk}}</p>
  </div>
</template>
<script>
import Bus from '../api/Bus.js'
export default {
    data(){
      return{
        kk:'jieshouzhi'
      }
    },
    created(){
      Bus.$on('msg',e => {
        console.log(e);
        this.kk = e;
        console.log(this.kk);
        
      })  
    },
    methods: {
      
    },
}
</script>
<style lang="less" scoped>

</style>


