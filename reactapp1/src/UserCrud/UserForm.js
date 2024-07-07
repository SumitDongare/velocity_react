import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function UserForm() {
  return (
    <div className='user-creation-form'>
       <Formik
         initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            mobile:''
         }}
         onSubmit={(values)=>{
            console.log("Submitted values", values)
         }}

        >
            <Form>
                
                <Field id="firstName" name="firstName" placeholder="First Name"/>
               
                <Field id="lastName" name="lastName" placeholder="Last Name"/>
                
                <Field id="email" name="email" placeholder="Email" type="email" />
             
                <Field id="mobile" name="mobile" placeholder="Mobile" type="text" />

                <button type='submit'>Submit</button>
            </Form>

        </Formik>

       </div>
  )
}
