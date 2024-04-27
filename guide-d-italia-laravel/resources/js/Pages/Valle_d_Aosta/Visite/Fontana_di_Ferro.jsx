import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/inertia-react';

export default function Fontana_di_Ferro(props) {
    return (
        <>
            <Head title="Fontana di Ferro"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fontana_di_ferro' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>La Fontana di Ferro</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            All’inizio del Prato di Sant’Orso c’è <strong>l’antica fontana di Ferro</strong>, tutt’ora funzionante.
                        </p>
                        <p>
                            Dalla fontana di Ferro, guardando verso il Prato di Sant’Orso, potrai godere di un bellissimo panorama. Ancora più bello nelle giornate terse, quando da qui puoi vedere anche il Gran Paradiso e i suoi ghiacciai, oltre alla Valnontey, una vallata secondaria della Valle di Cogne.
                        </p>
                        <p>
                            <strong>La fontana di Ferro</strong> <b>risale al 1816</b>, quando <b>fu ideata e costruita da César-Emmanuel Grappein a una manciata di metri da qui</b> nella piazza di fronte alla Casa dell’Orologio. Lo scopo della fontana era, oltre quello di portare acqua potabile in questo 
                            punto della città, anche quello di celebrare l’attività mineraria di Cogne. Grappein si stava infatti apprestando a dar vita alla gestione comunitaria della vicina miniera di ferro di Liconi.
                        </p>
                        <p>
                            Quest’opera è composta da otto placche che circondano la vasca ed è sormontata da una croce che porta la data del 1809 e da cui sgorga l’acqua. Tutta la struttura è realizzata in ghisa ed ha un peso di circa 17 quintali. Inizialmente posizionata di fronte alla Casa dell’Orologio, fu 
                            spostata in piazza Chanoux tra le due guerre mondiali ed infine qui verso il 1970.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.2746413035031!2d7.355307758739631!3d45.607939491360824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788e172fc20540d%3A0x3979ef3a21acc62a!2sFontana%20in%20ferro%20del%20dottor%20Grappein!5e1!3m2!1sit!2sit!4v1714213915446!5m2!1sit!2sit"
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
        </>
    )
}
