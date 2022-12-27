import { Formik, Form, Field, ErrorMessage,FieldArray} from "formik"
import css from '../MyForm/MyForm.module.css'
const  initialValues= {
    contacts:[] ,
    name: '',
    number:'',
}
 
const onClick = event =>{
    const box= initialValues.contacts;
    
}

const onSubmit= async (values, {resetForm}) =>{
console.log(values.contacts);
await values.contacts.push(values)
resetForm();

}




const validate = values =>{
    let errors ={}
    
    if (!values.name){
        errors.name=`Required`
       
    }
    else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(values.name)){
        errors.name="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    }
    if (!values.number){
        errors.number =`Required`
    }
    else if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(values.number)){
        errors.number ='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    }

    return errors
}    

function Formix () {
    // const formik =useFormik({
    //    onSubmit,
    //    initialValues,
    //     validate,
    
    // })
    
    return(
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        >

        <Form className={css.form}>
        <h1>
           PhoneBook 
        </h1>
      <div>
            <label className={css.label}>Name</label>
            <Field
  type="text"
  name="name"
  className={css.input}
 
/>
<ErrorMessage name='name' component={`span`}/>
            </div>
            <div>
            <label className={css.label}>Number</label>
            <Field
  type="tel"
  name="number"
  className={css.input}
        
/>
<ErrorMessage name='number' component={`span`}/>
</div>
<button className={css.buttonSubmit} type="submit" onClick={onClick}>Add to Card</button>
<div>


<FieldArray name='contacts'>
    {(fieldArrayProps)=>{       
        const {remove, form}= fieldArrayProps
        const {values} =form
        const {contacts}= values
       
        return <div> 
            <div className={css.contactTitle}>List of contacts</div>
            {
                
                contacts.map((contact, index)=>(
                    
                <div key={index}>
                    
                    <Field className={css.nameInput} name={`contacts[${index}].name`}/>
                    <Field className={css.numberInput} name={`contacts[${index}].number`}/>
                    <button className={css.removeButton} type='button' onClick={()=>remove(index)}>X</button>
                </div>
                ))
            }
        </div>
    }}
</FieldArray>
</div>
        </Form>
   
        </Formik>
    
    )
}

export default Formix