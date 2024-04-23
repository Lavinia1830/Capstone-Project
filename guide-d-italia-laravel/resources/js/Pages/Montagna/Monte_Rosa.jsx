import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Monte_Rosa(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='monte_rosa' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte Rosa</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Il Monte Rosa, visto dal versante est</h2>
                    <p>
                        Il <strong>Monte Rosa</strong> è il massiccio montuoso più esteso delle Alpi, il secondo per altezza dopo il Monto Bianco, nonché quello con l'altitudine media più elevata (vi appartengono 9 delle prime 20 cime più altre della catena alpina). Il Monte Rosa si colloca nelle 
                        Alpi Pennine (Nord-Occidentali) tra Italia (al confine tra Valle d'Aosta e Piemonte) e Svizzera.
                    </p>
                    <p>
                        Il toponimo italiano Monte Rosa non deriva dalle tinte rosa che colorano il massiccio all'alba come si potrebbe pensare, ma piuttosto dal latino rosia, che significa "ghiacciaio". Quindi possiamo "tradurlo" con Montagna di Ghiaccio ed effettivamente ancora ai nostri giorni 
                        il Monte Rosa è ricco di ghiacciai.
                    </p>
                    <p>
                        Nel versante di Macugnaga potete tranquillamente vedere da vicino il <b>Ghiacciaio del Belvedere</b>. Il Monte Rosa è praticolarmente famoso per la sua parete est, ovvero il versante di Macugnaga, la parete a più alta prominenza della Alpi e l'unica di dimensioni 
                        himalayane. 
                    </p>
                    <p>
                        Il massiccio è famoso per le sue numerose vette oltre i 4.000 e le quattro più alte appartengono tutte alla parete est, visibile da Macugnaga:
                    </p>
                    <p>
                        Punta Dufoun - 4.634m <br/>
                        Punta Nordend - 4.609m <br/>
                        Punta Zumstein - 4.563m <br/>
                        Punta Gnifetti - 4.559m 
                    </p>
                    <p>
                        La Punta <b>Dufour</b> è la vetta più altra del gruppo, visibile soltanto dell'abitato di Macugnaga, intitolata in omaggio al Generale svizzero e grande cartografo Guillaume-Henri Dufour (1787 - 1875).
                    </p>
                    <p>
                        La Punta <b>Nordend</b> si presenta con due creste principali. Una scende verso sud e, passando attraverso la Sella d'Argento arriva alla Punta Duffour; la seconda, detta Cresta di Santa Caterina, continua verso nord abbassandosi ed arrivando allo Jägerhorn
                    </p>
                    <p>
                        Sulla Punta <b>Zumstein</b> sono stati aperti grandiosi itinerari oggi non più percorribili a causa dell'enorme distacco di ghiaccio verificatosi sotto il gruppo di rocce chiamate dalle guide di Macugnaga "occhio della Zumstein". La montagna fu intitolata a Joseph 
                        Zumstein che con altri la raggiunse nel 1820.
                    </p>
                    <p>
                        La Punta Gnifetti porta il nome di Giovanni Gnidetti, parrocco di Alagna Valsesia che per primo ne raggiunge la vetta. Il nome tedesco Signalkuppe (che in Italiano veniva tradotto con "Cima del Segnale") deriva dalla presenza di un obelisco riccioso che ne caratterizzava 
                        l'aspetto prima che venisse demolito durante la costruzione della Capanna Regina Margherita, il rifugio alpino più alto d'Europa.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22114.470824331318!2d7.851554176017189!3d45.943952366157866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788b34a9a438c9f%3A0x70f673db20fd93d3!2sMonte%20Rosa!5e1!3m2!1sit!2sit!4v1713885985619!5m2!1sit!2sit"
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
