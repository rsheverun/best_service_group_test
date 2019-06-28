<template>
    <div>
        <select v-model="data.selectedCategory" @change="getActorsFromCategory">
            <option value="null">*Please select a film category</option>
            <option v-for="category in categories" :value="category.category_id">{{category.name}}</option>
            
        </select>
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
                    perPage: 10
                }
            }
        },
        computed: {
            categories() {
                console.log(this.$store)
                return this.$store.state.categories
            },
            actors() {
                return this.$store.state.actors
            }
        },
        mounted() {
            this.getCategories()
            // this.getData()
        },
        methods: {
            getCategories() {
                this.$store.dispatch('getCategories')
            },
            getActorsFromCategory() {
                this.$store.dispatch('getActorsFromCategory', this.data)
                
            }
        }
    }
</script>