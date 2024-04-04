import React,{useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import Guida_turistica_valle_d_Aosta from '../../../assets/Valle_d_Aosta/Guida_turistica_valle_d_Aosta_contatti_Valle_d_Aosta.jpg';
import { Link } from '@inertiajs/react';
import { Form, Button } from 'react-bootstrap';

export default function contatti_guida_turistica_valle_d_aosta(props) {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validazione dei campi (puoi aggiungere altre regole qui)
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Per favore, completa tutti i campi.');
      return;
    }
    // Invio dei dati al server o esegui altre azioni
    console.log('Dati inviati:', formData);
  };
  
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contatti</h2>}
    >
      <main>
        <div className='margin'>
          <img src={Guida_turistica_valle_d_Aosta} alt="Guida turistica d'Aosta" className='mx-auto my-4' style={{width: 'auto', height: 'auto'}}/>
          <h1 className='color-title text-center mb-3'>Contatti</h1>
          <hr className='w-25 border-3 mx-auto'/>
        </div>
        
        <div className='margin mb-5'>
          <h3 className='fst-italic text-center'>
            Per informazioni e preventivi potete Contattami senza impegno. <br/>
            Riceverete risposta entro 24 ore.
          </h3>
        </div>
        <div  className='row'>
          <div className='col-lg-7'>
            <div className='telefono'>
              <h4 className='text-center fs-2'><i className="bi bi-telephone"></i></h4>
              <h4 className='text-center'><a href='tel:00390000000000%20' className='text-decoration-none color_link'>+39 0000000000</a></h4>
              <hr className='w-75 border-2 mx-auto' />
              <h4 className='text-center fs-2'><i class="bi bi-envelope"></i></h4>
              <h4 className='text-center'><a href='mailto:example@example.com' className='text-decoration-none color_link'>example@example.com</a></h4>
              <hr className='w-75 border-2 mx-auto' />
            </div>
          </div>
          <div className='col-lg-3 mb-3' style={{paddingLeft:'30px', paddingRight:'30px'}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Indirizzo e-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Messaggio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="privacyPolicy">
                <Form.Check
                  type="checkbox"
                  label="Accetto la privacy policy"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Invia
              </Button>
            </Form>
          </div>
        </div>
        
        
      </main>
      <Footer/>
    </AuthenticatedLayout>
  )
}
