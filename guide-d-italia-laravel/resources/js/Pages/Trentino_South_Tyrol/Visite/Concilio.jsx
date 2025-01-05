import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Concilio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='concilio' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Concilio</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p className='fst-italic'>
                        Chi visita Trento sicuramente associa il nome della città al celebre concilio, l’evento storico che si svolse tra il 1545 e il 1563 e che rese la città di Trento celebre in tutto il mondo. Ciò che venne deciso durante quegli anni segnò la storia europea come pochi altri eventi, 
                        rappresentando un vero e proprio spartiacque, con enormi conseguenze sulla vita sociale, l’arte, l’architettura e la musica.
                    </p>
                    <div className='mb-3 d-flex justify-content-center'>
                        <iframe width="425" height="350" src="https://www.youtube.com/embed/mIwEiZDov_s" title="FOCUS. Il Concilio di Trento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p>
                        In questa sala sono esposte alcune significative testimonianze iconografiche relative al concilio di Trento, nel corso del quale fu definita la riforma della Chiesa cattolica e la reazione alle dottrine protestanti.
                    </p>
                    <p>
                        Il concilio di Trento fu indetto in un momento estremamente delicato per l’Europa, scossa da profondi dissidi religiosi scatenati dal movimento di protesta inaugurato da Martin Lutero. Fu soprattutto Carlo V a premere per la sua convocazione, convinto che fosse l’unico mezzo per 
                        ridare pace e unità all'impero e riformare la Chiesa.
                    </p>
                    <p>
                        Dopo la solenne cerimonia del 13 dicembre 1545, i lavori presero avvio sotto la guida dei legati pontifici e senza la partecipazione dei protestanti, che pure erano stati invitati. Iniziava così il primo dei tre periodi conciliari che scandirono i tempi del Tridentino.<br/>
                        Il concilio si mosse su una doppia agenda: la dottrina della Chiesa, specialmente nei punti messi in discussione dai protestanti, e la sua riforma. Per il papa i lavori avrebbero dovuto delineare chiaramente le norme della fede cattolica per impedire un ulteriore dilagare 
                        dell’eresia nei territori rimasti fedeli. L’imperatore riteneva invece prioritario promuovere la riforma disciplinare della Chiesa, delle sue regole e del comportamento del clero.<br/>
                        La trattazione di temi molto delicati produsse momenti di grave crisi, superati grazie alle straordinarie doti diplomatiche del cardinale Giovanni Morone, nominato nel 1563 legato papale. Ricorrendo spesso a parziali compromessi, egli pose le basi di un accordo sulle questioni più 
                        spinose, finalmente raggiunto nella XXIII sessione del 15 luglio 1563.<br/>
                        Il concilio si concluse solennemente il 4 dicembre 1563, senza che il papa o l’imperatore vi avessero mai preso parte. Il 26 gennaio 1564 Pio IV confermò solennemente tutti i decreti conciliari.<br/>
                        Nei tre periodi conciliari la cattedrale di Trento fu sede delle sessioni solenni, riunioni di carattere formale e soprattutto cerimoniale, nel corso delle quali venivano letti e infine approvati i decreti elaborati nelle riunioni quotidiane di lavoro. Nonostante il suo ruolo 
                        determinante, la cattedrale non ebbe la fortuna iconografica della chiesa di Santa Maria Maggiore, dove nel terzo periodo si svolsero le congregazioni generali.
                    </p>
                    
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1638.1661884631683!2d11.117365763092797!3d46.06860043211932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714a37a40c9d%3A0xc40645f218af79fc!2sBasilica%20di%20Santa%20Maria%20Maggiore!5e1!3m2!1sit!2sit!4v1712927485615!5m2!1sit!2sit"
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
