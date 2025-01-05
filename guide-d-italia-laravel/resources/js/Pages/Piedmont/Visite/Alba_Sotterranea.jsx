import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Alba_Sotterranea(props) {
    return (
        <>
            <Head title="Alba Sotterranea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='alba_sotterranea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Alba Sotterranea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Alba</b> è una città con una storia antica e affascinante. Situata nella regione del Piemonte, è conosciuta non solo per i 
                            suoi vini pregiati e tartufi, ma anche per il suo <b>patrimonio archeologico</b>. La città sotterranea di Alba è un complesso 
                            di <b>strutture romane</b> e medievali che si estendono sotto il livello stradale moderno.
                        </p>
                        <p>
                            Nel corso dei secoli, Alba ha visto passare numerose civiltà, dai <b>Liguri</b> e <b>Romani</b> fino ai <b>Medioevali</b>. 
                            Gli scavi archeologici hanno rivelato resti di antiche mura, pavimentazioni, e strutture abitative. Tra i siti più importanti 
                            vi sono le <b>domus romane</b>, case aristocratiche dell'epoca, e i resti delle <b>torri medievali</b>.
                        </p>
                        <p>
                            La scoperta più straordinaria è stata la <b>rete di cunicoli</b> e passaggi sotterranei che collegano vari edifici e piazze 
                            della città. Questi passaggi furono utilizzati nel corso dei secoli per scopi difensivi e di trasporto. Alcuni di questi 
                            tunnel risalgono all'epoca romana, mentre altri furono ampliati durante il Medioevo.
                        </p>
                        <p>
                            Un'altra scoperta significativa è stata quella dei <b>mosaici</b> e <b>affreschi</b> che decorano alcune delle antiche 
                            strutture. Questi reperti forniscono preziose informazioni sulla vita quotidiana e sulle tradizioni artistiche delle epoche 
                            passate.
                        </p>
                        <p>
                            Oggi, la città sotterranea di Alba è una <b>attrazione turistica</b> di grande richiamo. I visitatori possono esplorare 
                            i <b>resti archeologici</b> grazie a tour guidati che offrono una panoramica della storia e dell'evoluzione della città. 
                            La conservazione e la valorizzazione di questo patrimonio sono fondamentali per comprendere la ricca storia di Alba e del 
                            territorio circostante.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1283.1770192120318!2d8.034828267560012!3d44.70096435321196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b342a65a27ef%3A0x41e0c604c792e3f1!2sAlba%20Sotterranea%20-%20Ambiente%20%26%20Cultura%20(prenotazione%20in%20anticipo%20obbligatoria)!5e1!3m2!1sit!2sit!4v1722948691500!5m2!1sit!2sit"
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
