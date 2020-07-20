<script>
    export default {
        components: {
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            logout() {
                this.$store.commit('LOGOUT');
                this.$router.push('/');
            },
            authClick(e) {
                const href = e.target.getAttribute('href');
                console.log(this.$route.name, href)
                if (this.$route.name === 'coins-id') {
                    window.location = href
                } else {
                    this.$router.push(href)
                }
            }
        },
    };
</script>

<template>
    <nuxt/>
</template>

