<template>
    <div class="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 p-10 flex justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://via.placeholder.com/320x240" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Detail Page</div>
                <p class="text-gray-700 text-base">{{details}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Detail",
    data() {
        return {
            details: "",
        };
    },
    created() {
        this.details = this.$route.params.details;
    },
};
</script>
