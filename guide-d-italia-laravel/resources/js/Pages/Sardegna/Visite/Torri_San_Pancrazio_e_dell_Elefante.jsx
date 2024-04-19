import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Torri_San_Pancrazio_e_dell_Elefante(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='torri_di_san_pancrazio_e_dell_elefante' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Torri di San Pancrazio e dell'Elefante</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className='margin mt-3'>
                    <p className='fst-italic text-center'>
                        Coetanee e quasi identiche, nel passato avevano compiti di difesa, poi detentivi, oggi accolgono tantissimi visitatori in uno dei quartieri storici di Cagliari
                    </p>
                    <p>
                        Carlo V, imperatore del Sacro romano impero, le considerava tra le migliori opere militari mai realizzate in Europa. Nate per difendere la cittadella fortificata pisana dalle mire aragonesi, le vedrai svettare nella loro maestosità, come simboli del quartiere di Castello e del capoluogo della Sardegna. Le due torri 
                        di San Pancrazio e dell’Elefante furono erette rispettivamente nel 1305 e 1307, per conto di Pisa, a opera dell’architetto cagliaritano Giovanni Capula. ‘Castello’, infatti, era il centro del potere politico, militare e religioso di <b>Cagliari</b> al tempo della dominazione pisana, e necessitava di un adeguato 
                        sistema difensivo. Le torri, costruite usando grossi blocchi calcarei ricavati dal colle di Bonaria, si sviluppano entrambe su quattro livelli, con un lato aperto sul quale noterai i vari soppalchi lignei.<br/>
                        San Pancrazio è più alta, circa 37 metri, e aveva il compito di proteggere l’accesso settentrionale alla cittadella, oltre che avvistare eventuali minacce dal mare e dall’entroterra. Il nome probabilmente deriva dall’attuale chiesa di San Lorenzo, eretta nel vicino viale Buoncammino, in origine dedicata a San Pancrazio. 
                        Si affaccia su piazza Indipendenza e su piazza Arsenale, dove ha sede la <b>Cittadella dei Musei</b>. Sul lato nord presenta tuttora otto feritoie, un tempo la chiudevano possenti portoni e pesanti saracinesche, andate perdute. La sua terrazza, a 130 metri sul livello del mare, è il punto più alto della città. In epoca 
                        aragonese la torre perse la funzione di accesso al Castello e dal XVI secolo fu adibita a carcere, divenendo tristemente nota per le atroci condizioni di prigionia. Vi risuonava la <i>campana mala</i>, che accompagnava al patibolo i condannati a morte.<br/>
                        La torre dell’Elefante sorge, invece, sul bordo sud-occidentale del quartiere. Svolse funzioni di avvistamento sul mare, di polveriera, armeria e – anch’essa – di carcere, seppur per pochi decenni. Rispetto alla ‘sorella maggiore’, è più bassa di circa sette metri e maggiormente rifinita. Sul lato sud, nello spigolo 
                        sopra il portone d’ingresso, noterai una statua raffigurante un elefante. Il nome della torre, però, sembrerebbe derivare dall’antico nome dell’attuale via Stretta, che in epoca pisana si chiamava <i>ruga leofantis</i>. Nelle pareti osserverai numerosi stemmi e feritoie. Anche l’‘Elefante’ è legata a ricordi drammatici: 
                        qui si esponevano le teste dei condannati per decapitazione. In generale, attorno ad entrambe le torri aleggiano storie di fantasmi e di spiriti inquieti che le infesterebbero, incapaci di trovare pace.<br/>
                        Alle due torri, nel 1322, se ne aggiunse una terza, la torre del Leone, nota anche come ‘dell’Aquila’. Doveva difendere il lato sud, ma finì per essere adibita a funzioni civili e oggi la osserverai inglobata nel palazzo Boyl, adiacente a un altro dei monumenti simbolo di Cagliari, il Bastione di Saint Remy.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528.3731465488006!2d9.114693002480621!3d39.217826519067195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e7340f27031419%3A0x19ea156953ab19b2!2sTorre%20dell&#39;Elefante!5e1!3m2!1sit!2sit!4v1713532745879!5m2!1sit!2sit"
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
