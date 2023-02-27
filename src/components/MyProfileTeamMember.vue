<template>
    <div class="">
        <!-- My profile content -->
        <div class="my-profile team-member">
            <div class="team-member-list">
                <div class="team-member-box">
                    <div class="team-member-box__top d-flex">
                        <div class="team-member-box__left">
                            <div class="team-img">
                                <img src="https://demo.themeolio.com/intearch/images/2018/12/21/team1.jpg" alt="team image" class="img-fluid">
                            </div>
                            <div class="text-center team-status">
                                <span class="active">Active</span>
                            </div>
                        </div>
                        <div class="team-member-box__right">
                            <div class="right-top">
                                <p class="gil-bold mb-2">Abdul Kadir Khan</p>
                                <div class=" team-status mb-4">
                                    <span class="admin">Admin</span>
                                </div>
                                <div class="group mb-4">
                                    <p class="text-white opa-75 mb-2">Email</p>
                                    <p class="gil-bold text-white">kadir@gmail.com</p>
                                </div>
                                <div class="group mb-4">
                                    <p class="text-white opa-75 mb-2">Phone</p>
                                    <p class="gil-bold text-white">01710-451430</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="team-member-box__bottom d-flex">
                         <div class="team-member-box__left">
                             <router-link to="/" class="text-secondery d-flex align-items-center">
                                View profile 
                                <svg class="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.6204 12.5467C9.49374 12.5467 9.36707 12.5001 9.26707 12.4001C9.07374 12.2067 9.07374 11.8867 9.26707 11.6934L12.9604 8.00008L9.26707 4.30674C9.07374 4.11341 9.07374 3.79341 9.26707 3.60008C9.4604 3.40674 9.7804 3.40674 9.97374 3.60008L14.0204 7.64675C14.2137 7.84008 14.2137 8.16008 14.0204 8.35341L9.97374 12.4001C9.87374 12.5001 9.74707 12.5467 9.6204 12.5467Z" fill="#FFD715"/>
                                    <path d="M13.553 8.5H2.33301C2.05967 8.5 1.83301 8.27333 1.83301 8C1.83301 7.72667 2.05967 7.5 2.33301 7.5H13.553C13.8263 7.5 14.053 7.72667 14.053 8C14.053 8.27333 13.8263 8.5 13.553 8.5Z" fill="#FFD715"/>
                                </svg>
                            </router-link>
                        </div>
                        <div class="team-member-box__right team-btn">
                            <div class="position-relative">
                                <span @click="editTeam = !editTeam" class="btn--collision btn-edit position-relative pointer">Edit</span>
                                <div class="edit-role" v-if="editTeam">
                                    <div class="role-top">
                                        <div class="mb-2">
                                            <p class="mb-2">Role</p>
                                            <div class="d-flex flex-wrap role-list">
                                                <span @click="role = !role" :class="{'active' : role}" class="role-item">Admin</span>
                                                <span class="role-item">Analyst</span>
                                                <span class="role-item">Editor</span>
                                            </div>
                                        </div>
                                        <div class="">
                                            <p class="mb-2">Status</p>
                                            <div class="d-flex flex-wrap role-list">
                                                <span class="role-item">Active</span>
                                                <span class="role-item">Inactive</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="role-bottom d-flex align-items-center justify-content-end pr-a-5">
                                        <span @click="editTeam = false" class="role-action-btn btn--collision-white br-40 border-1 border-white gil-bold font-weight-bold position-relative pointer mr-3">Close</span>
                                        <router-link to="/" class="role-action-btn btn--secondery-hover gil-bold font-weight-bold primary-text position-relative">Apply</router-link>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/" class="btn--secondery-hover btn-remove position-relative">Remove</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyProfileTeamMember',
        data() {
            return {
                editTeam: false,
                role: false,
            }
        },
        methods: {
    }

    }
</script>

<style scoped>

</style>
