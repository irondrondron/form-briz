import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toggleModalActive } from '../redux/actions/modal';
import { setSelectedObject } from '../redux/actions/object';

const EditForm = ({ editableObject }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      phoneNumber: editableObject.phoneNumber,
      lastName: editableObject.lastName,
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^\d+$/, 'Использовать только цифры')
        .min(2, 'Минимум 2 символа')
        .max(12, '12 символов или меньше')
        .required('Заполните это поле'),
      lastName: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, '20 символов или меньше')
        .required('Заполните это поле'),
    }),
    onSubmit: (values) => {
      const updatedObj = {
        id: editableObject.id,
        ...values,
      };
      dispatch({ type: 'UPDATE', payload: updatedObj });
      dispatch(toggleModalActive(false));
      setTimeout(() => {
        dispatch(setSelectedObject(null));
      }, 400);
    },
  });
  return (
    <form className="Form" action="/" onSubmit={formik.handleSubmit}>
      <div className="Form__wrapper">
        <div className="Form__input">
          <input
            className="input"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Телефон"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="input__error">{formik.errors.phoneNumber}</p>
          ) : null}
        </div>

        <div className="Form__input">
          <input
            className="input"
            id="lastName"
            name="lastName"
            placeholder="Фамилия"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="input__error">{formik.errors.lastName}</p>
          ) : null}
        </div>

        <button className="Form__submit" type="submit">
          Обновить
        </button>
      </div>
    </form>
  );
};

export default EditForm;
