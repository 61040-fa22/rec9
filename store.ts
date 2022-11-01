import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

/**
 * Storage for data that needs to be accessed from various compoentns.
 */
const store = new Vuex.Store({
  state: {
    items: [],
    alerts: {} // global success/error messages encountered during submissions to non-visible forms
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    alert(state, payload) {
      /**
       * Add a new message to the global alerts.
       */
      Vue.set(state.alerts, payload.message, payload.status);
      setTimeout(() => {
        Vue.delete(state.alerts, payload.message);
      }, 3000);
    },
  },
  getters: {
    importantItems: state => {
      return state.items.filter(item => item.toLowerCase().includes('important')).length;
    }
  },
  // Store data across page refreshes, only discard on browser close
  plugins: [createPersistedState()]
});

export default store;