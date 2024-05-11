import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function MAO(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='mao' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>MAO - Museo di Arte Orientale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    Da residenza della nobiltà sabauda in epoca barocca a sede degli uffici di una manifattura tessile alla fine dell’Ottocento, da luogo testimone degli Anni di Piombo alla fine del secolo scorso a porta sull’Oriente 
                    dal 2008, l’edificio che ospita il MAO ha vissuto e riflesso come un microcosmo i grandi cambiamenti che hanno coinvolto la città e il territorio.
                </p>
                <p>
                    Ripercorrere la storia di questo edificio, tanto rappresentativo quanto poco appariscente, significa radicare ancora più saldamente la presenza del Museo nella trama e nella vita della città.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Il palazzo</h2>
                <p>
                    Il palazzo fu per almeno tre secoli la dimora torinese di due rami di una famiglia tra le più importanti dell’aristocrazia piemontese: i Solaro della Chiusa (derivati dai Solaro di Moretta) e i Solaro della Margarita. 
                    I Solaro appartenevano originariamente a quel patriziato astigiano che, investendo i proventi di un’attività mercantile di respiro europeo e di prestito di denaro, dal XIII secolo in poi aveva acquisito diritti 
                    signorili e successivamente si era integrato nell’amministrazione e nel sistema degli onori dello Stato sabaudo.
                </p>
                <p>
                    L’edificio è attestato fin dal 1587 e le sue sorti sono strettamente legate alla storia dei suoi proprietari, in parte ripercorribile grazie alle decorazioni in stucco del salone di rappresentanza collocato al piano 
                    nobile dell’edificio.
                </p>
                <p>
                    Carlo Ubertino I, ritratto in armatura e abito cinquecenteschi, fu ambasciatore del duca Carlo Emanuele I a Roma, in Francia, Spagna, Portogallo, Inghilterra, Scozia.
                </p>
                <p>
                    Suo figlio, Emanuele Filiberto Solaro, fu come il padre fidato collaboratore del Duca Carlo Emanuele I, governatore di Vercelli, ambasciatore alle corti di Francia e Mantova, Gran Ciambellano. Emanuele Filiberto Solaro 
                    è vestito secondo la moda d’inizio Seicento e indossa il Collare dell’Annunziata, massima onorificenza dei Duchi di Savoia.
                </p>
                <p>
                    Il marchese Carlo Ubertino II veste gli abiti del maturo Seicento e il Collare dell’Annunziata. Nella guerra civile che vide i fratelli del defunto Duca Vittorio Amedeo I opporsi alla duchessa Maria Cristina di Francia, 
                    egli sostenne quest’ultima e fu valente diplomatico al suo servizio, oltre che Gran Mastro di Casa e consigliere del Consiglio di Stato segreto. Nel corso del XVII secolo, non sono documentati interventi sostanziali sul 
                    complesso architettonico.
                </p>
                <p>
                    Nel 1723 il marchese Francesco Amedeo Ludovico assunse l’iniziativa di un rammodernamento dell’edificio, per avere una dimora consona al suo stato. Il medaglione che lo ritrae fu probabilmente commissionato da suo figlio, 
                    Giuseppe Ludovico Maurizio, lo stesso al quale si attribuisce una campagna decorativa ancora visibile nel salone d’onore.
                </p>
                <p>
                    In seguito ai lavori settecenteschi il palazzo assunse così la forma di residenza di rappresentanza che tuttora conserva.
                </p>
                <p>
                    Nel 1830 i coeredi dei Solaro della Chiusa vendettero il Palazzo a conte Clemente Solaro della Margarita, il ministro e primo segretario di Stato per gli Affari Esteri di Carlo Alberto celebre per il suo conservatorismo 
                    politico.
                </p>
                <p>
                    Nel 1870, il figlio di Clemente vendette il complesso al cavaliere Paolo Mazzonis, industriale tessile.
                </p>
                <p>
                    Il piano terreno del palazzo venne quasi subito adibito a sede degli uffici della manifattura e tale rimase per un secolo. Ancora oggi l’edificio è noto appunto come Palazzo Mazzonis.
                </p>
                <p>
                    Nel 1910, su istanza del Ministero della Pubblica Istruzione, il messo comunale notificò il palazzo in quanto monumento pregevole di arte e storia. Nella notifica si menziona il soggiorno di un giovanissimo Jean Jacques 
                    Rousseau. Una nota di colore che si fonda sull’attribuzione del palazzo ai Solaro di Govone e di Breglio, presso i quali il neoconvertito Rousseau prestò servizio, come racconta egli stesso nelle Confessioni. Più elementi 
                    portano a credere però che i Solaro di Govone – e con essi Rousseau - non abbiano mai risieduto nella dimora di via San Domenico.
                </p>
                <p>
                    Gli interventi più recenti nell’ornato del palazzo interessano lo scalone d’onore e si devono all’iniziativa di Ottavio Mazzonis. Lo stesso Ottavio Mazzonis, pittore allievo di Nicola Arduino, nel 1955 dipinse la volta ad 
                    affresco con l’allegoria dell’Arte e dell’Industria e le insegne araldiche della famiglia, e due anni dopo eseguì sulla parete Est, a olio, Il giudizio di Paride.
                </p>
                <p>
                    Negli anni ’60 la Manifattura Mazzonis cessò la propria attività e il palazzo rimase inutilizzato.
                </p>
                <p>
                    Ottavio Mazzonis, che nel frattempo si era trasferito altrove, concluse le trattative di vendita con la Città di Torino nel 1980.
                </p>
                <p>
                    A seguito di un restauro quinquennale, durato dal 1980 al 1985, il palazzo venne adattato a ospitare Uffici Giudiziari. L’edificio venne dotato di impianti e di spazi capienti capaci di accogliere grandi numeri di persone e 
                    ospitò i grandi processi al terrorismo e alla lotta armata.
                </p>
                <p>
                    Tra il 2004 e il 2008 il palazzo vede la sua ultima grande trasformazione d’uso. Le sue porte si riaprono nel dicembre 2008, quando, tra gli stucchi barocchi e i muri pregni di storia recente, trovano posto per la prima volta 
                    le collezioni del MAO Museo d’Arte Orientale.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Restauro del palazzo della collezione</h2>
                <p>
                    Il progetto di restauro dell’edificio è stato redatto dal settore Edifici per la Cultura della Città di Torino, su linee guida degli architetti Durbiano, Isola e Reinerio incaricati da Compagnia San Paolo.
                </p>
                <p>
                    Nella corte interna è stato realizzato ex-novo un padiglione vetrato che ospita un giardino secco e un giardino umido, di ispirazione giapponese.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">L'allestimento</h2>
                <p>
                    L’allestimento museale si è svolto tra maggio e dicembre del 2008, su progetto dell’Architetto Andrea Bruno, esperto italiano dell’Unesco per il restauro e la conservazione del patrimonio artistico e culturale, con la consulenza 
                    del Professor Franco Ricca, Direttore del Museo.
                </p>
                <p>
                    La progettazione degli spazi ha tenuto conto della pre-esistenza di alcuni nuclei di collezioni e ha avuto come esito l’articolazione delle collezioni in cinque gallerie corrispondenti ad altrettante aree culturali.<br/>
                    Ad alcuni ambienti sono state apportate modifiche d’uso finalizzate a facilitare la fruizione del Museo da parte del pubblico. Così, per esempio l’accesso alle collezioni non avviene dallo scalone d’onore, l’androne carraio diventa 
                    zona deputata all’accoglienza del pubblico, il cortile - occupato da una suggestiva struttura in vetro che ospita due giardini di ispirazione giapponese - diventa luogo di transizione tra Occidente e Oriente, il sottotetto diventa 
                    un unico ambiente espositivo di facile e piacevole accesso, uno spazio artificiale che cela la struttura dell’edificio.
                </p>
                <p>
                    L’allestimento del Museo ha previsto la movimentazione delle opere fino ad allora conservate in depositi adeguatamente attrezzati e controllati. I trasporti hanno coinvolto tutte le opere oggi esposte, dalle più delicate in vetro e 
                    ceramica, alle più imponenti in pietra. Tutte le movimentazioni sono state effettuate da personale specializzato e seguite dal personale del museo. Successivamente le opere sono state disimballate e sempre con il controllo dello staff 
                    del MAO collocate nelle vetrine appositamente realizzate.<br/>
                    Le strutture e le vetrine sono state realizzate con caratteristiche e materiali diversi, di volta in volta calibrati sulle specificità delle opere che avrebbero accolto.
                </p>
                <p>
                    Lungo tutto il percorso espositivo è stata realizzato un apparato grafico che non solo risponde a esigenze estetiche, ma fornisce anche al visitatore informazioni utili a orientarsi nella visita e a fruire al meglio delle collezioni.
                </p>
                <p>
                    Dall’illuminazione delle vetrine alla posa delle strutture, dalla grafica di sala alla movimentazione delle opere, l’allestimento museale ha visto professionalità e competenze diverse lavorare fianco a fianco, coordinando tempi e modi 
                    in vista di un unico obiettivo condiviso.
                </p>
                <p>
                    Nella primavera del 2015 un importante progetto di riallestimento ha permesso di creare un’ampia area dedicata alle grandi esposizioni temporanee.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="colo-subtitle">Gallerie</h2>
                <p>
                    Le collezioni del MAO consistono di quasi 2300 opere. Esse coprono un arco temporale che parte dal Neolitico e arriva fino agli inizi del secolo scorso. A queste si aggiungono più di 1400 reperti di scavo di periodo pre-islamico 
                    provenienti dagli scavi iracheni di Seleucia e Coche.
                </p>
                <p>
                    Le sale destinate all’esposizione permanente sono distribuite in cinque distinte gallerie corrispondenti ad altrettante aree culturali: l'Asia Meridionale e il Sud est asiatico, con opere provenienti dal subcontinente indiano e dall’Indocina; 
                    la Cina, culla di una multisecolare e proteiforme civiltà artistica; la Regione Himalayana, fertile luogo di interazione delle culture indiana e cinese; il Giappone, sede di originali sviluppi nati dall'incontro con le culture d'Asia e 
                    d'Europa; i Paesi Islamici, testimoni di una straordinaria fioritura artistica che si estende dall'Asia Centrale al Mediterraneo.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.4275636584741!2d7.678735975710432!3d45.07428661607181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d7462cd2481%3A0x894c230a61204c8d!2sMAO%20Museo%20di%20Arte%20Orientale!5e1!3m2!1sit!2sit!4v1712588183147!5m2!1sit!2sit"
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

