import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';

export default function Tridentum(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='tridentum' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Tridentum</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <div className='mb-3 d-flex justify-content-center'>
                        <iframe width="600" height="338" src="https://www.youtube.com/embed/VWvLdirBwc0" title="Tridentum VR trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p>
                        Nel sottosuolo di Trento, vivono i resti di <strong>Tridentum</strong>, splendidum municipium, così definita nel noto editto dell’imperatore Claudio nel 46 d.C. (<b>Tabula Clesiana</b>). Tridentum nacque probabilmente in età cesariana, attorno alla metà del I secolo a.C. La questione relativa alla 
                        fondazione di Tridentum ha sempre fatto discutere gli studiosi, certo è che la fondazione avvenne sicuramente prima del 23 a.C., come documenta l’importante epigrafe murata come pietra di reimpiego nella <b>chiesa trecentesca di Sant’Apollinare</b>. <i>Tridentum</i> sorse per ragioni strategiche 
                        nella Valle dell’Adige, essendo posto su di un importante asse viario di collegamento.<br/>
                        L’impianto ortogonale occupava un’area di <b>13 ettari</b>, protetto su tre lati dalla cinta muraria, ad eccezione di quello settentrionale in cui era naturalmente difeso dal fiume Adige. Le mura urbiche, in opus coementicium, erano intervallate da torri quadrangolari poste a cavaliere in 
                        corrispondenza di cardini e decumani.  Le porte principali si aprivano su più punti della città, di cui si è conservata soltanto la porta sul lato meridionale, chiamata da una fonte alto-medievale “<i>Porta Veronensis</i>”, dalla quale il cardo massimo usciva verso sud. Dell’edilizia pubblica pochi 
                        sono le informazioni, infatti risulta ancora oggi molto incerta la collocazione dell’<b>area forense</b>, ipotizzata secondo alcuni archeologi nell’area di piazza S. Maria Maggiore.  Mentre, al di fuori del perimetro urbano, là dove oggi sorge il quartiere di San Pietro, tra la fine del I e inizi 
                        II secolo d.C., fu innalzato l’<b>anfiteatro</b>.
                    </p>
                    <p>
                        Nella seconda metà del I secolo d.C., nella zona suburbana occidentale venne a svilupparsi un vasto quartiere residenziale, dove i cittadini più abbienti costruirono le loro ricche residenze. Anche le necropoli, in conformità alle legge vigenti romane, erano situate all’esterno del centro abitato lungo i 
                        principali assi viari. Il periodo di maggior sviluppo di <i>Tridentum</i> corrisponde dal I secolo d.C. fino alla seconda metà del III secolo d.C., quando iniziarono a mutare le condizioni a seguito delle incursioni e saccheggi delle popolazioni barbariche. Per questo motivo la città rafforzò l’antico 
                        perimetro urbico con l’addossamento alla prima cortina muraria, larga 1,20 metri, di un secondo muro (1,40-1,50 metri) adiacente al primo, a formare un’unica struttura di tre metri. Lungo il lato orientale il circuito difensivo inglobò al suo interno l’anfiteatro, visto che se occupato, avrebbe costituito 
                        un grave elemento di pericolo per le difese del centro urbano. Nel settore suburbano le grandi villae extra moenia, vennero rapidamente abbandonati e ridotti a rudere o ad altro uso dopo essere stati spogliati degli arredi.
                    </p>
                    <p>
                        Nel IV secolo d.C. si registrano parcellizzazione degli spazi e abbandono all’interno della città, ma continuano ad essere attestata anche una classe sociale agiata con buona disponibilità finanziaria, come testimonia l’edificio pubblico, dotato di prestigiosi ambienti, individuato nel corso degli 
                        scavi di <b>piazza Verzeri</b> (già Bellesini).<br/>
                        A partire dalla seconda metà del IV secolo d.C., all’interno del tessuto cittadino vennero a crearsi nuovi spazi e architetture legate alla religione cristiana: prima eccelsia nell’area di Santa Maria Maggiore e la basilica paleocristiana sotto l’attuale Duomo, costruita intorno al 400, che ospiterà 
                        le spoglie di S. Vigilio e dei martiri anauniensi, un terzo luogo di culto venne eretto sul Dos Trento.<br/>
                        La città non venne mai abbandonata, ma impoverita sopravvisse alle incursioni barbariche, finché fu sopraffatta dalla città medievale e poi moderna, lasciandoci importanti testimonianze.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Tridentum la città sotterranea</h2>
                    <p>
                        Nel sottosuolo del centro storico di Trento vive l'antica Tridentum,  inglobata nella Trento medievale e moderna. Oggi, in seguito a ricerche e scavi archeologici, è stato possibile riportare alla luce e rendere visitabili alcune aree dell'antico centro abitato. 
                    </p>
                    <p>
                        È nato così il progetto " Tridentum . La città sotterranea”, una rete di siti che offre ai visitatori un avvincente percorso alla scoperta dell'antica realtà urbana e della vita quotidiana della Trento romana. Sono attualmente visitabili il S.A.S.S. (Spazio Archeologico Sotterraneo del Sas), 
                        l'area archeologica di Palazzo Lodron, la Porta Veronensis e la Basilica Paleocristiana del Duomo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.068940950572!2d11.123009567811904!3d46.069554204754134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782717d3f3e82ff%3A0xb66d6d5c4a3f1933!2sTridentum%20-%20S.A.S.S.%20Spazio%20Archeologico%20Sotterraneo%20del%20Sas!5e1!3m2!1sit!2sit!4v1712917218837!5m2!1sit!2sit"
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
