<template>
    <div class="flex justify-center w-full mb-6">
        <div class="flex flex-wrap justify-center items-center w-1/2">
            <div class="w-2/3 px-3 mb-0">
                <input
                    class="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none"
                    :value="newCar"
                    @change="getCar"
                    placeholder="Brand name...">
            </div>
            <div class="w-1/3 px-3 mb-0">
                <button type="button" @click="addCar" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-0">
                    Add Car
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AddCar",
    methods: {
        getCar(e) {
            this.$store.dispatch("getCar", { brand: e.target.value, id: this.cars.length });
        },
        addCar() {
            this.$store.dispatch("addCar");
            this.$store.dispatch("clearCar");
        },
    },
    computed: {
        newCar() {
            return this.$store.getters.newCar.brand;
        },
        cars() {
            return this.$store.getters.cars;
        },
    },
};

</script>
