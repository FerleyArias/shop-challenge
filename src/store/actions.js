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
    const updateCart = state.cart
    let repeat = false
    for (let i = 0; i < updateCart.length; i++) {
      if(updateCart[i].id === comic.id) {
        console.log(updateCart[i].id, comic.id)
        updateCart[i].quantity += comic.quantity
        console.log(updateCart[i].quantity, comic.quantity)
        repeat = true
      }
    }
    if(!repeat) {
      updateCart.push(comic)
    }
    console.log(updateCart)
    commit('setCart', updateCart)
  },
  deleteCartItem({state,commit},index) {
    const updateCart = state.cart
    console.log(updateCart)
    updateCart.splice(index,1)
    commit('setCart', updateCart)
  }
}