<template>
    <section id="page-content" class="page-wrapper">
        <div class="about-sheltek-area ptb-115">
            <div class="container">
                <div class="col-xs-6 col-md-6">
                    <div class="top">
                        <h2>Clasificados</h2>
                        <router-link tag="a" :to="{ name: 'tasks.create' }" class="btn btn-success">Nueva Clasificado</router-link>
                    </div>

                    <div class="pro-details-feedback">
                        <task-item v-for="task in comments" :key="task.id" :task="task"></task-item>
                    </div>
                    <p><a @click="deleteCompleted">Eliminar Clasificados Revisados</a></p>            
                </div>
                <div class="col-xs-6 col-md-6">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import store from '../../store'
// mapState
import TaskItem from './ListItem.vue'

export default {
    computed: {
        comments: () => store.state.comments
    },
    components: {
        'task-item': TaskItem
    },
    methods: {
        deleteCompleted() {
            store.dispatch('deleteCompletedTasks');
        }
    }
}
</script>

<style lang="scss">
    .top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .tasks-list {
        margin-bottom: 40px;
    }
</style>