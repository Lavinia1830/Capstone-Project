import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Palazzo_Cazuffi(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palazzo_cazuffi' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Cazuffi</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La costruzione del palazzo si colloca nel XVI secolo. L'edificio è situato sulla strada che in epoca rinascimentale era il collegamento più breve fra i punti più importanti della città, la cattedrale e il <Link href='/visite/trento/castello_del_buonconsiglio' className='text-decoration-none
                        color_link'>Castello del Buonconsiglio</Link>, denominata Contrada San Benedetto. Qui si trovavano numerose residenze delle famiglie notabili della città, fra cui i Pilati, Baldovini, Festi, Alberti. Soggiornarono nel palazzo alcuni prelati e nobili che partecipavano al 
                        <Link href='/visite/trento/concilio' className='text-decoration-none color_link'> Concilio di Trento</Link>. Nel 1545 il proprietario Bartolomeo Cazuffi affittò l'edificio al vescovo di Piacenza Catalano Trivulzio; nel 1551 soggiornò in questa residenza, ospite di Iseppo Cazuffi, Francisco de 
                        Vargas, fiscale della corona di Castiglia e giurista dell'imperatore.[1][3] L'edificio è stato notevolmente rimaneggiato prima nella seconda metà dell'Ottocento, quando furono aperti i quattro portali in stile neorinascimentale; un ulteriore intervento si ebbe anche nel Novecento.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.383182171107!2d11.119080676626568!3d46.067744492966945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714afd63f31d%3A0xb8c1db97a5234d34!2sCasa%20Cazuffi%20-%20Rella!5e1!3m2!1sit!2sit!4v1712928111538!5m2!1sit!2sit"
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
