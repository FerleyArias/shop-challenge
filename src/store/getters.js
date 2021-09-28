export default {
  totalCart: state => {
    let count = 0 
    state.cart.forEach(comic => {
      for (let i = 0; i < comic.prices.length; i++) {
        if(comic.prices[i].price != 0 || i === comic.prices.length -1) {
          count+= comic.prices[i].price * comic.quantity
        }
      }
    });
    return count
  },
  totalPages: state => {
    return Math.ceil(state.total/20)
  }
}