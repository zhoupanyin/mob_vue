<template>
  <div>
      A组件
    <button @click = "sendData">点我发送数据</button>
    <h2>{{messageB}}</h2>
  </div>
</template>
<script>
export default {
    data(){
      return{
        messageA:'组件A数据'
      }
    },
    created(){
    },
    methods: {
      sendData(){
        this.$store.commit('receiveMsgA',{msgA:this.messageA})
      }
    },
    computed:{
      messageB(){//接受B组件中数据
        return this.$store.state.msgB
      }
    }
}
</script>
<style lang="less" scoped>

</style>

