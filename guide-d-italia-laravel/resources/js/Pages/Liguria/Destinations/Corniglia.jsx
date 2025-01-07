import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Corniglia(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
      <main>
        <div className='corniglia' style={{ position: 'relative' }}>
          <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Corniglia</h1>
          <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
          <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Corniglia, borgo vedetta che dall’alto domina le Cinque Terre</h2>
            <p>
                Arroccata su una <b>spettacolare falesia</b> a strapiombo, <b>Corniglia</b> è l’unica borgata delle <Link href='/destinazioni/le_5_terre' className='text-decoration-none color_link'>Cinque Terre</Link> a non avere uno sbocco diretto sul mare. <br/>
                Il Tirreno si apre sotto, un centinaio di metri più in basso. Intorno, solo il verde del <b>Parco Nazionale delle Cinque Terre</b> punteggiato di terrazzamenti coltivati a vite e ulivi.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>La scenografica ascesa al borgo</h2>
            <p>
                Se arrivate con uno dei tanti <b>treni che percorrono la tratta tra La Spezia e Levanto</b>, cosa raccomandabile in alternativa all’auto, per salire sul cucuzzolo vi attende la <b>Scalinata Lardarina</b>: 33 rampe per 377 gradini che vi daranno la sensazione di galleggiare tra 
                roccia e acqua.<br/>
                È così che ascenderete al <b>promontorio sul quale si aggrappa il paese</b>, a 100 metri di altitudine, entrando fin da subito nella magia del paesaggio.
            </p>
            <p>
                Dedicatevi con calma a una passeggiata all’ombra dei vicoli, ammirando le case in pietra e gli antichi edifici religiosi. Tra questi spicca la <b>Chiesa parrocchiale di San Pietro</b> in stile gotico-ligure: il primo dettaglio a colpire è il rosone sulla facciata, un minuto “ricamo” 
                in marmo di Carrara. Spostatevi verso il settecentesco <b>Oratorio dei Disciplinati di Santa Caterina</b> . Dal <b>Santuario di San Bernardino</b> il panorama è uno dei più suggestivi. Sedotti da questo piccolo villaggio, potreste decidere di pernottare qui, <b>in una piccola 
                struttura oppure affittando appartamenti e stanze</b> messe a disposizione dalla gente del posto. Nessun Grand Hotel è sorto a Corniglia: un motivo di fascino in più.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Una fitta rete di sentieri</h2>
            <p>
                Nel programmare una visita a Corniglia, dotatevi di uno zaino con una buona scorta d’acqua, qualcosa da mangiare e scarpe da trekking. Perché <b>qui si cammina lungo un reticolo di sentieri</b> e non troverete altro che natura sulla vostra strada.
            </p>
            <p>
                Se volete fare un tuffo, trovate lo <b>Spiaggione</b> vicino alla stazione ferroviaria, mentre un’altra scalinata in partenza da Corniglia, in direzione Vernazza, conduce alla <b>Spiaggia della Marina</b>.
            </p>
            <p>
                Non mancate di arrampicarvi verso l’alto per un contatto diretto con lo splendido territorio dell’<b>entroterra</b>, sulle pendici a ridosso del mare: siete dentro il paesaggio più iconico delle Cinque Terre, premiato dall’<b>Unesco</b>, che lo ha inserito nella lista dei 
                luoghi Patrimonio dell’Umanità.
            </p>
            <p>
                <b>Uno dei sentieri più belli è quello che da Corniglia punta verso Manarola</b>, altra perla delle Cinque Terre, passando dalla frazione Volastra.<br/>
                Camminate sui pendii, su un percorso che presenta anche tratti molto ripidi e scalini scoscesi. <b>Con l’occhio si coglie la linea costiera</b>, intorno alberi da frutto, orti, uliveti e vigneti.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>La geniale arte agricola dei terrazzamenti</h2>
            <p>
                Una terra tanto meravigliosa quanto selvaggia. Eppure l’uomo ha trovato il modo di addomesticarla, rendendola coltivabile attraverso una tecnica ancestrale, già nota nel Medioevo: <b>i terrazzamenti sostenuti dai muretti a secco</b>, tipici di tutta l’area tra il Mar Ligure e 
                l’Appennino. Azzerata così la pendenza, le terrazze ospitano frutteti, uliveti e <b>i celebri vigneti dai quali nascono i vini liguri</b>. Un autentico spettacolo che vi accompagnerà durante il trekking, <b>capolavoro di ingegneristica agricola</b>.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Vini preziosi</h2>
            <p>
                Il premio per la camminata piuttosto faticosa, una volta rientrati in paese, è un calice di vino per innaffiare una cena o una selezione di stuzzichini.<br/>
                Scegliete l’<b>enoteca o il wine bar</b> che più vi aggrada, a Corniglia non farete fatica a trovarli. Concentratevi sugli straordinari vini locali, <b>i bianchi DOC e i rossi IGT delle Cinque Terre</b>. Non saltate il rito del dessert, perché qui è abbinato al <b>raro, 
                preziosissimo Sciacchetrà: un passito Presidio Slow Food</b> che vanta un’antica tradizione, prodotto dalle uve che provengono dai vigneti a terrazza locali.
            </p>
        </div>
        <div className="margin mt-3">
            <h2 className='color-subtitle'>Guvano, spiaggia leggendaria dall’atmosfera anni Settanta</h2>
            <p>
                Prima di lasciare Corniglia, la curiosità potrebbe spingervi a una puntata sulla <b>Spiaggia di Guvano</b>. Negli anni 70 è stata <b>un punto di riferimento per naturisti ed ecologisti</b>. Tuttora conserva uno charme speciale, incassata com’è in una baietta e protetta dalle 
                rocce alle spalle. Potete raggiungerla <b>via mare</b>, con imbarcazioni private a noleggio, o attraverso un percorso a piedi, non sempre praticabile. Ancora oggi è meta prediletta degli amanti del <b>nudismo</b>.
            </p>
        </div>
        <div className='margin mb-4'>
            <h3 className='color-subtitle text-center'>Mappa</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031.51634526497!2d9.707057887533574!3d44.11982706438364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4f00e56731fa9%3A0x71091f7f3077a043!2s19018%20Corniglia%20SP!5e1!3m2!1sit!2sit!4v1712841855301!5m2!1sit!2sit"
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
