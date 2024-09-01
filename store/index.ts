// index.vue
import InjectionKey  from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 定义你的状态类型
interface State {
  actorName: string
}

// インジェクションキーを定義します
export const key: InjectionKey<Store<State>> = Symbol()


// 创建 store
export const store = createStore<State>({
  state: {
    actorName: ''
  },
  mutations: {
    setActorName(state, name: string) {
      state.actorName = name
    }
  },
  actions: {
    updateActorName({ commit }, name: string) {
      commit('setActorName', name)
    }
  },
  getters: {
    getActorName(state): string {
      return state.actorName
    }
  }
})

export const useStore = () => {
  return baseUseStore(key);
}