import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

interface FormularProps {
  textColor?: string;
}

const Formular: React.FC<FormularProps> = ({ textColor = 'white' }) => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nombreCompleto: yup.string().required('Nombre completo es requerido'),
    telefono: yup.string().required('Teléfono es requerido'),
    correoElectronico: yup.string().email('Correo electrónico no es válido').required('Correo electrónico es requerido'),
    empresa: yup.string(),
    asunto: yup.string(),
    mensaje: yup.string().required('Mensaje es requerido'),
    terms: yup.bool().required().oneOf([true], 'Debes aceptar los términos y condiciones'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
      initialValues={{
        nombreCompleto: '',
        telefono: '',
        correoElectronico: '',
        empresa: '',
        asunto: '',
        mensaje: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label style={{ color: textColor }}>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombreCompleto"
                value={values.nombreCompleto}
                onChange={handleChange}
                isInvalid={!!errors.nombreCompleto}
                style={{ margin: '0' }}
              />
              <Form.Control.Feedback type="invalid" style={{ color: textColor }}>
                {errors.nombreCompleto}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label style={{ color: textColor }}>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
                isInvalid={!!errors.telefono}
                style={{ margin: '0' }}
              />
              <Form.Control.Feedback type="invalid" style={{ color: textColor }}>
                {errors.telefono}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label style={{ color: textColor }}>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="correoElectronico"
                value={values.correoElectronico}
                onChange={handleChange}
                isInvalid={!!errors.correoElectronico}
                style={{ margin: '0' }}
              />
              <Form.Control.Feedback type="invalid" style={{ color: textColor }}>
                {errors.correoElectronico}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label style={{ color: textColor }}>Empresa</Form.Label>
              <Form.Control
                type="text"
                name="empresa"
                value={values.empresa}
                onChange={handleChange}
                style={{ margin: '0' }}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik05">
              <Form.Label style={{ color: textColor }}>Asunto</Form.Label>
              <Form.Control
                type="text"
                name="asunto"
                value={values.asunto}
                onChange={handleChange}
                style={{ margin: '0' }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="validationFormik06">
            <Form.Label style={{ color: textColor }}>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="mensaje"
              value={values.mensaje}
              onChange={handleChange}
              isInvalid={!!errors.mensaje}
              style={{ margin: '0' }}
            />
            <Form.Control.Feedback type="invalid" style={{ color: textColor }}>
              {errors.mensaje}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationFormikTerms">
            <Form.Check
              required
              name="terms"
              label={
                <>
                  Debes aceptar los{' '}
                  <Link to="http://localhost:3000/Privacy" target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>
                    términos y condiciones
                  </Link>
                </>
              }
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              style={{ color: textColor }}
            />
          </Form.Group>
          <Button style={{ backgroundColor: 'rgba(255, 113, 0, 1)', border: 'none' }} type="submit">Enviar</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Formular;
