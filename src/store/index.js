import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cars: [
            { brand: "Mitsubishi Strada Cab and Chassis 2.5D 4x2 MT", id: 0 },
            { brand: "Toyota Glanza Rs.", id: 1 },
            { brand: "Land Cruiser Prad", id: 2 },
            { brand: "Mitsubishi Strada Athlete 4x2 AT", id: 3 },
        ],
        newCar: "",
    },
    mutations: {
        GET_CAR(state, car) {
            state.newCar = car;
        },
        ADD_CAR(state) {
            state.cars.push(state.newCar);
        },
        EDIT_CAR(state, car) {
            const { cars } = state;
            cars.splice(cars.indexOf(car), 1);
            state.cars = cars;
            state.newCar = car;
        },
        REMOVE_CAR(state, car) {
            const { cars } = state;
            cars.splice(cars.indexOf(car), 1);
        },
        CLEAR_CAR(state) {
            state.newCar = "";
        },
    },
    actions: {
        getCar({ commit }, car) {
            commit("GET_CAR", car);
        },
        addCar({ commit }) {
            commit("ADD_CAR");
        },
        editCar({ commit }, car) {
            commit("EDIT_CAR", car);
        },
        removeCar({ commit }, car) {
            commit("REMOVE_CAR", car);
        },
        clearCar({ commit }) {
            commit("CLEAR_CAR");
        },
    },
    getters: {
        newCar: (state) => state.newCar,
        cars: (state) => state.cars,
    },
});
