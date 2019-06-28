<template>
    <div class="container">
        <div class="mt-auto">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Login</h1>
            </div>

            <div class="form-group">
                <input type="email" id="inputEmail" v-model="form.email" 
                    class="form-control" 
                    placeholder="Email address or Username"
                >
            </div>

            <div class="form-group">
                <input type="password" id="inputPassword" v-model="form.password" 
                    class="form-control" 
                    placeholder="Password" 
                >
            </div>

            <button class="btn btn-lg btn-primary btn-block" @click="login()">Sign in</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    username: false
                }
            }
        },
        methods: {
            login() {
                if(!this.form.email.includes('@'))
                    this.form.username = this.form.email

                this.$store.dispatch('login', this.form)
            }
        }
    }
</script>