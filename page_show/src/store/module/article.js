const state={
     index:'',
     title:''
}

const getters={
    renderIndex(state){
        return state.index;
    },
    renderTitle(state){
        return state.title;
    }
}

const mutations={
    changeIndex(state,items){
        state.index=items;
    },
    changeTitle(state,items){
        state.title=items
    }
}

const actions={   //将相应的数据形参传入到mutations中的item中
    transmissionIndex(context,item){
        context.commit('changeIndex',item)
    },
    transmissionTitle(context,item){
        context.commit('changeTitle',item)
    }
    
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}