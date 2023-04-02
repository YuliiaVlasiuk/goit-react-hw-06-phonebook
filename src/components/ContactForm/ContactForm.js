 //import { Button } from "components/Button/Button";
 import { useState } from 'react';
 import { useDispatch } from 'react-redux';
 //import { useSelector } from 'react-redux';
 import { addContact } from "../../redux/contactsSlice";
 //import { getContacts } from "../../redux/selectors";
 import { nanoid } from 'nanoid';
 //import * as Yup from 'yup';
 import { Formik, Field } from 'formik';
 import { Form, FormField, ErrorMessage } from './ContactForm.styled';
 
// const phoneSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     // .matches(
//     //   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//     //   `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
//     // )
//     .required('Required'),

//   number: Yup.string()
//     // .matches(
//     //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//     //   `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`
//     // )
//     .required('Required'),
// });


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

// const contacts = useSelector(getContacts);
 const dispatch = useDispatch();

  const handleSubmit = event=> {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
  dispatch(addContact(newContact));
  setName('');
  setNumber('');
  };
  
  


  return (
<Formik
      // validationSchema={phoneSchema}
    
    >
      <Form onSubmit={handleSubmit} >
        <FormField>
          Name
          <Field name="name" onChange={onChangeName}/>
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField >
          Number
          <Field type="tel" name="number" onChange={onChangeNumber}/>
          <ErrorMessage name="number" component="div" />
        </FormField>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>

  );
};
