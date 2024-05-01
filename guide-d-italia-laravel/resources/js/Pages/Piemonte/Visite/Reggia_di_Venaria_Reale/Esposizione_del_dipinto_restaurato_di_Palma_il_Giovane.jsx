import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Esposizione_del_dipinto_restaurato_di_Palma_il_Giovane(props) {
    return (
        <>
            <Head title="Esposizione del dipinto restaurato di Palma il Giovane"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='esposizione_del_dipinto_restaurato_di_palma_il_giovane' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Scuderia Juvarriane</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <h3 className='text-center color-subtitle fst-italic'>
                            "Celebrazione della vittoria della Battaglia di Lepanto", presso la Sacrestia della Cappella di Sant'Uberto
                        </h3>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            In occasione del quattordicesimo anno di apertura, nel 2021 La Venaria Reale ha presentato il restauro del <b>prezioso dipinto di Palma il Giovane</b> (1548/50 - 1628) dedicato <i>alla Celebrazione della vittoria della 
                            battaglia di Lepanto del 7 ottobre 1571</i>, allestito presso la Sacrestia della Cappella di Sant’Uberto.
                        </p>
                        <p>
                            Si tratta di un quadro di dimensioni gigantesche (335 x 671,5 cm), in prestito dalla Villa San Remigio di Pallanza sul lago Maggiore, acquistata nel 1977 dalla Regione Piemonte e data in comodato alla Città di Verbania.
                        </p>
                        <p>
                            L’opera, realizzata per la Cappella del Rosario della chiesa di San Domenico di Brescia distrutta nel 1883, <b>a 450 anni dall’evento che raffigura è ritornata splendidamente leggibile grazie ad un accurato intervento</b> che 
                            per quasi 2 anni ha impegnato 10 restauratori del <a href='https://www.centrorestaurovenaria.it/celebrazione-della-vittoria-della-battaglia-di-lepanto' className='text-decoration-none color_link'>Centro Conservazione e Restauro 
                            “La Venaria Reale”</a>.
                        </p>
                        <p>
                            L'esposizione è inclusa nel percorso di visita ed è visitabile con i biglietti <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/prezzi/reggia_giardini_castello_della_mandria' 
                            className='text-decoration-none color_link'>Reggia</Link> e <Link href='/visite/piemonte/torino/reggia_di_venaria_reale/prezzi/tutta_in_un_reggia' className='text-decoration-none color_link'>Tutto in una Reggia</Link>.
                        </p>
                        <hr />
                        <p>
                            Il restauro è stato sostenuto da: <br/>
                            Ministero della Cultura<br/>
                            Fondazione Cassa di Risparmio di Torino<br/>
                            Consorzio delle Residenze Reali Sabaude<br/>
                            Comune di Verbania
                        </p>
                        <p>
                            Sotto l’Alta Sorveglianza della Soprintendenza Archeologia, Belle Arti e Paesaggio <br/>
                            per le province di Biella, Novara, Verbano-Cusio-Ossola e Vercelli.
                        </p>
                        <hr />
                        <p>
                            Per approfondire l'opera vai sulla pagina della Webzine <a href='https://webzine.lavenaria.it/lopera-del-mese/venezia-a-venaria-unopera-ritrovata-di-palma-il-giovane/' className='text-decoration-none color_link'>"Venezia a Venaria. 
                            Un’opera ritrovata di Palma il Giovane"</a>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
