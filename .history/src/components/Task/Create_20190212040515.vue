<script>
import store from '../../store'
import Form from './Form.vue'

export default {
    render(createElement) {
        return createElement(Form, {
            props: {
                title: 'Nueva Clasificado',
                action: 'Crear Clasificado',
                task: {
                    title: '',
                    description: ''
                }
            },
            on: {
               validateBeforeSubmit: (draft) => {
                   this.$validator.validateAll().then((result) => {
                      if(result){
                        console.log('paso la validacion')
                       store.dispatch('createTask', draft).then(newTask => {
                            this.$router.push({
                                name: 'tasks.details',
                                params: {id: newTask.id }
                            });
                        }).catch(error => {
                            alert(error)
                        })
                      }
                    })                    
                }
            }
        });
    }
}
</script>











