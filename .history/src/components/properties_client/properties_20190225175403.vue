<template>
    <div>
        <template>
           <list-properties :properties="properties"></list-properties>
        </template>
    </div>
</template>
<script>
import List_properties from './List.vue'
export default {
    name:'properties',
    components: {
        'list-properties': List_properties
    },
    computed: {
        properties: () => this.$store.state.properties
    }
}
</script>
