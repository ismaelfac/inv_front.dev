<template>
    <li @click="select" class="list-group-item task-list-item"
        :class="{active: isActive, completed: !task.pending}">
        <div class="media">
            <a @click.stop="toggleStatus" class="media-left">
                <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon>
                 <img class="img_comment" :src="task.user_img" alt="">
            </a>
           
            <div class="media-body">
                <h6 class="media-heading"><span class="description">{{ task.title }}</span></h6>
                <p><span>6 hour ago</span><span class="description">{{ task.description }}</span></p>
            </div>
        </div>
    </li>
</template>

<script>
import store from '../../store'
import Icon from '../../views/Icon.vue'
export default {
    components:{
        'app-icon': Icon
    },
    data() {
        return {
            draft: ''
        };
    },
    props: ['task'],
    computed: {
        isActive() {
            return this.task.id == this.$route.params.id;
        }
    },
    methods: {
        select() {
            let route = this.isActive
                ? {name: 'tasks'}
                : {name: 'tasks.details', params: {id: this.task.id}};

            this.$router.push(route);
        },
        toggleStatus() {
            store.dispatch('toggleTask', this.task);
        }
    }
}
</script>

<style lang="scss">
    .list-group-item.task-list-item { 

        a {
            text-decoration: none;
        }

        .img_comment {
            width: 81px;
            height: 72px;   
        }

        .description {
            flex: 1;
            padding: 0 5px;
        }

        &.completed {
            &, a {
                color: #999;
            }

            .description {
                text-decoration: line-through;    
            }
        }

        &.active a, &.active {
            color: white;
        }
    }
</style>








