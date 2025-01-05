import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Museo_Civico_Casa_Cavassa(props) {
    return (
        <>
            <Head title="Museo Civico Casa Cavassa"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='museo_civico_casa_cavassa' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Civico Casa Cavassa</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Casa Cavassa</strong>, abitazione di proprietà di <b>Galeazzo Cavassa</b> e del figlio <b>Francesco</b>, entrambi eredi di una 
                            famiglia originaria di <b>Carmagnola</b> e vicari generali del marchese di <b>Saluzzo</b>, fu edificata prima della fine del 
                            secolo <b>XV</b> e, a partire dal <b>1505</b>, divenne di esclusiva proprietà di Francesco, il quale volle che l’edificio fosse decorato 
                            con ornamenti che prendessero ispirazione dai modelli figurativi del <b>Rinascimento</b> e dalle nuove tendenze stilistiche in voga 
                            nella <b>pianura padana</b>. Nell’<b>Ottocento</b>, per volontà del marchese <b>Emanuele Tapparelli D’Azeglio</b> (1816-1890), nipote 
                            dello scrittore <b>Massimo</b>, diplomatico cosmopolita, cultore di arte e antiquariato, che nel <b>1883</b> acquistò l’edificio e 
                            iniziò un ingente lavoro di restaurazione, Casa Cavassa divenne un <b>museo</b>. Al momento della morte del marchese, nel <b>1890</b>, 
                            l’amministrazione comunale ne ereditò l’edificio con tutti gli arredi e oggetti d’arte in esso conservati: oggi Casa Cavassa è 
                            il <b>museo civico</b> della città di <b>Saluzzo</b>. Sul portone del palazzo è posto lo <b>stemma di Francesco Cavassa</b>, composto 
                            dall’immagine scolpita di un pesce (il cavedano, pesce d’acqua dolce che risale la corrente, chiamato "chavasson" nel dialetto del 
                            marchesato e "quajastr" nel dialetto piemontese. A metà del fregio è inciso a lettere maiuscole romane il motto della famiglia <b>Cavassa: 
                            DROIT QUOI QUIL SOIT</b>.
                        </p>
                        <p>
                            Una volta superato l’ingresso, il <b>cortile interno</b>, impreziosito da tre <b>bifore</b> di carattere <b>gotico</b>, è caratterizzato 
                            da un <b>ballatoio in legno</b>, decorato con gli <b>affreschi a grisaille</b> che raffigurano le <b>Fatiche di Ercole</b> e la pala 
                            raffigurante la <b>Madonna della Misericordia</b>, eseguite tra il <b>1506</b> e il <b>1511</b> da <b>Hans Clemer</b>.
                        </p>
                        <p>
                            Il museo si articola in <b>quindici stanze</b> differenti, accomunate da soffitti in legno dipinti e pareti decorate, e ospita <b>opere 
                            d’arte di grande importanza storica e artistica</b>. Il museo conserva inoltre il <b>coro ligneo</b> in stile <b>tardogotico</b> proveniente 
                            dalla <b>Cappella Marchionale di Revello</b>; una <b>culla</b>, risalente al <b>1560</b>, precedentemente situata nel <b>castello di 
                            Lagnasco</b>, a cui si aggiungo i <b>ritratti cinquecenteschi di Carlo Emanuele I di Savoia</b> e della moglie.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.3741575722423!2d7.485354337101234!3d44.64436807617178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cd49019a9b3d6d%3A0xee68cf3fc10a0eae!2sMuseo%20Civico%20Casa%20Cavassa!5e1!3m2!1sit!2sit!4v1717078087226!5m2!1sit!2sit"
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
