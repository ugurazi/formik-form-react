import React from 'react'
import {Form, Formik} from 'formik';
import CustomInput from './CustomInput';
import { advencedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import {Link} from 'react-router-dom'



const onSubmit = async (values,actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve,1000);
  });
  actions.resetForm();
}


function PortalForm() {
  return (
    <>
    
       <Formik
       initialValues={{ username: '', university: '', isAccepted: false}}
       onSubmit={onSubmit}
       validationSchema={advencedSchema}
     >
       {({isSubmitting}) => (
         <Form>
          <CustomInput
          label="Kullanıcı ismi" name = "username" type= "text" placeholder = "Kullanıcı ismini giriniz" />
          <CustomSelect
          label="Okulunuz"
          name="university"
          placeholder="Lütfen üniversitenizi seçiniz">
            <option value="">Üniversitenizi seçiniz</option>
            <option value='bogazici'>Boğaziçi Üniversitesi</option>
            <option value='gsu'>Galatasaray Üniversitesi</option>
            <option value='odtu'>Orta Doğu Teknik Üniversitesi</option>
            <option value='itu'>İstanbul Teknik Üniversitesi</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="isAccepted"/>
          <button disabled={isSubmitting} type='submit'>Kaydet</button>
          <Link className="formLink"to="/">Ana form'a git.</Link>

         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalForm
