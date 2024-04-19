import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_Vecchio(props) {
    return (
            <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palazzo_vecchio' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Vecchio</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Uno dei simboli di Firenze</h2>
                    <p>
                        Sede del potere politico da oltre sette secoli (oggi ospita gli uffici del sindaco) e superbo esempio di architettura medievale, marca in maniera inconfondibile il panorama fiorentino. L’appuntita Torre di Arnolfo, che svetta dall’alto dei suoi 94 m, e la statua del David, 
                        ritta davanti al portone, sono da sempre il biglietto da visita della città. Dopo aver scattato le foto d’ordinanza, entrate nell’immenso salone, tra le stanze segrete e gli appartamenti privati dei Medici: scoprirete il dietro le quinte di quello spettacolo impareggiabile 
                        che è stata la Firenze del Rinascimento.
                    </p>
                </div>
                <div>
                    <h2 className="color-subtitle">Da sede dei priori a residenza dei signori</h2>
                    <p>
                        I lavori per la costruzione del palazzo, realizzato per ospitare i magistrati cittadini (i ‘priori’) che governavano la città, cominciarono nel 1299. Il progettista, Arnolfo di Cambio, che già aveva disegnato la Cattedrale e la Basilica di Santa Croce, ideò un edificio che 
                        era una via di mezzo tra un palazzo nobiliare e un castello inespugnabile, con i merli, il bugnato esterno e l’alta torre d’avvistamento. Alla fine del Quattrocento il monaco ferrarese Girolamo Savonarola ordinò numerose modifiche che stravolsero gli interni, ma fu solo a 
                        partire dal 1540, quando Cosimo I de’ Medici vi andò ad abitare, che il palazzo (ampliato sul retro) acquisì l’aspetto che possiede ancora oggi.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.5328766758362!2d11.25540913445635!3d43.76938768184939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400e57893f9%3A0xe4e22be754c65787!2sPalazzo%20Vecchio!5e1!3m2!1sit!2sit!4v1713192512935!5m2!1sit!2sit"
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
