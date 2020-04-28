<template>
    <div class="home">
        <CarsList />
    </div>
</template>

<script>
// @ is an alias to /src
import CarsList from "@/components/CarsList";

export default {
    name: "Home",
    components: {
        CarsList,
    },
};
</script>
