import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ButtonAdd } from './FormForPhoneBook.styled';
import {
  StyledForm,
  StyledField,
  StyledLabel,
} from './FormForPhoneBook.styled';

const schema = yup.object().shape({
  name: yup.string().required('Please enter first and last name'),
  number: yup
    .string()
    .min(10)
    .max(18)
    .required('Please enter the phone number in the format +380932600501'),
});

export class FormForPhoneBook extends React.Component {
  state = {
    name: '',
    number: '',
  };
  // handleAddContact = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(event.target.elements.name.value);
  //   this.props.onSubmit(this.state);

  //   this.resetInput();
  // };

  handleSubmitFormik = (values, { resetForm }) => {
    // console.log(values);
    this.props.onSubmit(values);
    resetForm();
  };

  // resetInput = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  render() {
    // const { name, number } = this.state;
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmitFormik}
        validationSchema={schema}
      >
        <StyledForm>
          {this.props.data.length > 0 && (
            <p>
              You have: {this.props.data.length}
              {this.props.data.length === 1 ? ' contact' : ' contacts'} in your
              phonebook
            </p>
          )}
          {/* onSubmit={this.handleSubmit} */}
          <StyledLabel>
            Name
            <StyledField
              placeholder="Name Surname"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={name}
              // onChange={this.handleAddContact}
            />
            <ErrorMessage name="name" component="div" />
          </StyledLabel>
          <StyledLabel>
            Number
            <StyledField
              placeholder="+380932600501"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={number}
              // onChange={this.handleAddContact}
            />
            <ErrorMessage name="number" component="div" />
          </StyledLabel>
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </StyledForm>
      </Formik>
    );
  }
}

FormForPhoneBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
