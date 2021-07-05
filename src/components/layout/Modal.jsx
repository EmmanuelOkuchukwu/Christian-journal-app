import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { PrayerService } from '../../services/prayerService';
import { useAlert } from 'react-alert';

const Modal = props => {
    const alert = useAlert();
    const validationSchema = new Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string().required('Required')
    })

    const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
    return (
        <StyledModal>
            <div className={showHideClassName}>
                <div className="main-modal">
                    <div className="background-form">
                        <Formik
                            initialValues={{ title: '', description: '' }}
                            onSubmit={values => {
                                const formData = {
                                    title: values.title,
                                    description: values.description
                                }
                                PrayerService.onAddPrayersRequest(formData)
                                    .then((res) => {
                                        alert.success('Successfully added Prayer Request to your prayer arsenal!!')
                                        console.log(res)
                                    })
                            }}
                            validationSchema={validationSchema}
                        >
                            {({ handleChange, touched, errors, handleSubmit, values }) => (
                                <form className="prayer-request-form" onSubmit={handleSubmit}>
                                    <div className="flex-title">
                                        <h2>{props.title}</h2>
                                        <i className="fas fa-times-circle" onClick={props.handleClose} />
                                    </div>
                                    <Field type="text" className={"input-field" + (errors.title && touched.title ? ' is-invalid' : '')} name="title" value={values.title} onChange={handleChange} placeholder="Enter your Title" /><br />
                                    <ErrorMessage name="title" component="div" className="invalid-feedback" />
                                    <Field type="text" className={`input-field ${errors.description && touched.description}`} name="description" value={values.description} onChange={handleChange} placeholder="Enter your Description" /><br />
                                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                                    <button type="submit">Submit Request</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                    <button type="submit" className="close-btn" onClick={props.handleClose}>Close Form</button>
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal;

const StyledModal = styled.main`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .main-modal {
    position: fixed;
    background: white;
    width: 400px;
    height: 375px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 4px;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }

  .background-form {
    width: 100%;
  }

  .prayer-request-form {
    width: 100%;
    padding: 20px;
    input {
      margin: 14px 0;
      width: 100%;
      padding: 8px;
      border: 1px solid ${props => props.theme.SecondaryColor};
      border-radius: 4px;
    }
    button {
      background-color: ${props => props.theme.SecondaryColor};
      border-radius: 4px;
      border: none;
      padding: 8px;
      margin: 10px 0;
      width: 100%;
      cursor: pointer;
    }
  }

  .close-btn {
    margin: 0 20px;
    background-color: ${props => props.theme.SecondaryColor};
    border-radius: 4px;
    border: none;
    padding: 7px;
    cursor: pointer;
  }

  .flex-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    i {
      cursor: pointer;
    }
  }
`;
