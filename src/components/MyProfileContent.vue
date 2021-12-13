<template>
    <div class="w-full dashboard-right">
        <my-profile-content-tabs></my-profile-content-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
import MyProfileContentTabs from './MyProfileContentTabs.vue'
    export default {
  components: { MyProfileContentTabs },
        name: 'MyProfileContent',
        data() {
            return {
            }
        }

    }
</script>

<style scoped>

</style>
