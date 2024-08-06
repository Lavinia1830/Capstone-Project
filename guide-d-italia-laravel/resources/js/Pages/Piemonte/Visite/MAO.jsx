import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

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
                    <b>Da residenza della nobiltà sabauda in epoca barocca a sede degli uffici di una manifattura tessile alla fine dell’Ottocento, da luogo testimone 
                    degli Anni di Piombo alla fine del secolo scorso</b> a <b>porta sull’Oriente dal 2008</b>, l’edificio che ospita il <strong>MAO</strong> ha vissuto 
                    e riflesso come un microcosmo i <b>grandi cambiamenti</b> che hanno coinvolto la <b>città</b> e il <b>territorio</b>.
                </p>
                <p>
                    <b>Ripercorrere la storia di questo edificio</b>, tanto rappresentativo quanto poco appariscente, significa <b>radicare ancora più saldamente la 
                    presenza del Museo nella trama e nella vita della città</b>.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Il palazzo</h2>
                <p>
                    Il <b>palazzo</b> fu per almeno <b>tre secoli</b> la <b>dimora torinese</b> di due <b>rami</b> di una <b>famiglia</b> tra le
                    più <b>importanti</b> dell’<b>aristocrazia piemontese</b>: i <b>Solaro della Chiusa</b> (derivati dai <b>Solaro di Moretta</b>) e i <b>Solaro della 
                    Margarita</b>. 
                    I <b>Solaro</b> appartenevano originariamente a quel <b>patriziato astigiano</b> che, investendo i <b>proventi</b> di un’<b>attività 
                    mercantile</b> di respiro <b>europeo</b> e di <b>prestito di denaro</b>, dal <b>XIII secolo</b> in poi aveva acquisito <b>diritti signorili</b> e 
                    successivamente si era integrato nell’<b>amministrazione</b> e nel <b>sistema degli onori</b> dello <b>Stato sabaudo</b>.
                </p>
                <p>
                    <b>L’edificio</b> è attestato fin dal <b>1587</b> e le sue sorti sono strettamente legate alla storia dei suoi <b>proprietari</b>, in parte 
                    ripercorribile grazie alle <b>decorazioni in stucco</b> del <b>salone di rappresentanza</b> collocato al <b>piano nobile</b> dell’edificio.
                </p>
                <p>
                    <b>Carlo Ubertino I</b>, ritratto in <b>armatura</b> e <b>abito cinquecenteschi</b>, fu <b>ambasciatore</b> del duca <b>Carlo 
                    Emanuele I</b> a <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link>, in <b>Francia</b>, <b>Spagna</b>, <b>Portogallo</b>, <b>Inghilterra</b>, <b>Scozia</b>.
                </p>
                <p>
                    Suo figlio, <b>Emanuele Filiberto Solaro</b>, fu come il padre fidato collaboratore del Duca <b>Carlo Emanuele I</b>, governatore di <b>Vercelli</b>, 
                    ambasciatore alle corti di <b>Francia</b> e <b>Mantova</b>, <b>Gran Ciambellano</b>. <b>Emanuele Filiberto Solaro</b> è vestito secondo la moda 
                    d’inizio <b>Seicento</b> e indossa il <b>Collare dell’Annunziata</b>, massima onorificenza dei <b>Duchi di Savoia</b>.
                </p>
                <p>
                    Il <b>marchese Carlo Ubertino II</b> veste gli abiti del maturo <b>Seicento</b> e il <b>Collare dell’Annunziata</b>. Nella <b>guerra civile</b> che 
                    vide i fratelli del defunto Duca <b>Vittorio Amedeo I</b> opporsi alla duchessa <b>Maria Cristina di Francia</b>, egli sostenne quest’ultima e 
                    fu valente <b>diplomatico</b> al suo servizio, oltre che <b>Gran Mastro di Casa</b> e <b>consigliere del Consiglio di Stato segreto</b>. Nel 
                    corso del <b>XVII secolo</b>, non sono documentati interventi sostanziali sul <b>complesso architettonico</b>.
                </p>
                <p>
                    Nel <b>1723</b> il <b>marchese Francesco Amedeo Ludovico</b> assunse l’iniziativa di un <b>rammodernamento</b> dell’edificio, per avere una dimora 
                    consona al suo stato. Il <b>medaglione</b> che lo ritrae fu probabilmente commissionato da suo figlio, <b>Giuseppe Ludovico Maurizio</b>, lo stesso 
                    al quale si attribuisce una <b>campagna decorativa</b> ancora visibile nel <b>salone d’onore</b>.
                </p>
                <p>
                    In seguito ai <b>lavori settecenteschi</b> il palazzo assunse così la forma di <b>residenza di rappresentanza</b> che tuttora conserva.
                </p>
                <p>
                    Nel <b>1830</b> i coeredi dei <b>Solaro della Chiusa</b> vendettero il Palazzo a conte <b>Clemente Solaro della Margarita</b>, il <b>ministro</b> e 
                    primo <b>segretario di Stato per gli Affari Esteri</b> di <b>Carlo Alberto</b> celebre per il suo <b>conservatorismo politico</b>.
                </p>
                <p>
                    Nel <b>1870</b>, il figlio di <b>Clemente</b> vendette il complesso al cavaliere <b>Paolo Mazzonis</b>, <b>industriale tessile</b>.
                </p>
                <p>
                    Il <b>piano terreno</b> del palazzo venne quasi subito adibito a sede degli <b>uffici della manifattura</b> e tale rimase per un <b>secolo</b>. 
                    Ancora oggi l’edificio è noto appunto come <b>Palazzo Mazzonis</b>.
                </p>
                <p>
                    Nel <b>1910</b>, su istanza del <b>Ministero della Pubblica Istruzione</b>, il messo comunale notificò il palazzo in quanto <b>monumento pregevole 
                    di arte e storia</b>. Nella notifica si menziona il soggiorno di un giovanissimo <b>Jean Jacques Rousseau</b>. Una nota di colore che si fonda 
                    sull’attribuzione del palazzo ai <b>Solaro di Govone</b> e di <b>Breglio</b>, presso i quali il neoconvertito <b>Rousseau</b> prestò servizio, come 
                    racconta egli stesso nelle <b>Confessioni</b>. Più elementi portano a credere però che i <b>Solaro di Govone</b> – e con essi <b>Rousseau</b> - 
                    non abbiano mai risieduto nella dimora di <b>via San Domenico</b>.
                </p>
                <p>
                    Gli interventi più <b>recenti</b> nell’ornato del palazzo interessano lo <b>scalone d’onore</b> e si devono all’iniziativa di <b>Ottavio Mazzonis</b>. 
                    Lo stesso <b>Ottavio Mazzonis</b>, pittore allievo di <b>Nicola Arduino</b>, nel <b>1955</b> dipinse la <b>volta ad affresco</b> con l’allegoria 
                    dell’<b>Arte e dell’Industria</b> e le <b>insegne araldiche</b> della famiglia, e due anni dopo eseguì sulla parete Est, a olio, <b>Il giudizio 
                    di Paride</b>.
                </p>
                <p>
                    Negli <b>anni ’60</b> la <b>Manifattura Mazzonis</b> cessò la propria attività e il palazzo rimase inutilizzato.
                </p>
                <p>
                    <b>Ottavio Mazzonis</b>, che nel frattempo si era trasferito altrove, concluse le <b>trattative di vendita</b> con la <b>Città di Torino</b> nel <b>1980</b>.
                </p>
                <p>
                    A seguito di un <b>restauro quinquennale</b>, durato dal <b>1980 al 1985</b>, il palazzo venne adattato a ospitare <b>Uffici Giudiziari</b>. 
                    L’edificio venne dotato di <b>impianti</b> e di <b>spazi capienti</b> capaci di accogliere grandi numeri di persone e ospitò i <b>grandi 
                    processi</b> al <b>terrorismo</b> e alla <b>lotta armata</b>.
                </p>
                <p>
                    Tra il <b>2004 e il 2008</b> il palazzo vede la sua <b>ultima grande trasformazione d’uso</b>. Le sue porte si riaprono nel <b>dicembre 2008</b>, 
                    quando, tra gli <b>stucchi barocchi</b> e i muri pregni di <b>storia recente</b>, trovano posto per la prima volta 
                    le <b>collezioni</b> del <b>MAO Museo d’Arte Orientale</b>.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">Restauro del palazzo della collezione</h2>
                <p>
                    Il <b>progetto di restauro</b> dell’edificio è stato redatto dal <b>settore Edifici per la Cultura della Città di Torino</b>, su linee guida 
                    degli <b>architetti Durbiano</b>, <b>Isola e Reinerio</b> incaricati da <b>Compagnia San Paolo</b>.
                </p>
                <p>
                    Nella <b>corte interna</b> è stato realizzato <b>ex-novo un padiglione vetrato</b> che ospita un <b>giardino secco</b> e un <b>giardino 
                    umido</b>, di <b>ispirazione giapponese</b>.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="color-subtitle">L'allestimento</h2>
                <p>
                    <b>L’allestimento museale</b> si è svolto tra <b>maggio e dicembre del 2008</b>, su progetto dell’<b>Architetto Andrea Bruno</b>, esperto 
                    italiano dell’<b>Unesco</b> per il <b>restauro e la conservazione del patrimonio artistico e culturale</b>, con la consulenza 
                    del <b>Professor Franco Ricca</b>, Direttore del Museo.
                </p>
                <p>
                    La <b>progettazione degli spazi</b> ha tenuto conto della <b>pre-esistenza di alcuni nuclei di collezioni</b> e ha avuto come esito 
                    l’articolazione delle <b>collezioni in cinque gallerie</b> corrispondenti ad altrettante aree culturali.<br/>
                    Ad alcuni ambienti sono state apportate <b>modifiche d’uso</b> finalizzate a <b>facilitare la fruizione del Museo</b> da parte del 
                    pubblico. Così, per esempio l’<b>accesso alle collezioni</b> non avviene dallo <b>scalone d’onore</b>, l’<b>androne carraio</b> diventa 
                    zona deputata all’<b>accoglienza del pubblico</b>, il <b>cortile</b> - occupato da una <b>suggestiva struttura in vetro</b> che 
                    ospita <b>due giardini di ispirazione giapponese</b> - diventa luogo di <b>transizione tra Occidente e Oriente</b>, 
                    il <b>sottotetto</b> diventa un <b>unico ambiente espositivo di facile e piacevole accesso</b>, uno <b>spazio artificiale</b> che 
                    cela la struttura dell’edificio.
                </p>
                <p>
                    L’allestimento del Museo ha previsto la <b>movimentazione delle opere</b> fino ad allora conservate in <b>depositi adeguatamente 
                    attrezzati e controllati</b>. I trasporti hanno coinvolto tutte le opere oggi esposte, dalle più delicate in <b>vetro e ceramica</b>, 
                    alle più imponenti in <b>pietra</b>. Tutte le movimentazioni sono state effettuate da <b>personale specializzato</b> e seguite dal 
                    personale del museo. Successivamente le opere sono state <b>disimballate</b> e sempre con il controllo dello <b>staff del 
                    MAO</b> collocate nelle <b>vetrine appositamente realizzate</b>.<br/>
                    Le <b>strutture e le vetrine</b> sono state realizzate con <b>caratteristiche e materiali diversi</b>, di volta in volta 
                    calibrati sulle <b>specificità delle opere</b> che avrebbero accolto.
                </p>
                <p>
                    Lungo tutto il <b>percorso espositivo</b> è stata realizzato un <b>apparato grafico</b> che non solo risponde a <b>esigenze 
                    estetiche</b>, ma fornisce anche al visitatore <b>informazioni utili a orientarsi nella visita e a fruire al meglio delle 
                    collezioni</b>.
                </p>
                <p>
                    Dall’<b>illuminazione delle vetrine</b> alla <b>posa delle strutture</b>, dalla <b>grafica di sala</b> alla <b>movimentazione 
                    delle opere</b>, l’allestimento museale ha visto <b>professionalità e competenze diverse</b> lavorare fianco a fianco, 
                    coordinando <b>tempi e modi</b> in vista di un <b>unico obiettivo condiviso</b>.
                </p>
                <p>
                    Nella <b>primavera del 2015</b> un importante progetto di <b>riallestimento</b> ha permesso di creare un’<b>ampia area 
                    dedicata alle grandi esposizioni temporanee</b>.
                </p>
            </div>
            <div className="margin mt-3">
                <h2 className="colo-subtitle">Gallerie</h2>
                <p>
                    Le <b>collezioni</b> del MAO consistono di quasi <b>2300 opere</b>. Esse coprono un arco temporale che parte dal <b>Neolitico</b> e 
                    arriva fino agli inizi del <b>secolo scorso</b>. A queste si aggiungono più di <b>1400 reperti di scavo</b> di 
                    periodo <b>pre-islamico</b> provenienti dagli scavi iracheni di <b>Seleucia</b> e <b>Coche</b>.
                </p>
                <p>
                    Le <b>sale</b> destinate all’esposizione permanente sono distribuite in cinque distinte <b>gallerie</b> corrispondenti ad 
                    altrettante <b>aree culturali</b>: l'<b>Asia Meridionale</b> e il <b>Sud est asiatico</b>, con opere provenienti dal 
                    subcontinente <b>indiano</b> e dall’<b>Indocina</b>; la <b>Cina</b>, culla di una multisecolare e proteiforme <b>civiltà 
                    artistica</b>; la <b>Regione Himalayana</b>, fertile luogo di interazione delle culture <b>indiana</b> e <b>cinese</b>; 
                    il <b>Giappone</b>, sede di originali sviluppi nati dall'incontro con le culture d'<b>Asia</b> e d'<b>Europa</b>; 
                    i <b>Paesi Islamici</b>, testimoni di una straordinaria fioritura <b>artistica</b> che si estende dall'<b>Asia 
                    Centrale</b> al <b>Mediterraneo</b>.
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

