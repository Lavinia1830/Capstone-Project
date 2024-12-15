import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Pinacoteca_Francesco_Borgogna(props) {
    return (
        <>
            <Head title="Pinacoteca Francesco Borgogna"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='pinacoteca_francesco_borgogna' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Pinacoteca Francesco Borgogna</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Nell’ottobre del 1908</b>, dopo aver ottenuto il riconoscimento regio dell’ente morale l’anno precedente, il Comune e il Consiglio di Amministrazione presieduto dal nipote del fondatore, 
                            l’avvocato Francesco Borgogna e diretto dall’amico Vincenzo Laviny, decidono l’<b>apertura al pubblico del piano terreno del museo “Geometra Francesco Borgogna”</b>. Davanti al Museo viene 
                            posto il busto bronzeo di Antonio Borgogna, realizzato nel 1910 dallo scultore vercellese Francesco Porzio.
                        </p>
                        <p>
                            <b>Tra il 1912 e il 1915 viene ampliato l’edificio</b> per l’esigenza di maggiori spazi a disposizione e per la sicurezza delle opere. Nell’area del giardino l’ingegnere Giuseppe Leblis 
                            costruisce un grande ambiente contiguo alle due ali basse del palazzo, edificato secondo i nuovi criteri museografici. Si tratta di un grande salone con due ali, a doppia altezza, privo di 
                            aperture sulle pareti, soffitto piano a cassettoni e illuminazione zenitale.
                        </p>
                        <p>
                            Il nuovo spazio, inaugurato nel maggio del 1915, facilita una disposizione meno affollata della collezione per favorire la visita del pubblico: vengono mantenuti gli allestimenti di alcune 
                            sale (la sala araba e la libreria) e raggruppate le sculture e i bronzi.
                        </p>
                        <p>
                            <b>Nel 1932</b> di nuovo l’ingegner Giuseppe Leblis realizza un <b>secondo ampliamento del museo e progetta una nuova facciata mai realizzata</b>. Nello stesso anno la direzione del museo 
                            passa a Vittorio Viale (1891-1977), importante archeologo e museografo, originario di Trino vercellese, che sarà il direttore del Museo Civico di Torino. Egli riordina la collezione di 
                            pittura sulla base dei nuovi criteri museologici e museografici. <b>Il Museo Borgogna viene destinato a pinacoteca cittadina</b>, accogliendo nei suoi spazi anche <b>dipinti e affreschi in 
                            deposito</b>, provenienti principalmente dalla pregevole raccolta di Arte del Territorio vercellese dell’Istituto di Belle Arti e da chiese della città.
                        </p>
                        <p>
                            Dalla primitiva collezione si espongono quadri antichi e qualche opera dell’Ottocento. Mobili, sculture, bronzi, oggetti di arte decorativa, dipinti ottocenteschi vengono invece portati in 
                            deposito oppure assegnati al Museo Leone.
                        </p>
                        <p>
                            <b>Disallestito per ragioni di sicurezza durante la guerra e trascurato nel periodo postbellico</b>, diventa principalmente fruito come sede di importanti mostre (1946 su Ferdinando Rossaro, 
                            1950 sul Sodoma, 1952 sulla pittura dell’Ottocento nelle collezioni biellesi, 1956 su Gaudenzio Ferrari, 1961 su Ambrogio Alciati)
                        </p>
                        <p>
                            <b>Nei primi anni Sessanta il museo viene riordinato a cura del nuovo Presidente Avv</b>. Francesco Ferraris e sotto la direzione scientifica della Soprintendenza ai Beni Artistici e Storici 
                            del Piemonte. Al piano terreno sono inserite altre opere provenienti dal territorio vercellese e il primo piano viene aperto all’esposizione della pittura fiamminga e olandese e 
                            dell’Ottocento italiano e straniero.
                        </p>
                        <p>
                            <b>Nel 1985 viene recuperato e riaperto anche il secondo piano del palazzo</b>, con una selezione di arredi, oggetti e arti decorative della casa-museo di Antonio Borgogna. Il Museo ha 
                            garantito l’accoglienza, la tutela e l’esposizione di numerose opere, tra dipinti e sculture, provenienti da privati e da enti.
                        </p>
                        <p>
                            <b>A partire dal 2000 e finalizzati alla celebrazione, nell’ottobre del 2008, del primo centenario di apertura al pubblico del Museo, si sono succeduti importanti restauri</b>, non solo 
                            delle opere ma anche delle decorazioni delle stanze; si sono recuperate opere dai depositi sia interni che presso altri enti e si è giunti, con un’accurata campagna di schedatura, al 
                            riallestimento di parte della originaria casa-museo e dell’intero percorso espositivo. In parallelo si sono attuati i lavori di adeguamento impiantistico, tecnico e di sicurezza.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435.9757306427317!2d8.42652006143922!3d45.325522552995004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47864c891f315787%3A0xef771a2322d09e7b!2sMuseo%20Borgogna!5e1!3m2!1sit!2sit!4v1716465854954!5m2!1sit!2sit"
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
