import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_della_Scuola_e_dell_Educazione_Popolare(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_di_scuola_e_dell_educazione_popolare' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo della Scuola e dell'Educazione Popolare</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il Museo è diviso in cinque sezioni, tre delle quali hanno un ordinamento cronologico e delineano la storia della scuola e delle istituzioni scolastiche a partire dall’Unità d’Italia fino ai giorni odierni; le altre due sezioni sono dedicate alla cultura materiale scolastica 
                        e ai protagonisti della scuola.
                    </p>
                    <p>
                        L’esposizione, oltre a essere contraddistinta da rare collezioni di riviste per gli insegnanti, periodici per l’infanzia, libri di testo, è arricchita da un’ampia e variegata collezione, talvolta anche digitalizzata, di ausili didattici come quaderni, cartelle, calamai, compassi, 
                        mappe geografiche, pallottolieri, frazionari, materiali scientifici per l’insegnamento delle scienze naturali, della chimica e della fisica nonché suppellettili come i banchi di scuola.
                    </p>
                    <p>
                        Le collezioni sono, inoltre, integrate dal patrimonio documentale dell'”Archivio della memoria” costituito da video interviste realizzate con maestre e maestri che, in forma autobiografica, ripercorrono con la memoria le loro esperienze professionali, e da foto d’epoca.
                    </p>
                    <p>
                        La ricostruzione di un’aula della prima metà del ‘900 completa il quadro espositivo realizzato attraverso il ricorso a collezioni che sono state incrementate grazie a donazioni e prestiti privati e pubblici.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1050.6313600733984!2d14.664271989930272!3d41.55349396086038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a0b3154ec816b%3A0x6c4a21915a171806!2sMuseo%20della%20scuola%20e%20dell&#39;educazione%20popolare%20-%20MuSEP!5e1!3m2!1sit!2sit!4v1713342728594!5m2!1sit!2sit"
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
