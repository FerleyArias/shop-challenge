
export default {
  setLoading: (state) => {
    state.loading = true
    state.error = null
  },
  setError: (state, payload) => {
    state.error = payload
    state.loading = false
  },
  setComics: (state, payload) => {
    state.comics = payload,
    state.loading = false
  },
  setCart: (state, payload) => {
    state.cart = payload
  },
  setTotal: (state, payload) => {
    state.total = payload
  }
}