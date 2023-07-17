export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  export const updateCart = (state) => {
    //Calculate items price
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      //Calculate shipping price (If order is over $1000 then free, else $25 shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 1000 ? 0 : 25);

      //Calculate tax price
      state.taxPrice = addDecimals(
        Number((0.8 * state.itemsPrice).toFixed(2))
      );

      //Calculate total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      //saves all prices to local storage as 'cart'
      localStorage.setItem("cart", JSON.stringify(state));

      return state
  }