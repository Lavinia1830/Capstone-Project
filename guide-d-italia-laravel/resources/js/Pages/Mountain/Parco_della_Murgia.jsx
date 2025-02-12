import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Parco_della_Murgia(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='parco_della_murgia' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Parco della Murgia Materana</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Parco della Murgia</strong> è stato istituito nel 1990 col nome di <b>Parco Regionale Archeologico Storico Naturale delle Chiese Rupestri del Materano</b>. È oggi tra gli spettacolari paesaggi rupestri d’Italia quello che meglio testimonia l’antico rapporto tra l'uomo e 
                        la natura.
                    </p>
                </div>
                <div className='margin mt-3'>
                    <h2 className="color-subtitle">L’uomo e il territorio</h2>
                    <p>
                        Il parco, che sorge tra i comuni di <Link href='/destinazioni/basilicata/matera' className='text-decoration-none color_link'>Matera</Link> e <b>Montescaglioso</b> in Basilicata, a pochi chilometri di distanza dal confine con la Puglia, è caratterizzato da una roccia tenera, il 
                        cosiddetto "<b>tufo</b>" (il nome esatto è la calcarenite), che ha svolto un ruolo essenziale nelle forme assunte dal paesaggio, disegnando rupi, valloni e grotte utilizzate dall’uomo che vi si è insediato sin dalla preistoria. La tecnica di costruzione era quella definita 
                        “<b>architettura in negativo</b>”, ovvero non si costruiva, ma si toglieva materia dalla roccia (scavandola), per ricavarne appunto delle strutture architettoniche. Ecco dunque che nel Parco della Murgia si trovano <b>grotte del paleolitico</b> (Grotta dei pipistrelli), <b>villaggi 
                        risalenti al neolitico</b>, alle <b>età del bronzo e del ferro</b> (villaggio di <b>Murgecchia</b>, di <b>Murgia Timone</b> e di <b>Trasanello</b>): tutti siti preistorici che raccontano la presenza umana, una presenza fatta per lo più da pastori e mandriani. Sempre relativamente a 
                        questo mondo ci sono anche <b>masserie</b>, talvolta fortificate, i caratteristici recinti per pecore detti “jazzi”, cisterne, abbeveratoi e pozzi.
                    </p>
                    <p>
                        Il belvedere fa parte del <Link href='/visite/basilicata/matera/il_parco_della_murgia_materana' className='text-decoration-none color_link'>Parco Archeologico delle Chiese Rupestri</Link>. Durante la passeggiata potrete visitare un villaggio neolitico, la chiesa di San Falcione del IX 
                        secolo e la chiesa affrescata della Madonna delle Tre Porte, che si trova in una grotta sotto il belvedere.
                    </p>
                    <p>
                        Potete arrivare in auto oppure percorrere a piedi l’<b>itinerario 406</b> tra cespugli di timo selvatico e il volo dei falchi grillai sopra le vostre teste. Il percorso parte da Piazza Vittorio Veneto, la piazza centrale di Matera, scende lungo i gradoni che conducono a Porta Pistola e 
                        poi si inoltra nella gravina. Il lato opposto si raggiunge attraversando un ponte di legno.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Le chiese rupestri</h2>
                    <p>
                        Nel Parco della Murgia esistono ben 150 chiese rupestri, diverse tra loro per architettura ed iconografia, tra queste ricordiamo <b>San Leonardo</b>, <b>San Giacomo</b>, <b>Cappuccino vecchio</b> e <b>Santa Cesarea</b>. Realizzate per lo più nell’alto medioevo, in un periodo che ha visto 
                        incrociarsi la cultura greco bizantina con il mondo latino, anch’esse sono <b>scavate nella roccia</b>. Ciò che più stupisce è che sebbene siano nate come <b>luoghi di culto</b>, nel corso del tempo le chiese sono state anche utilizzate con altri scopi, trasformandosi all’occasione in 
                        <b> abitazioni</b> o luoghi di <b>ricovero per gli animali</b>. Anche queste chiese rappresentano oggi un’importante testimonianza della presenza umana, relativa in particolare a <b>monaci benedettini, longobardi e bizantini</b>.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La natura</h2>
                    <p>
                        <b>Una natura varia e selvaggia</b> è quella del Parco della Murgia che annovera all’incirca 1.200 entità botaniche (un sesto dell’intera flora nazionale e un terzo di quella regionale): un numero ragguardevole per un’area di circa 7000 ettari di superficie. In questo magnifico luogo, 
                        attraversato dal Fiume Bradano e dai torrenti Gravina e Jesce, vi sono circa <b>un centinaio di specie rare e rarissime</b>. A testimoniare la sorprendente ricchezza naturalistica anche l’abbondante fauna che, oltre a volpi, lepri, istrici, cinghiali e gatti selvatici, comprende importanti 
                        uccelli rapaci come il nibbio reale, il lanario, il capovaccaio e in primis il falco grillaio con le ali spiegate, il piccolo rapace simbolo del Parco.
                    </p>
                </div>
            </main>
            <Footer/>
        </AuthenticatedLayout>
    )
}
