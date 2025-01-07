import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_Amedeo_Lia(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_amedeo_lia' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Amedeo Lia</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Museo "Amedeo Lia"</strong>, istituito nel 1995 ed aperto al pubblico il 3 dicembre 1996, ha sede nell'antico complesso conventuale dei frati minimi di San Francesco di Paola, insediatisi nella città della Spezia attorno alla seconda decade del 1600. A partire dall'anno 
                        1616, data della concessione del terreno ai Paolotti da parte della Comunità spezzina, vengono edificati il convento e successivamente la chiesa. L'edificio si trovava in una posizione di strategica importanza, proprio all'uscita dalla città murata dell'asse viario che collegava 
                        il Golfo con Genova. Inoltre, come ben si evince dalla cartografia antica e come indica ancora la toponomastica viaria circostante (Via dei Molini e Vicolo dello Stagno), la zona era particolarmente ricca di acque. Nel 1798, a seguito delle soppressioni giacobine, il convento perde 
                        la sua originaria funzione e viene destinato prima ad Ospedale Militare e poi ad Ospedale Civile. Queste differenti destinazioni d'uso comportarono profonde trasformazioni spaziali particolarmente vistose dal secondo decennio del 1800. A tale epoca risale la demolizione del 
                        campanile, il riassestamento del tetto, la costruzione di un piano sotto la volta della chiesa e la realizzazione nel vano chiesastico di una serie di pilastri per dividere in senso orizzontale l'originario volume, ricavando spazi utili alle corsie ospedaliere. Dalle planimetrie 
                        databili alla seconda metà del secolo XIX si desumono nuovi cambiamenti strutturali, quale l'avanzamento del fronte del complesso sulla via antistante, a tutt'oggi demolito nella fase di recupero a fini museali, in allineamento con l'antico muro di cinta del convento (1869-1879). 
                        Agli anni 1896-1898 risalgono le ultime modifiche dell'Ospedale in tale sede prima del suo trasferimento nella zona di San Cipriano. Dal 1914 la struttura viene abbandonata e di seguito abilitata a caserma e residenza. Nel primo dopoguerra, infine, vengono nuovamente mutate le 
                        destinazioni d'uso degli spazi dell'edificio, fino ad essere destinata anche a sede della Pretura e, quindi, uffici comunali. A seguito della donazione fatta da Amedeo Lia e dalla sua famiglia al Comune della Spezia della ricca collezione d'arte, il fabbricato viene scelto 
                        quale sede del futuro Museo. Prima di procedere ai primi interventi di recupero e ristrutturazione del complesso edilizio (1990), sono state effettuate accurate indagini stratigrafiche e cartografiche, al fine di ricostruire le fasi del fabbricato nella loro complessità. In sede di 
                        restauro sono state limitate all'indispensabile le opere di demolizione ed integrazione; ciò allo scopo di mettere in risalto le qualità intrinseche dell'edificio, facendone riemergere la sua originale identità storica, ed armonizzandolo con la nuova funzione di museo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.671871909408!2d9.816793020024697!3d44.10706041479151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fc98d1f40409%3A0xeb4345b44376541b!2sMuseo%20Civico%20Amedeo%20Lia!5e1!3m2!1sit!2sit!4v1712847939392!5m2!1sit!2sit"
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
