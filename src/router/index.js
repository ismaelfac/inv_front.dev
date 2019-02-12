import Vue from 'vue'
import Router from 'vue-router'

import ErrorNotFound from '../components/errors/NotFound.vue'

import Content from '../views/Content.vue'
import About from '../views/website/about.vue'
import Brands from '../views/website/brands.vue'
import Contact from '../views/website/contact.vue'
import Properties from '../views/website/properties.vue'
import Blog from '../views/website/blog.vue'
//
import TaskList from '../components/Task/List.vue'
import TaskEdit from '../components/Task/Edit.vue'
import TaskCreate from '../components/Task/Create.vue'
import TaskDetails from '../components/Task/Details.vue'

import Posts from '../views/website/blog.vue'
import PostDetails from '../components/posts/post_details.vue'
Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'content',
            component: Content
        },
        {
			path: '/about',
			name: 'about',
            component: About,
            props: true
        },
        {
			path: '/brands',
			name: 'brands',
            component: Brands,
            props: true
        },
        {
			path: '/blog',
			name: 'blog',
            component: Blog
		},
        {
			path: '/contact',
			name: 'contact',
            component: Contact
        },
        {
			path: '/properties',
			name: 'properties',
            component: Properties,
            props: true
        },
        {
			path: '/tasks',
			component: TaskList,
			children: [
				{
					path: '',
					name: 'tasks',
					component: {
						template: '<h2>Por favor selecciona una tarea</h2>'
					}
				},
				{
					path: 'create',
					name: 'tasks.create',
					component: TaskCreate
				},
				{
					path: ':id',
					name: 'tasks.details',
					component: TaskDetails,
					props: true
				},
				{
					path: ':id/edit',
					name: 'tasks.edit',
					component: TaskEdit,
					props: true
				}
			]
		},
		{
			path: '/posts',
			component: Posts,
			children: [
				{
					path: '',
					name: 'posts',
					component: Posts
				},
				
				{
					path: ':id',
					name: 'posts.details',
					component: PostDetails,
					props: true
				},
			]
		},
		{
			path: '/404',
			component: ErrorNotFound
		},
		{
			path: '*',
			redirect: '/404'
		}
	]
});

export default router



