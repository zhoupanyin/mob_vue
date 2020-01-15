<template>
    <div>
        B组件
        <button @click = "sendData">点我发送数据</button>
        <p>{{messageA}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            messageB:'组件B数据'
        }
    },
    methods:{
        sendData(){
            this.$store.commit('receiveMsgB',{msgB:this.messageB})
      }
    },
    computed: {
        messageA(){//从state中获取A组件数据
            return this.$store.state.msgA;
        }
    },
}
</script>
<style lang="less" scoped>

</style>