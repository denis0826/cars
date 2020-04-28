<template>
    <div class=" container mx-auto py-10">
        <div class="p-4 text-center">
            <h2 class="text-purple-600 text-6xl">
                Cars Trading
            </h2>
            <h3 v-if="cars.length > 0">Current CARS({{cars.length}})</h3>
        </div>
        <div class="flex justify-center items-center px-6 py-4">
            <table class="table-fixed">
                <thead>
                    <tr>
                        <th class="px-4 py-2">Model / Brand</th>
                        <th class="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody v-for="car in cars" v-bind:key="car.id">
                    <tr>
                        <td class="border px-4 py-2">
                            <router-link :to="{ name: 'Detail', params: { id: car.id, details: car.brand }}">{{ car.brand }}</router-link>
                        </td>
                        <td class="border px-4 py-2">
                            <div class="flex justify-center items-center px-6 py-4">
                                <button type="button" @click="edit(car)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                                    Edit
                                </button>
                                <button type="button" @click="remove(car)" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded mx-2 shadow">
                                    Remove
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <add-car></add-car>
    </div>
</template>

<script>
import AddCar from "@/components/AddCar";
export default {
    name: "CarsList",
    components: {
        AddCar,
    },
    methods: {
        edit(car) {
            this.$store.dispatch("editCar", car);
        },
        remove(car) {
            this.$store.dispatch("removeCar", car);
        },
    },
    computed: {
        cars() {
            return this.$store.getters.cars;
        },
    },
};

</script>
