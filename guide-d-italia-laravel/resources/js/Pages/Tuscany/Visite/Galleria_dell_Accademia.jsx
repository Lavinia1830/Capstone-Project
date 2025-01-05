import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Galleria_dell_Accademia(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='galleria_dell_accademia' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Galleria dell'Accademia</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La lunga fila scalpitante che ogni giorno si allinea davanti alla Galleria dell’Accademia ha una sola cosa in testa: ammirare da vicino quel ragazzone corpulento e nudo, con lo sguardo preoccupato e fiero, che Michelangelo scolpì nel 1504 e che risponde al nome di <i>David</i>. 
                        E sarà la vostra grande fortuna, perché potrete girovagare senza fare a spintoni per le altre sale di questo museo, creato alla fine del Settecento per fornire ispirazione agli alunni della vicina <b>Accademia delle Belle Arti</b>. Quindi, prima di presentarvi al cospetto 
                        dell’eroe biblico, scansate la marea umana, infilatevi nella <b>Sala del Colosso</b> e vagate attorno al modello in terracotta del <i>Ratto delle Sabine</i> del Giambologna. L’enorme <i>Deposizione dalla Croce</i>, dipinta tra il 1504-7 dal Perugino, probabilmente vi farà 
                        venire il mal di mare per il movimento incessante a cui, da oltre cinque secoli, obbligai personaggi indaffarati intorno alla croce; ma potrete sempre cercare conforto e stabilità nella serena <i>Pala di Vallombrosa</i>, un’Assunta circondata da deliziosi angeli e santi che il 
                        maestro di Raffaello dipinse nel 1500, o nella <b>Madonna del Mare</b> attribuita al Botticelli. La <i>Tebaide</i> (1460) di Paolo Uccello, invece, è sconcertante: il paesaggio brullo, incomprensibile, dai piani prospettici sovrapposti e disordinati, vi ricaccerà in mezzo a un 
                        mare in burrasca. Non preoccupatevi, comunque, perché sarà giunto il momento di andare dal <i>David</i>. Sta lì, su un piedistallo, alla fine della <b>Galleria dei Prigioni</b>, preceduto dalle statue michelangiolesche non finite che avrebbero dovuto ornare il monumento funebre 
                        di papa Giulio II. A Roma i <i>Prigioni</i> non arrivarono mai, né tantomeno riuscirono a liberarsi dal marmo dal quale sembra stiano cercando di evadere. L’assassino di Golia, di contro, qui c’è arrivato alla fine dell’Ottocento, dopo qualche secolo trascorso in Piazza della 
                        Signoria, dove oggi campeggia una sua bella copia. Diciannove tonnellate di peso, oltre 5 m di altezza, varie fratture a braccia, mani e piedi causate dagli uomini e dal tempo, il <i>David</i> incute timore e soggezione. Girategli attorno, notate la plasticità dei muscoli tesi, cercate 
                        di decifrare il suo sguardo:ha già abbattuto il nemico oppure è in procinto di affrontarlo? Quale che sia la vostra risposta (i critici sono discordi), continuate a esplorare il museo. Se avete poco tempo a disposizione, potete lasciarvi alle spalle le <b>Sale della Tribuna</b>, ai 
                        lati del <i>David</i>, con varie opere manieriste, e dirigervi verso le <b>Sale del Gotico Fiorentino</b>, zeppe di abbaglianti polittici e crocifissi giotteschi: ci sono quelli di Bernardo Daddi, Taddeo Gaddi, Pacino di Bonaguida e dei fratelli Matteo, Jacopo e Nardo di Cione. 
                        Al piano superiore, infine, prima di tuffarvi nella strabiliante <b>collezione di strumenti musicali</b> (le star sono un violino, una viola e un violoncello di Stradivari), non perdetevi il mirabolante <i>Cristo in pietà</i> (1400) del Maestro della Madonna Strauss, circondato 
                        da un collage di simboli della Passione e con Maria e la Maddalena che baciano le mani morte di Gesù.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.4275915025378!2d11.257912345036093!3d43.776773710583974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a558cbc91b927%3A0x6d4cf7aefa41a2c7!2sGalleria%20dell&#39;Accademia!5e1!3m2!1sit!2sit!4v1713194504711!5m2!1sit!2sit"
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
