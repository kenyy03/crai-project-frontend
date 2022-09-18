import * as React from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import Header from '../Header/Header';
import './ReservationForm.css';
import { Button } from '@mui/material';

interface MyFormValues {
  firstName: string;
}

export const ReservationForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' };
  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-group">
          <h1>Reservación</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form className="fields-container">
              <label htmlFor="firstName">Primer Nombre</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="Primer Nombre"
                className="fields-form"
              />

              <label htmlFor="firstLastName">Primer Apellido</label>
              <Field
                id="firstLastName"
                name="firstLastName"
                placeholder="Primer Apellido"
                className="fields-form"
              />

              <label htmlFor="studentCode">No. Cuenta</label>
              <Field
                id="studentCode"
                name="studentCode"
                placeholder="No. cuenta"
                className="fields-form"
              />

              <label htmlFor="hours">Seleccione tiempo</label>
              <Field id="hours" as="select" name="hours" className="select-form">
                <option value={1}>1 hora</option>
                <option value={2}>2 horas</option>
              </Field>

              <label htmlFor="membersTeam">Integrantes | No. Cuenta </label>
              <Field id="membersTeam" name="membersTeam" as="textarea" className="textarea-form" />
              <Button variant="outlined" className="button-form">
                Enviar
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
