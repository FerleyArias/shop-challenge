import {getAllComics} from "@/api"

export default {
  async getComics({state, commit}, offset) {
    try {
      commit('setLoading')
      const data = await getAllComics(offset)
      const updateComics = state.comics.concat(data.data.results)
      commit('setTotal', data.data.total) 
      commit('setComics', updateComics)
    } catch (error) {
      commit('setError', error)
    }
  },
  addCartItem({state,commit},comic) {
    const updateCart = JSON.parse(JSON.stringify(state.cart))
    let indexRepeat = updateCart.findIndex(({id})=> id === comic.id)
    if(indexRepeat >= 0 ) {
      updateCart[indexRepeat].quantity+=comic.quantity
    } else {
      updateCart.push(comic)
    }
    commit('setCart', updateCart)
  },
  deleteCartItem({state,commit},index) {
    const updateCart = JSON.parse(JSON.stringify(state.cart))
    updateCart.splice(index,1)
    commit('setCart', updateCart)
  }
}