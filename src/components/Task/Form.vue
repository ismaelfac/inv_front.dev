<template>
    <div>
        <div class="post-title-time">
            <h2 class="subtitle">{{ title }}</h2>
            <p>July 30, 2016 / 10 am</p>
        </div>
        

        <form @submit.prevent="validateBeforeSubmit">
            <div class="form-group">
                <label for="title">Título</label>
                <input name="title" type="text" v-model="draft.title" class="form-control" id="title" v-validate="'required'">
                <div v-show="errors.has('title')" class="alert alert-danger" role="alert">
                    <span aria-hidden="true"><app-icon img="exclamation-sign"></app-icon></span>
                    <span>{{ errors.first('title') }}</span>
                </div>
                
            </div>

            <div class="form-group">
                <label for="description">Descripción</label>
                <textarea name="description" id="description" cols="30" rows="6" v-model="draft.description" class="form-control" v-validate="'required'"></textarea>
                <div v-show="errors.has('description')" class="alert alert-danger" role="alert">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span>{{ errors.first('description') }}</span>
                </div>
            </div>

            <button class="btn btn-primary">{{ action }}</button>
        </form>
    </div>
</template>

<script>
import Icon from '../../views/Icon.vue'
	export default {
        components:{
            'app-icon': Icon
        },
        inject: ['$validator'],
		props: ['title', 'action', 'task'],
		data() {
			return {
				draft: clone(this.task)
			}
		},
		methods: {
			validateBeforeSubmit() {
				this.$emit('validateBeforeSubmit', this.draft);
			}
		}
	}
</script>









