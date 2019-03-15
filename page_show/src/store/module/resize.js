const state={
    height:'',
    width:''
}

const getters={
    renderWidth(state){
        return state.width;
    },
    renderHeight(state){
        return state.height;
    }
}

const mutations={
    changeWidth(state,items){
        state.width=items;
    },
    changeHeight(state,items){
        state.height=items
    }
}

const actions={   //将相应的数据形参传入到mutations中的item中
    transmissionWidth(context,item){
        context.commit('changeWidth',item)
    },
    transmissionHeight(context,item){
        context.commit('changeHeight',item)
    }
    
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}