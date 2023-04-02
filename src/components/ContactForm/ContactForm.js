import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
//import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage } from './ContactForm.styled';
import { getContacts } from 'redux/selectors';

import Notiflix from 'notiflix';

// const phoneSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
//     )
//     .required('Required'),

//   number: Yup.string()
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`
//     )
//     .required('Required'),
// });

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    //console.log(name);
   // console.log(number);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

   // console.log(newContact);

    const arrayOfContactsName = [];

    for (const contact of contacts) {
      arrayOfContactsName.push(contact.name);
    }

    if (arrayOfContactsName.includes(newContact.name)) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Formik
      // validationSchema={phoneSchema}
      initialValues={{ name: '', number: '' }}
    >
      <Form onSubmit={handleSubmit}>
        <FormField>
          Name
          <Field name="name" value={name} onChange={onChangeName} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          Number
          <Field
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={onChangeNumber}
          />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

Notiflix.Notify.init({
  position: 'center-top',
  width: '300px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 1000,
});
