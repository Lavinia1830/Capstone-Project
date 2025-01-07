import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_San_Marco(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_san_marco' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di San Marco</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Un po' di storia della Basilica di San Marco</h2>
                    <p>
                        Originariamente questo edificio doveva essere un'estensione del Palazzo Ducale. La costruzione della <strong>Basilica di San Marco</strong> iniziò nell'anno 828 e finì nell'anno 832 per ospitare il corpo dell'Apostolo San Marco portato da Alessandria come protettore della città. 
                        È stato un fatto fondamentale per la costituzione di Venezia come sede episcopale indipendente.
                    </p>
                    <p>
                        La costruzione dell'attuale basilica cominciò nel 1063 in stile bizantino per rappresentare il potere della prospera Repubblica veneta. Questa basilica fu costruita rispettando il modello di due basiliche dell'antica città imperiale di Bisanzio con una pianta centrale a forma di 
                        croce greca, cinque grandi cupole e una particolare miscela di arte antica e orientale.
                    </p>
                    <p>
                        Nel corso del tempo la Basilica subì varie modifiche, in particolare per quanto riguarda la sua decorazione, archi gotici a punta, arco di Sant'Alipio, sculture del XVII e XVIII secolo e mosaici della facciata principale, bassorilievi che rappresentano le professioni ed i segni 
                        zodiacali del cancello centrale, i marmi provenienti dall'Oriente, le figure porfite dei Tetrarchi ei cavalli di San Marco. Il risultato è una splendida e riuscita combinazione di stili.
                    </p>
                    <p>
                        La basilica come la conosciamo oggi, ha una pianta a croce latina con cinque cupole. Divenne la cattedrale della città nel 1807 e ha più di 4.000 metri quadrati di mosaici, molti dei quali appartenenti al XIII secolo, ha anche 500 colonne del III secolo.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Cosa è oggi la Basilica di San Marco?</h2>
                    <p>
                        La <strong>Basilica di San Marco</strong> è attualmente e da sempre il centro della vita pubblica e religiosa di Venezia. Ai giorni nostri, questa basilica accoglie ogni anno centinaia di migliaia di visitatori essendo un punto d’interesse storico molto particolare dato che era il 
                        luogo dove i duchi di Venezia venivano consacrati.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Curiosità della Basilica di San Marco</h2>
                    <p>
                        Sapevi che durante l'acqua alta si può visitare la basilica camminando sulle passerelle? Quando il mare Adriatico inonda Venezia, l'alta marea arriva a circa 90 cm al di sopra del suo livello normale. In caso di alluvione tempestiva, in città suonano gli allarmi e alcune passerelle 
                        sono collocate nelle zone di maggiore traffico. La parte più bassa della città è Piazza San Marco e il suo territorio è il primo ad essere inondato, ma non ti preoccupare, puoi comunque potrai visitare questa spettacolare basilica!
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Perché visitare la Basilica di San Marco?</h2>
                    <p>
                        La Basilica di San Marco è il più importante tempio religioso della città di Venezia, è situato in Piazza San Marco, accanto al Palazzo Ducale, ed è sempre stato il centro della vita pubblica e religiosa della città.
                    </p>
                    <p>
                        La Basilica di San Marco è una delle più belle cattedrali in Europa e in tutto il mondo. Questa basilica è frutto di diversi stili, anche col passare degli anni e delle ristrutturazioni, conserva ancora aspetti orientali che possono lasciare visitatori stupiti per la sua particolarità 
                        ed il suo splendore.
                    </p>
                    <p>
                        La Basilica di San Marco è una combinazione intrigante di stili architettonici e d'arte, è la testimonianza della ricchezza e del potere della Serenissima Repubblica di Venezia, nonché delle avventure coraggiose dei suoi abitanti nel Mediterraneo come mercanti e conquistatori.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Come posso visitare la Basilica di San Marco?</h2>
                    <p>
                        L’ingresso alla Basilica di San Marco è gratuito ma la fila all’ingresso è generalmente molto lunga, si consiglia quindi di prenotare una visita guidata in modo da evitare inutili attese in coda.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.1872697842814!2d12.33810612029019!3d45.434530222234514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1d764526cbf%3A0xa12d52783aca205!2sBasilica%20di%20San%20Marco!5e1!3m2!1sit!2sit!4v1712937431633!5m2!1sit!2sit"
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
