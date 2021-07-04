<template>
    <div>
        <section class="user-profile-heading">
        <div size="120" class="user">
            <img :src="image_name" class="profile-img">
            <button class="icon primary white--text" @click="$refs.FileInput.click()">mdi-upload</button>
            <input ref="FileInput" type="file" style="display: none;" @change="onFileSelect" />
        </div>
        <div v-model="dialog" width="500">
            <div>
                <div>
                    <VueCropper v-show="selectedFile"
                                ref="cropper"
                                :src="selectedFile"
                                :cropBoxResizable="false"
                                :minContainerWidth="100"
                                :minContainerHeight="100"
                                alt="Source Image">

                    </VueCropper>
                </div>
                <div>
                    <button class="primary" @click="saveImage(), (dialog = false)">Crop</button>
                    <button color="primary" text @click="dialog = false">Cancel</button>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import axios from 'axios'
    import VueCropper from 'vue-cropperjs'
    import 'cropperjs/dist/cropper.css'
    import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
    export default {
        components: { VueCropper, BootstrapVue,  IconsPlugin},
        props: ['image_name'],
        data() {
            return {
                mime_type: '',
                cropedImage: '',
                autoCrop: false,
                selectedFile: '',
                image: '',
                dialog: false,
                files: '',
            }
        },
        computed: {
            ...mapState(['user']),
        },
        methods: {
            saveImage() {
                const userId = this.$route.params.user_id
                this.cropedImage = this.$refs.cropper.getCroppedCanvas().toDataURL()
                this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                    const formData = new FormData()
                    formData.append('profile_photo', blob, 'name.jpeg')
                    axios
                        .post('/api/user/' + userId + '/profile-photo', formData)
                        .then((response) => {
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }, this.mime_type)
            },
            onFileSelect(e) {
                const file = e.target.files[0]
                this.mime_type = file.type
                console.log(this.mime_type)
                if (typeof FileReader === 'function') {
                    this.dialog = true
                    const reader = new FileReader()
                    reader.onload = (event) => {
                        this.selectedFile = event.target.result
                        this.$refs.cropper.replace(this.selectedFile)
                    }
                    reader.readAsDataURL(file)
                } else {
                    alert('Sorry, FileReader API not supported')
                }
            },
        },
    }
</script>
<style scoped>
    .user {
        width: 140px;
        height: 140px;
        border-radius: 100%;
        border: 3px solid #2e7d32;
        position: relative;
    }
    .profile-img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    .icon {
        position: absolute;
        top: 10px;
        right: 0;
        background: #e2e2e2;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        text-align: center;
        color: #0000ff;
        font-size: 14px;
        cursor: pointer;
    }
</style>
