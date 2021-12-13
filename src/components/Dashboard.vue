<template>
    <div class="d-flex">
        <dashboard-sidebar></dashboard-sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import DashboardSidebar from './DashboardSidebar.vue'

    export default {
  components: { DashboardSidebar },
        name: 'Dashboard',
        data() {
            return {
            }
        },

    }
</script>

<style scoped>

</style>
