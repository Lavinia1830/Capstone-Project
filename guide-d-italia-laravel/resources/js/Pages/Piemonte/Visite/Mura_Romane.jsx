import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Mura_Romane(props) {
    return (
        <>
            <Head title="Le Mura Romane"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='mura_romane' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Le Mura Romane</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <b>territorio novarese</b> fu frequentato fin dalla <b>prima età del Ferro</b> da <b>popolazioni celtiche</b>, delle quali si potrebbe 
                            identificare un <b>centro di maggiore importanza</b> nell’area di <b>Briona</b>, (vedi scheda) a pochi km a nord-ovest della città, dove 
                            in località <b>San Bernardino</b> è attestata una vasta <b>area funeraria</b> risalente alla <b>Cultura di Golasecca</b>.<br/>
                            L’<b>insediamento romano</b> si sviluppò in relazione a un <b>nodo stradale</b> tra il <b>Sesia</b> e il <b>Ticino</b>. Dal <b>I secolo 
                            a.C.</b> si hanno notizie di <b>Novaria</b> (col probabile significato di “<b>città nuova</b>”): non è certo se si tratti di una <b>fondazione 
                            coloniaria</b> sorta <b>ex-novo</b> come polo di attrazione di più <b>abitati celtici</b> attribuiti alla <b>tribù dei Vertamocori</b> (secondo 
                            Plinio, facenti parte dei <b>Galli Insubri</b> già federati ai Romani dal <b>194 a.C.</b>) o se invece sia sorta su un <b>centro preromano</b>.<br/>
                            Nel <b>49 a.C.</b> ottenne da <b>Giulio Cesare</b> la <b>cittadinanza romana</b> e divenne <b>municipium</b> della <b>Tribus Claudia</b>, mentre 
                            con <b>ripartizione territoriale</b> la organizzata da <b>Ottaviano Augusto</b>, fu parte della <b>XI regione</b>: la <b>Transpadana</b>, 
                            comprendente tutti i territori a nord del <b>fiume Po</b>, chiusi dall’<b>arco alpino</b> fino all’<b>Oglio</b>.<br/>
                            Poco è rimasto del <b>reticolato viario romano</b> perchè la città fu soggetta a pesanti interventi di <b>livellamenti/innalzamenti</b> perchè 
                            area caratterizzata da molti <b>dislivelli</b>. La pianta era <b>quadrangolare</b>, una delle più piccole dell’area <b>cisalpina</b> (circa 35 
                            ettari), con <b>Cardo</b> in corrispondenza degli attuali corsi <b>Cavour</b> e <b>Mazzini</b> e il <b>Decumano</b> ai corsi <b>Cavallotti</b> e 
                            <b> Italia</b>. La città era difesa da <b>mura</b> costruite con grandi <b>ciottoli di fiume</b> alternati da corsi di <b>mattoni</b>. Tratti di 
                            queste mura sono visibili in <b>piazza Cavour</b> e in <b>largo Solaroli</b>. Le mura erano lunghe più di <b>2 km</b>, in esse si aprivano 
                            quattro <b>porte</b> da cui partivano le strade che collegavano la città con <b>Milano</b>, <b>Vercelli</b>, <b>Tortona</b> e <b>Genova</b> e 
                            con i <b>valichi dell’Ossola</b>.
                            I <b>reperti</b> del <b>centro storico</b> non sono anteriori al <b>I secolo a.C.</b> e dai dati archeologici risulta che il periodo di 
                            maggiore <b>monumentalizzazione</b> della città romana fu tra il <b>I</b> e il <b>II secolo d.C.</b> (resti del <b>foro</b>, dell’<b>anfiteatro</b>, 
                            dell’<b>acquedotto</b>, delle <b>terme pubbliche</b> e di strutture <b>residenziali private</b>).
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.6138806397834!2d8.619803817238282!3d45.44454820303897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47865b3c77b5cfc1%3A0xd1bc543186ee24bc!2sMura%20romane%20di%20Novara!5e1!3m2!1sit!2sit!4v1716213365931!5m2!1sit!2sit"
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
