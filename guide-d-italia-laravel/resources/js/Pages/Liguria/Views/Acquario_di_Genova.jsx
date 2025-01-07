import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Acquario_di_Genova(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='acquario_di_genova' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Acquario di Genova</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>L’Acquario di Genova e 3 avventure da non perdere</h2>
                <p>
                    È l’esperienza immersiva per definizione, una tappa imperdibile per approfondire <b>la conoscenza dei fondali e delle specie che li popolano</b>. L’<a href='https://www.acquariodigenova.it/' className='text-decoration-none color_link'><strong>Acquario di Genova</strong></a>, la città che proprio sul mare ha costruito la sua 
                    grandezza, situato nel <b>Porto Antico</b>, è uno scrigno che custodisce la <b>più ricca biodiversità acquatica d’Europa</b>: il suo percorso si dispiega in oltre <b>70 ambienti</b> e racchiude circa <b>12.000 esemplari</b> di <b>600 
                    specie</b> da tutti i mari del mondo. L’Acquario offre anche l’occasione di avventurarsi in altre esperienze ad alto tasso d’emozione.
                </p>
                <div className='mb-3 d-flex justify-content-center'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ootcZHhvzlg?si=WLteExp8dV44TcNV" title="YouTube video dell'Acquario di Genova" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h2 className="color-subtitle">Un tuffo dove l'acqua è più blu</h2>
                <p>
                    Il percorso avvolge da subito i visitatori con le suggestioni del <b>Pianeta blu</b>: una video mappa mostra la <b>distribuzione delle acque</b> sulla Terra e sensibilizza sul <b>ruolo cruciale che hanno per la vita</b>, dall’antichità 
                    a oggi. L’avventura inizia nella <b>Grotta delle murene</b>, dove le temibili creature si mimetizzano acquattate tra le rocce di un’alta vasca cilindrica che evoca una conchiglia. Poco lontano nuotano i <b>cavallucci marini</b> e 
                    il <b>polpo</b>. Ad accendere ogni fantasia è la <b>Laguna delle sirene</b>, dove sfrecciano i <b>lamantini</b>, i mammiferi acquatici erbivori che si dice abbiano dato origine al mito delle sirene. L’Acquario di Genova è l’unico in 
                    Italia dove si può ancora ammirare questa specie, a rischio di estinzione.
                </p>
                <h2 className="color-subtitle">A tu per tu coi delfini</h2>
                <p>
                    Dal richiamo delle sirene al fiato sospeso per la <b>Baia degli squali</b>: qui a Genova sono rappresentate diverse specie di predatori del mare, sul fondale scorrazzano anche due esemplari di pesce sega dal rostro dentellato. Una 
                    passerella sorvola l’<b>Isola delle foche</b>, ma l’esperienza più emozionante è nel <b>Padiglione dei cetacei</b>, dove avviene l’incontro ravvicinato con i <b>delfini</b>: quattro vasche a cielo aperto ospitano una piccola comunità di 
                    esemplari costieri. Grazie a una struttura su due livelli è possibile osservarli sia in superficie che da una prospettiva subacquea.
                </p>
                <h2 className='color-subtitle'>Biodiversità a 360°</h2>
                <p>
                    Riemergendo dall’acqua, il percorso si snoda all’interno della grande <b>Nave blu</b>, nel <b>Padiglione della biodiversità</b>. Con la dovuta prudenza si può accarezzare il manto delle razze e senza muoversi dai <b>Tropici</b> ci si può 
                    rituffare in una laguna corallina popolata da <b>pesci palla, pesci napoleone</b> e <b>squali zebra</b>. La rotta dei Tropici prosegue in superficie, il visitatore si addentra nella <b>Foresta tropicale</b>, uno tra gli ambienti a più 
                    elevata <b>biodiversità</b>, dove vive oltre la metà delle specie animali e vegetali esistenti sulla Terra.
                </p>
                <h2 className="color-subtitle">La danza delle meduse</h2>
                <p>
                    Ci sono sale che, oltre a soddisfare curiosità biologiche o naturalistiche, rappresentano un’autentica <b>festa per gli occhi</b>, come quella animata dal movimento ipnotico e fluttuante delle <b>meduse</b>: nove vasche con specie provenienti 
                    dai diversi mari del mondo. A <b>giochi pirotecnici di colori</b> si assiste anche nell’area delle <b>scogliere coralline</b>, uno degli ecosistemi marini più a rischio: qui, sotto luci che simulano quella di una notte di luna piena, si ammira 
                    la <b>fluorescenza dei coralli</b>, mentre accanto nuotano <b>pesci pagliaccio</b> e <b>pesci cardinale</b>.
                </p>
                <h2 className="color-subtitle">Avventura notturna con gli squali</h2>
                <p>
                    Disponendo di tempo extra, i <b>bambini dai 7 agli 11 anni</b> possono provare l’esperienza temeraria di <b>una notte con gli squali</b>, dormendo su brandine da campo davanti alla loro vasca, per osservarne il comportamento notturno e scoprire 
                    come si trasforma l’Acquario quando cala la sera. L’avventura inizia alle ore 21 e prevede una <b>visita guidata notturna</b> dell’Acquario, <b>attività di animazione</b> e il <b>pernottamento</b> in sacco a pelo.
                </p>
                <h2 className="color-subtitle">Avventura nella foresta tropicale</h2>
                <p>
                    Una <b>goccia di vetro e acciaio</b> affacciata sul mare: <b>Biosfera</b> è il nome della scenografica tecno-sfera progettata dall’architetto <b>Renzo Piano</b> nel Porto Antico: penetrare all’interno della sua vegetazione fitta e misteriosa è 
                    l’occasione per imparare a conoscere la <b>fauna e la flora delle foreste tropicali</b>, ecosistemi fragili che lo sfruttamento umano ha messo sotto scacco.
                </p>
                <h2 className="color-subtitle">Avventura in quota sull’ascensore panoramico</h2>
                <p>
                    Un altro <b>progetto</b> di Renzo Piano, responsabile della riqualificazione dell’intera area del Porto Antico, è <b>Bigo</b>, il nome delle gru anticamente usate per movimentare le merci, a cui si ispira. Indica la struttura destinata a sostenere 
                    il tendone di <b>Piazza delle Feste</b>, dove si svolgono eventi e rassegne. Uno dei suoi bracci regge anche l’<b>ascensore panoramico</b>, che in pochi secondi raggiunge i <b>40 metri d’altezza</b>, offrendo ai passeggeri una <b>spettacolare vista 
                    panoramica</b> sul porto e sul reticolo dei carrugi.
                </p>
                <h2 className="color-subtitle">Ingressi su misura</h2>
                <p>
                    Le scoperte non finiscono qui: la sola visita dell’Acquario prende 2/3 ore, ma il percorso offre svariati <b>spunti di approfondimento</b>: nel corso della giornata è possibile fare sosta e consumare una <b>colazione</b> o uno <b>snack</b> presso 
                    il <i>Tender Cafè</i> o un pranzo al ristorante <i>Gusto a Bordo</i>, all’interno dell’Acquario. Le formule d’ingresso e i percorsi sono piuttosto articolati, consigliamo di individuare quello che fa al caso vostro direttamente sul sito, dove si 
                    può beneficiare di una gran varietà di <b>prezzi</b>.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6746.791530266572!2d8.921478098673914!3d44.40998304905104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343e101e57227%3A0x57b7c3ba05fd1126!2sAcquario%20di%20Genova!5e1!3m2!1sit!2sit!4v1712736168213!5m2!1sit!2sit"
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
