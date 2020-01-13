<template>
    <div>
        <button @click="send()">发送</button>
    </div>
</template>
<script>
import Bus from '../api/Bus.js'
export default {
    data(){
        return{
            message:"chuanzhi"
        }
    },
    methods:{
        send(){
            Bus.$emit('msg', this.message)
        }
    }
}
</script>
<style lang="less" scoped>

</style>