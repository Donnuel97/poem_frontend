
const base_url = 'http://localhost:8000/api'



const update_local_storage = () =>{
        localStorage.setItem('app_state', JSON.stringify(app_state));
    }

    
const get_query = () =>{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
} 

const handle_form_error = (request) =>{
        let error = JSON.parse(request.responseText)
        if (error.hasOwnProperty('message')) {
            alert(error.message)
            return;
        }
        if (error.length > 0){
            alert(error[0])
            return;
        }
        if (error.hasOwnProperty('non_field_errors')){
            alert(error['non_field_errors'][0])
            return;
        }
       for (const name of form_data){
           if (error.hasOwnProperty(name.name)){
               const e = name.parentElement.querySelector('small');
               if (e !== null){
                   e.innerText = error[name.name]
                   e.classList.remove('d-none')
               }

           }else{
               const e = name.parentElement.querySelector('small');
               if (e !== null){
                   e.classList.add('d-none')
               }

           }
       }
    }
 

const get_form_data = (form_inputs=null) => {
        if (form_inputs !== null){
            form_data = form_inputs
        }
        let data = {}
        for (const input of form_data) {
            data[input.name] = input.value
        }
        return data
    }