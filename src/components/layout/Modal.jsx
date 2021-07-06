import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { PrayerService } from '../../services/prayerService';
import { useAlert } from 'react-alert';

const Modal = props => {
    const initialValues = {
        title: '',
        description: ''
    }
    const [prayers, setPrayers] = useState(initialValues);
    const alert = useAlert();
    const handleInputChange = evt => {
        const { name, value } = evt.target;
        setPrayers({ ...prayers, [name]: value });
    }
    const handleSubmit = () => {
        const formData = {
            title: prayers.title,
            description: prayers.description
        }
        PrayerService.onAddPrayersRequest(formData)
            .then((res) => {
                alert.success('Successfully added Prayer Request to your prayer arsenal!!');
                console.log(res);
                props.setShow(false);
            })
            .catch(error => console.log(error));
    }

    const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

    return (
        <StyledModal>
            <div className={showHideClassName}>
                <div className="main-modal">
                    <div className="background-form">
                        <form className="prayer-request-form" onSubmit={handleSubmit}>
                        <div className="flex-title">
                            <h2>{props.title}</h2>
                            <i className="fas fa-times-circle" onClick={props.handleClose} />
                        </div>
                        <input type="text" className='input-field' name="title" value={prayers.title} onChange={handleInputChange} placeholder="Enter your Title" /><br />
                        <input type="text" className='input-field' name="description" value={prayers.description} onChange={handleInputChange} placeholder="Enter your Description" /><br />
                        <input type="submit" value="Submit Request" />
                    </form>
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
