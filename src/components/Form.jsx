import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      lastName: '',
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
    onSubmit: (values, { resetForm }) => {
      dispatch({ type: 'ADD', payload: values });
      resetForm();
    },
  });

  return (
    <form className="Form" action="/" onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="Form__wrapper">
          <div className="Form__fields">
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
          </div>

          <button className="Form__submit" type="submit">
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
