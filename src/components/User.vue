<template>
    <q-page>
        <h2>Tested {{userId}}</h2>

    </q-page>
</template>

<script>


export default {
    name: "User",
    components: {
    },
    data(){
        return{
            userId: $router.currentRoute.params['id']
        }
    }
}
</script>
<style scoped>
</style>
