import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Teatro_Romano(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='teatro_romano' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Teatro Romano</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        I resti del <strong>teatro romano di Trieste</strong> furono portati alla luce durante i lavori dello scavo archeologico condotto tra il luglio 1937 e il settembre 1938. La loro esistenza era testimoniata dal toponimo della zona detta "Rena", derivante da "arena", che ricordava la 
                        presenza di un antico edificio per spettacoli. Nel XVII secolo i ruderi erano ancora in parte visibili, ma nei due secoli seguenti furono completamente inglobati in edifici di abitazione privata, il cui andamento seguì la forma semicircolare del teatro del quale sfruttarono i muri 
                        esistenti e i cunicoli. I risultati dello scavo, dati i cospicui resti superstiti, hanno permesso la ricostruzione e i lavori di consolidamento e restauro hanno restituito un aspetto monumentale all'edificio.
                    </p>
                    <p>
                        Il <strong>teatro romano di Trieste</strong> con la sua ampiezza di poco meno di 65 metri fu in grado di accogliere una massa di spettatori valutabile in 3500 persone e, in base a recenti studi, può essere fatto risalire per la sua fase costruttiva alla prima metà del I secolo d.C., 
                        con interventi riferibili anche al regno di Nerone. Un importante rifacimento, che interessò la scena monumentale con il suo apparato scultoreo, è testimoniato per l'inizio del II secolo d.C. (102-106) ad opera del tergestino Quinto Petronio Modesto. 
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">Descrizione del palcoscenico e della scena</h2>
                    <p>
                        Il pulpito, ossia il muro anteriore del palcoscenico, è stato ricostruito con sicurezza in base a precisi rinvenimenti e presenta 10 nicchie di cui due a sezione circolare. Esso in origine era, secondo il gusto ellenistico del periodo augusteo, rivestito con lastre di pietra rossa di 
                        Verona, decorate a bassorilievo con motivi vegetali ed animali (i cosiddetti girali popolati). 
                    </p>
                    <p>
                        Il proscenio, ossia l'odierno palcoscenico, era composto da un pavimento in assi di legno che coprivano l'ampia zona sottostante dell'iposcenio. Oggi è visibile solo quest'ultima, in cui si distinguono i pilastrini che sostenevano il pavimento e gli incassi per i pali usati per le 
                        manovre del sipario.
                    </p>
                    <p>
                        La scena, realizzata come una facciata monumentale, era suddivisa in una parte centrale e in due ali laterali. Essa era composta da un'esedra semicircolare al centro e da due esedre rettangolari ai lati, tutte con una porta affiancata da due colonne. La scena, di cui rimangono ricche 
                        testimonianze nei basamenti, nelle cornici modanate, nei frammenti di soffitto a cassettone e di colonne, era distribuita su due piani e sobriamente abbellita da nicchie in cui erano inserite statue a tutto tondo. Aveva uno spessore ridotto, tale da non poter contenere ambienti per 
                        uso degli attori, ed era circondata da altre strutture: lateralmente da due vestiboli e posteriormente da un portico, luogo di gradevole passeggio a pochi passi dalla spiaggia del mare.   
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La spettacolare serie delle statue</h2>
                    <p>
                        Molti frammenti delle statue sono stati rinvenuti in posizione di crollo nella fossa del palcoscenico e, dal luogo di caduta, è stato possibile per gli studiosi ipotizzare un'attendibile ricostruzione dell'insieme dell'impianto architettonico e decorativo. Il ciclo scultoreo del 
                        teatro triestino costituisce senza dubbio uno dei più significativi esempi di decorazione scultorea tra tutti gli edifici teatrali presenti sul suolo italico: le statue riprendevano modelli noti e molto diffusi nel mondo antico, i cui originali risalgono al IV secolo a.C. e sono 
                        opera di copisti operanti forse ad Aquileia, senza dubbio appartenenti a quell'arte colta locale databile agli ultimi decenni del I secolo d.C.
                    </p>
                    <p>
                        Raffigurano, da sinistra nell'attuale esposizione: il dio della medicina Esculapio; la dea della salute Igea; la dea della saggezza e dell’eloquenza, Minerva; il dio della musica Apollo; il dio Bacco, protettore degli attori; e la dea della bellezza, Venere.
                    </p>
                    <p>
                        Di fronte, sono esposte la statua distesa di un Sileno ebbro, usato come fontana, e una di un Giovinetto, che dovevano abbellire il lato frontale del palcoscenico, dal quale provengono anche alcuni frammenti delle lastre di rivestimento in marmo rosso decorate con volute vegetali 
                        popolate da uccelli.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.2856709220896!2d13.771087791661438!3d45.64912986679573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b6b71c4872b7f%3A0x919221851982a603!2sTeatro%20Romano%20di%20Trieste!5e1!3m2!1sit!2sit!4v1713184768130!5m2!1sit!2sit"
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
