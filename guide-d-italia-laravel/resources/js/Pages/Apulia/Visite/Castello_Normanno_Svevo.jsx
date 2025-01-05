import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Castello_Normanno_Svevo(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='castello_normanno_svevo' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello svevo di Bari</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">Il castello svevo di Bari, la corte di due sovrane illuminate</h2>
                    <p>
                        Non potete dire di conoscere <Link href='/destinazioni/puglia/bari' className='text-decoration-none color_link'>Bari</Link> se non visitate il suo <b>castello</b>, <b>l’edificio simbolo della città</b>, a ridosso della Città vecchia, tra la darsena vecchia e la cattedrale.<br/>
                        Voluto dall’<b>imperatore Federico II</b> nel XIII secolo su ciò che restava di una fortificazione normanna, fu più volte trasformato, fino a diventare, nel suo periodo d’oro, <b>sede di una raffinata corte rinascimentale retta da due donne</b>.<br/>
                        Oggi è sede di un museo e salotto culturale della città.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Una passeggiata lunga un millennio</h2>
                    <p>
                        La visita all’imponente fortezza circondata dal fossato che domina il centro storico barese è una passeggiata lunga un millennio in compagnia di grandi imperatori e regine.
                    </p>
                    <p>
                        Il nucleo centrale è di <b>origine bizantino-normanna</b>, ma fu completamente trasformato da <b>Federico II</b> tra il 1233 e il 1240, restaurato da <b>Carlo d’Angiò</b> nella seconda metà del XIII secolo, mentre i baluardi a scarpata con i torrioni angolari furono aggiunti nel 
                        periodo aragonese durante il XVI secolo.
                    </p>
                    <p>
                        Quando gli aragonesi lo donarono alla famiglia ducale degli Sforza, la rocca fu ampliata e abbellita dall’intervento di due donne, madre e figlia: <b>Isabella di Aragona</b>, <b>vedova di Gian Galeazzo Sforza</b>, <b>duchessa di Bari</b> e <b>Bona Sforza</b>. Il castello divenne 
                        sede di una corte che niente aveva da invidiare a quelle delle signorie del Nord. Dobbiamo a loro la scenografica doppia rampa di scale che collega il pian terreno ai saloni del piano nobile.
                    </p>
                    <p>
                        Durante la dominazione borbonica, tuttavia, per il castello iniziò un lungo periodo di decadenza ed abbandono, durante il quale fu adibito a carcere e a caserma. Solo di recente, nel 2017, dopo lunghi lavori di restauro e valorizzazione, il castello è stato aperto al pubblico come 
                        sede museale.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Al piano nobile, mostre ed esposizioni permanenti</h2>
                    <p>
                        Il piano nobile del castello è articolato in vari saloni che vengono utilizzati per <b>mostre temporanee</b>, <b>eventi culturali</b> e per le <b>esposizioni permanenti</b>: nella sala aragonese è allestita una mostra fotografica sulla storia del restauro del castello; la sala 
                        angioina ospita la collezione archeologica delle ceramiche da mensa (XV-XVIII secolo) provenienti dagli scavi del “butto” (oggi lo chiameremmo discarica) che testimoniano un aspetto della vita di corte, mentre nella cosiddetta Torre dei Minorenni è esposta una collezione di materiali 
                        preziosi e gioielli provenienti da vari luoghi della Puglia.
                    </p>
                </div>
                <div className="margin">
                    <h2 className="color_subtitle">La Gipsoteca del Castello di Bari</h2>
                    <p>
                        Al pianterreno del Castello, nelle belle sale con gli archi a ogiva, è ospitata la <b>Gipsoteca</b>, un’interessante <b>raccolta di riproduzioni in gesso di sculture di alcuni monumenti pugliesi</b> realizzate nel 1911 dagli artisti Pasquale Duretti e Mario Sabatelli per il padiglione 
                        della Puglia all’Esposizione Etnografica organizzata a Roma in occasione del Cinquantenario dell’Unità d’Italia.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.6014292483962!2d16.865354645305185!3d41.12835099804625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e8621723fe7f%3A0xd7dccf940ba920c2!2sCastello%20Svevo%20di%20Bari!5e1!3m2!1sit!2sit!4v1713427534032!5m2!1sit!2sit"
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
