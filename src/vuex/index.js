import Vue from 'vue'
//安装配置vuex(npm install vuex --save)
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './modules/user/index.js'
import userInfo from './modules/userInfo/index.js'

export default new Vuex.Store({
    state:{
        msgA:'',
        msgB:'',
        count:0,
    },
    mutations:{
        receiveMsgA(state,playload){//分类组件数据存于state
            state.msgA = playload.msgA;
        },
        receiveMsgB(state,playload){
            state.msgB = playload.msgB;
        },
        changeData(state,num){//修改数据count
            state.count += Number(num)
        }
    },
    getters:{
        getData(state){//获取state数据count
            return state.count
        }
    },
    actions:{
        changestatus(context,num1){//触发mutations中方法
            context.commit('changeData',num1)
        }
    },
    modules:{//引入模块
        user,
        userInfo
    }
})

 