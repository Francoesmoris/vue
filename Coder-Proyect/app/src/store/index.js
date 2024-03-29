import { createStore } from "vuex";

export default createStore({
  state: {
    productos: [],
    carrito: {},
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload;
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = { ...payload, cantidad: 1 };
      console.log(state.carrito);
    },
    setVaciar(state) {
      state.carrito = {};
    },
    aumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    disminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload];
      }
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch("api.json");
        const productos = await res.json();
        commit("setProductos", productos);
      } catch (error) {
        console.log(error);
      }
    },
    agregarCarrito({ commit }, producto) {
      /* eslint-disable */
      commit("setCarrito", producto);
    },
  },
  getters: {
    totalCantidad(state) {
      debugger;
      return Object.values(state.carrito).reduce(
        (acc, { cantidad }) => acc + cantidad,
        0
      );
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio,
        0
      );
    },
  },
});
