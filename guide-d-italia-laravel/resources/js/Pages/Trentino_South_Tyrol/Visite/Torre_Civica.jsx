import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Torre_Civica(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='torre_civica' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Torre Civica</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La parte orientale della <b>piazza del Duomo</b> è dominata dalla prima residenza vescovile, detta in seguito <b>Palazzo Pretorio</b>, e dalla Torre di Piazza, detta anche Civica perché simbolo del potere comunale.
                    </p>
                    <p>
                        Realizzata nel 1150 circa sui resti di Porta Veronensis, porta di ingresso alla Tridentum romana lungo la via Claudia Augusta, fungeva da avamposto di difesa della piazza ed era stata voluta dal principe vescovo; costruita in pietra calcarea ammonitica, risultava piuttosto imponente, 
                        con mura spesse oltre due metri e un’altezza originaria di circa 22 metri. Un documento del 1224 attesta la presenza di campane per scandire la giornata lavorativa, mentre un altro del 1321 menziona un certo Giovanni, custode delle carceri. Nel tempo quindi, da un iniziale luogo 
                        fortificato con funzioni difensive, Torre Civica divenne un luogo di detenzione al pari di Torre Vanga e Torre della Tromba. Ospitava al massimo sei persone per volta in attesa di giudizio (che sarebbe stato pronunciato nell’adiacente Palazzo Pretorio, ai tempi sede del Tribunale 
                        collegato ai primi tre piani della Torre Civica). Alcune celle erano destinate alle donne, e chiamate pertanto “femenèle”, mentre la “fermaiola” era riservata ai debitori. Sono ancora visibili alcune scritte di carcerati, realizzate utilizzando probabilmente dei chiodi arruginiti, 
                        ed i passavivande per portare loro le pietanze.
                    </p>
                    <p>
                        La cella campanaria ospitava tradizionalmente due campane, così importanti da portare un nome. I documenti ci dicono che ne 1449 un certo Bartolomeo da Rimini fu chiamato a Trento per fonderle. La “Renga” chiamava i cittadini al cosiddetto arengo (seduta pubblica), mentre la “Guardia”, 
                        più piccola, batteva le ore e segnalava la presenza di incendi. I loro rintocchi servivano a dettare al meglio i ritmi della vita cittadina, mentre quelle dell’adiacente Cattedrale di San Vigilio scandivano i tempi della vita religiosa.
                    </p>
                    <p>
                        Nel 1545, in occasione del Concilio di Trento, la Torre venne abbellita con affreschi e dotata di un nuovo orologio. La facciata sulla pubblica piazza presentava immagini di San Vigilio, patrono della città, e della madre Santa Massenza, opere del pittore veronese Gerolamo Fontana. 
                        Questi affreschi furono restaurati nel 1723 dal celebre pittore Antonio Gresta di Ala, ma oggi sono purtroppo perduti.
                    </p>
                    <p>
                        Durante le feste del Concilio di Trento (1545-1563) e in occasione del passaggio di grandi personalità la torre veniva illuminata e dalla sua sommità si sparavano fuochi d'artificio.
                    </p>
                    <p>
                        Nell’agosto 2015 un incendio ha compromesso la settecentesca “Renga” (mentre la quattrocentesca “Guardia”, che presenta una preziosa immagine del Simonino, era fortunatamente in un deposito per un restauro). La temperatura ha infatti fuso lo stagno, che all’interno della lega del 
                        bronzo dà la sonorità alla campana, la quale è caduta di un livello. Il pesante battacchio è rotolato dalle scale scalfendo alcuni scalini ai piani inferiori. La campana, rimasta “muta”, è stata restaurata e poi riportata nella posizione in cui è stata rinvenuta; una nuova campana è 
                        stata fusa in sostituzione, e suona con la stessa tonalità di quella precedente.
                    </p>
                    <p>
                        L’ultimo restauro del Comune ha permesso la riapertura della torre, consolidando le mura e realizzando una nuova, moderna scala in acciaio che conduce alla cella campanaria ed a un meraviglioso affaccio su Piazza Duomo. Le bruciature sulle travi sono state lasciate appositamente come 
                        testimonianza dell’evento.
                    </p>
                    <p>
                        L’apertura della Torre e la conduzione delle visite guidate sono rese possibili grazie alla convenzione siglata tra il Comune di Trento, proprietario dell’edificio, e il Museo Diocesano Tridentino.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.5524274698437!2d11.120487380046926!3d46.06762464083396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714b0c7492df%3A0x58d0da1609747083!2sTorre%20Civica!5e1!3m2!1sit!2sit!4v1712928641024!5m2!1sit!2sit"
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
