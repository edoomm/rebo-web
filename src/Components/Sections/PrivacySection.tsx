import React from 'react';
import { Container,  Row} from 'react-bootstrap';
import HeaderBar from '../Header and Footer/HeaderBar';
import Footer from '../Header and Footer/Footer';
import './PrivacySection.css'
function PrivacyPage() {
  return (
    <div className="PrivacySection p-0 ">
      <div className='HeaderApp'>
        <HeaderBar/>
      </div>

       <Container className=' p-0 justify-content-center' style={{backgroundColor:'rgba(33, 33, 26, 1)', margin:'0', width:'100%',maxWidth:'none'}}>
        <Row className="PrivacyName p-0" >
            <h1 className="PrivacyTitle  text-white d-flex align-items-center  ps-lg-5 justify-content-center justify-content-lg-start ">Aviso de Privacidad</h1>
        </Row>
        <div style={{backgroundColor:'white',height:'3px', width:'100%'}}></div>
        <Row style={{width:'90%', paddingBottom:'3rem', paddingTop:'3rem'}} className='PrivacyText d-flex justify-content-center' >
            <p className='text-white' style={{ margin: '0' }}>
            En [Nombre de la Empresa], con domicilio en [Dirección de la Empresa], nos comprometemos a proteger la privacidad de nuestros clientes, proveedores y visitantes del sitio web. Este aviso de privacidad describe cómo recopilamos, utilizamos y protegemos los datos personales que usted nos proporciona a través de nuestro sitio web [URL del sitio web] en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normatividad aplicable.
            </p>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>1. Datos Personales Recopilados</strong><br />
            Recopilamos datos personales que usted nos proporciona de manera voluntaria cuando:
            </p>

            <ul className='text-white' style={{ margin: '0' }}>
            <li>Realiza una compra o solicita información sobre nuestros productos.</li>
            <li>Se suscribe a nuestro boletín informativo.</li>
            <li>Nos contacta a través de formularios en nuestro sitio web.</li>
            </ul>

            <p className='text-white' style={{ margin: '0' }}>
            Los datos personales que podemos solicitar incluyen:
            </p>

            <ul className='text-white' style={{ margin: '0' }}>
            <li>Nombre completo.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Número de teléfono.</li>
            <li>Dirección de envío.</li>
            <li>Información de pago.</li>
            </ul>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>2. Finalidad del Tratamiento de Datos</strong><br />
            Utilizaremos sus datos personales para las siguientes finalidades:
            </p>

            <ul className='text-white' style={{ margin: '0' }}>
            <li>Procesar y cumplir con sus pedidos de productos de seguridad industrial.</li>
            <li>Brindarle atención al cliente y dar seguimiento a sus solicitudes.</li>
            <li>Enviarle información comercial, promociones o actualizaciones sobre nuestros productos, siempre que haya dado su consentimiento.</li>
            <li>Cumplir con obligaciones legales y normativas.</li>
            </ul>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>3. Uso de Cookies</strong><br />
            Nuestro sitio web utiliza cookies para mejorar la experiencia de navegación. Estas cookies permiten personalizar el contenido y los anuncios, así como analizar el tráfico del sitio. Usted puede deshabilitar el uso de cookies ajustando la configuración de su navegador.
            </p>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>4. Transferencia de Datos Personales</strong><br />
            Nos comprometemos a no transferir sus datos personales a terceros sin su consentimiento expreso, salvo cuando sea necesario para el cumplimiento de nuestras obligaciones legales o contractuales, o en los casos permitidos por la legislación vigente.
            </p>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>5. Derechos ARCO</strong><br />
            Usted tiene el derecho de Acceder, Rectificar, Cancelar u Oponerse (ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviarnos una solicitud por escrito a [correo electrónico] o visitar nuestras oficinas en la dirección antes mencionada. Nos comprometemos a atender su solicitud dentro de los plazos establecidos por la ley.
            </p>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>6. Medidas de Seguridad</strong><br />
            Adoptamos las medidas técnicas, administrativas y físicas necesarias para proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
            </p>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>7. Cambios al Aviso de Privacidad</strong><br />
            Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio será notificado a través de este mismo sitio web y entrará en vigor al momento de su publicación.
            </p>

            <p className='text-white' style={{ margin: '0' }}>
            <strong>8. Contacto</strong><br />
            Si tiene alguna duda o desea más información sobre nuestro aviso de privacidad, puede ponerse en contacto con nosotros a través del correo electrónico [correo electrónico de contacto] o llamando al teléfono [número de teléfono].<br />
            Fecha de última actualización: [Fecha]
            </p>

        </Row>
       </Container>

      
      <Footer/>
    </div>
  );
}

export default PrivacyPage;
