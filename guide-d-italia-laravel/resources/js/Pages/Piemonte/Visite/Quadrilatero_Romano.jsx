import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Quadrilatero_Romano(props) {
  return (
    <>
        <Head title="Quadrilatero Romano"/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='quadrilatero_romano' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Quadrilatero Romano</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Quadrilatero Romano</strong> è un quartiere della città di <b>Torino</b> caratterizzata da un passato molto antico e da 
                        una <b>moderna riqualificazione</b> che lo ha reso uno dei centri della movida notturna della città.
                    </p>
                    <p>
                        Il <strong>Quadrilatero</strong> corrisponde ad una porzione della città in cui prima sorgeva un antico insediamento romano: da un 
                        punto di vista geografico si colloca tra le <b>Porte Palatine</b>, <b>via Garibaldi e corso Siccardi</b> e si presenta come un 
                        luogo caratterizzato da locali e botteghe alla moda. Fino a non molto tempo fa la zona veniva considerata come una delle zone più 
                        degradate della città ma attualmente ricorda molto il quartiere latino di Parigi, riqualificato come una zona suggestiva e vivace.
                    </p>
                    <p>
                        La nascita del quartiere risale al <b>28 a.C</b> e ancora adesso sono visibili i perimetri dell’antica colonia romana: di assoluta 
                        importanza è la <b>Porta Palatina</b> che serviva per entrare nella colonia tramite il cardo maximus e che corrisponde 
                        all’attuale <b>Via San Tommaso</b>.
                    </p>
                    <p>
                        L’asse est-ovest, detto <i>decumano maximo</i>, era invece l’attuale <b>Via Garibaldi</b> che ai tempi veniva chiamata ‘’<b>via 
                        Dora Grossa</b>’’ in quanto, al centro, passava un corso d’acqua.
                    </p>
                    <p>
                        Secondo alcuni storici, l’odierna <b>Piazza Palazzo di Città</b>, detta anche “piazza delle Erbe”, per via del mercato chi vi si 
                        teneva, sarebbe stata la sede del <i>forum</i> della cittadina romana: i resti dell’antica colonia romana sono ovunque nel 
                        Quadrilatero Romano, visibili grazie a dei resti di mura presenti nel quartiere.
                    </p>
                    <h2 className="color-subtitle text-center">La riqualificazione</h2>
                    <p>
                        Già alla fine degli anni Settanta del secolo Novecento, la Città di Torino inizia un progetto di riqualificazione del territorio e 
                        negli anni Novanta, grazie ad una stretta collaborazione tra il pubblico ed il privato, la <b>trasformazione del quadrilatero ha 
                        successo</b> con l’insediamento di <b>attività commerciali</b>, <b>botteghe</b>, <b>locali e caratteristici ristorantini</b>. Il 
                        Quadrilatero Romano oggi è diventato un luogo di riferimento per il <b>tempo libero e la vita notturna</b>. Costituisce un esempio 
                        di <b>movida sostenibile</b> e di buone pratiche.
                    </p>
                    <h2 className="color-subtitle text-center">Cosa vedere</h2>
                    <p>
                        Il <strong>Quadrilatero Romano</strong>, oltre ad essere un luogo di movida, è anche ricco di <b>monumenti e opere storiche</b> di 
                        grande valore. Sono presenti chiese, santuari, piazze e palazzi, in particolar modo la <p>Piazza della Consolata</p> con l’omonimo 
                        Santuario, incredibile opera barocca di <b>Guarino Guarini</b> e di <b>Filippo Juvarra</b>, la <b>Chiesa di San Lorenzo</b>, 
                        la <b>Piazzetta Corpus Domini</b> caratterizzata dal <b>Piercing</b>, un anello d’acciaio attaccato allo spigolo all’ultimo piano 
                        di un palazzo del Settecento. Un’esperienza assolutamente da fare è assaggiare il famoso <b>bicerin</b>, storica bevanda a base di 
                        cioccolato, caffè e crema di latte.
                    </p>
                    <p>
                        Il <strong>Quadrilatero Romano</strong>, dunque, è una <b>zona di Torino ricca di storia</b>, dai Romani al Medioevo, passando per 
                        il Rinascimento. È un luogo dove trascorrere deltemposeduti in un dehor all’aperto, sorseggiando una bevanda in uno dei quartieri 
                        più caratteristici della città.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17152.354006989957!2d7.660663199570825!3d45.07516165458207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6d683ebe6d%3A0x7e2d427ce9e141c7!2sQuadrilatero%2C%20Torino%20TO!5e1!3m2!1sit!2sit!4v1715953224226!5m2!1sit!2sit"
                        width="600" 
                        height="450" 
                        style={{border:0}}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                        className='mx-auto mappa'
                    >
                    </iframe> 
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    </>
    
  )
}
