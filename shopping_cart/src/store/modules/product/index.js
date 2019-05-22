import Axios from "axios";

const state = {
    productItems: []
};

const mutations = {

    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    }
};

const actions = {
    getProductItems({ commit }) {
        Axios.get('/api/products').then((respone) => {
            commit('UPDATE_PRODUCT_ITEMS', respone.data);
        })
    }
};

const getters = {
    productItems(state) {
        return state.productItems;
    }
};

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;