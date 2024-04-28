import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';
import {Card, CardImg, CardBody, CardTitle} from 'react-bootstrap';
import la_reggia from '../../../../../assets/Piemonte/la_reggia_Torino_Piemonte.jpg';




export default function Reggia_di_Venaria_Reale(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='reggia_di_venaria_reale' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Venaria Reale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    La <strong>reggia di Venaria</strong> è considerata la Versailles italiana: è un’antica residenza di caccia dei Savoia costruita nel XVII secolo, tornata agli antichi fasti nel 2007. Sebbene alla reggia di Venaria gli interni siano vuoti, la magnificenza delle sue sale - in cui spicca la stupenda 
                    <b> Galleria di Diana</b>, non lasciano rimpiangere gli antichi fasti. Imprescindibile la visita ai giardini della reggia di Venaria, con i suoi giochi di verde e di fontane, recentemente restaurati per il passeggio degli ospiti. Nella limonaia e nelle antiche scuderie si tengono mostre 
                    temporanee che mescolano l’arte antica e contemporanea.
                </p>
                <p>
                    Reggia di Venaria, come arrivare: si trova a circa 10 chilometri da Torino ed è facilmente raggiungibile in auto percorrendo la tangenziale Torino Nord con uscita Venaria. C’è anche una navetta che collega il centro città con la reggia.
                </p>
            </div>
            <div className='row d-flex justify-content-center mx-0 mb-4'>
                <Card style={{ width: '18rem' }}>
                    <Link href='/visite/torino/reggia_di_venaria_reale/la_reggia' className='text-decoration-none color_link'>
                        <CardImg variant="top" src={la_reggia} />
                        <CardBody>
                            <CardTitle className='text-center'>La Reggia</CardTitle>
                        </CardBody>
                    </Link>
                </Card>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5602.40182665168!2d7.615747220203831!3d45.13675031500373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788694b0c618b93%3A0xfc779871c7ca5bed!2sReggia%20di%20Venaria!5e1!3m2!1sit!2sit!4v1712578600580!5m2!1sit!2sit"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className='mx-auto mappa'
                ></iframe>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
