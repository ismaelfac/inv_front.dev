<script>
import store from '../../store'
import Form from '../Forms/frm_classified.vue'

export default {
    render(createElement) {
        return createElement(Form, {
            props: {
                title: 'Nueva Clasificado',
                action: 'Crear Clasificado',
                classified: {
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
                                name: 'classifieds.details',
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











