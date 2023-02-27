<template>
    <div class="d-flex justify-content-between align-items-start profile-menu-header">
        <ul class="d-flex">
            <li>
                <router-link to="/my-profile/shop-info">
                    Shop info
                </router-link>
            </li>
            <li>
                <router-link to="/my-profile/team-member">
                    Team member
                </router-link>
            </li>
            <li>
                <router-link to="/my-profile/security">
                    Security
                </router-link>
            </li>
        </ul>
         <router-link to="/" class="ml-auto new-sellpost d-flex align-items-center justify-content-center flex-column router-link-active"><svg data-v-0a551f87="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0a551f87="" opacity="0.4" d="M19.9997 36.6668C29.2044 36.6668 36.6663 29.2049 36.6663 20.0002C36.6663 10.7954 29.2044 3.3335 19.9997 3.3335C10.7949 3.3335 3.33301 10.7954 3.33301 20.0002C3.33301 29.2049 10.7949 36.6668 19.9997 36.6668Z" fill="#292D32"></path><path data-v-0a551f87="" d="M26.6663 18.7502H21.2497V13.3335C21.2497 12.6502 20.683 12.0835 19.9997 12.0835C19.3163 12.0835 18.7497 12.6502 18.7497 13.3335V18.7502H13.333C12.6497 18.7502 12.083 19.3168 12.083 20.0002C12.083 20.6835 12.6497 21.2502 13.333 21.2502H18.7497V26.6668C18.7497 27.3502 19.3163 27.9168 19.9997 27.9168C20.683 27.9168 21.2497 27.3502 21.2497 26.6668V21.2502H26.6663C27.3497 21.2502 27.9163 20.6835 27.9163 20.0002C27.9163 19.3168 27.3497 18.7502 26.6663 18.7502Z" fill="#292D32"></path></svg><p data-v-0a551f87="" class="mt-3 mb-0 primary-text gil-bold">New sell post</p></router-link>
    </div>
</template>

<script>
    export default {
        name: 'MyProfileContentTabs',
        data() {
            return {

            }
        },

    }
</script>

<style scoped>

</style>
