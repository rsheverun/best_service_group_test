<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 text-right mb-5">
                    <button class="btn btn-primary" @click="logout()">Log Out</button>
                </div>
            </div>
            <select v-model="data.selectedCategory"  class="form-control mb-4" @change="getActorsFromCategory">
                <option value="null">*Please select a film category</option>
                <option v-for="category in categories" :value="category.category_id">{{category.name}}</option>
            </select>
            <div v-if="data.selectedCategory">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="actor in actors">
                            <td>{{actor.first_name}}</td>
                            <td>{{actor.last_name}}</td>
                            <td>{{actor.cat_film_app}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item"  :class="{disabled:prevDisabled}">
                                    <a class="page-link" href="#" @click="changePage('prev')">Previous</a>
                                </li>
                                <li class="page-item" :class="{disabled:nextDisabled}">
                                    <a class="page-link" href="#" @click="changePage('next')">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                data: {
                    selectedCategory: null,
                    page: 1,
                    perPage: 10,
                },
                prevDisabled: true,
                nextDisabled: false

            }
        },
        computed: {
            categories() {
                return this.$store.state.category.list
            },
            count() {
                return this.$store.state.actor.count
            },
            actors() {
                return this.$store.state.actor.list
            }
            
        },
        watch: {
            data: {
                handler(value) {
                    if (value.page == 1) {
                        this.prevDisabled = true
                    } else {
                        this.prevDisabled = false
                    }
                    if (
                        (value.page*this.data.perPage) + this.data.perPage > this.count 
                        && this.count != ''
                        )
                        this.nextDisabled = true
                    
                }, deep: true
            },
        },
        mounted() {
            this.getCategories()
        },
        methods: {
            getCategories() {
                this.$store.dispatch('getCategories')
            },

            getActorsFromCategory() {
                this.$store.dispatch('getActorsFromCategory', this.data)
                
            },

            changePage(target) {
                switch (target) {
                    case 'prev':
                        this.data.page--
                    break;
                    case 'next':
                        ++this.data.page
                    break;
                }
                this.getActorsFromCategory()
            },

            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>