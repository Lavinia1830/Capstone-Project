import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_San_Petronio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_san_petronio' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di San Petronio</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La basilica dedicata a San Petronio, patrono di Bologna, di cui fu vescovo nella prima metà del V secolo, eleva la sua fronte sulla Piazza Maggiore, il centro politico e storico della città.<br/>
                        La costruzione di questa basilica ebbe inizio nel <b>1390</b> su progetto di <b>Antonio di Vincenzo</b>, che morì quando l’opera era stata da poco iniziata.<br/>
                        Ai primi del Cinquecento, <b>Arduino Arriguzzi</b> ne ideò un completamento di proporzioni colossali e senza uguali nel mondo intero.<br/>
                        La basilica, pur rimasta incompiuta, è lunga 132 metri, larga 60 e alta 45.<br/>
                        Capolavoro della scultura di ogni tempo è il portale maggiore, opera di <b>Jacopo della Quercia</b>, eseguito nella prima metà del Quattrocento. Nella lunetta sono le statue della <i>Madonna col Bambino</i> tra i santi Petronio e Ambrogio. Nelle pilastrate episodi 
                        dell’Antico e Nuovo Testamento.
                    </p>
                    <p>
                        Anche nelle arti minori della prima metà del Cinquecento l’Antico e il Nuovo Testamento ispirarono una serie di immagini culminanti nel mistero pasquale di Cristo, raffigurato nella <i>Deposizione</i> scolpita da <b>Amico Aspertini</b> e nella <i>Resurrezione</i>, opera 
                        di <b>Alfonso Lombardi</b>.<br/>
                        Così già nella facciata di San Petronio venivano proposti i fondamenti della fede cristiana e della storia della salvezza, dalla creazione dell’uomo alla sua redenzione in Cristo.
                    </p>
                    <p>
                        Ultimo grande frutto dell’<b>architettura gotica</b>, la basilica ha un senso dello spazio che è già rinascimentale, una monumentalità solenne e sicura in cui, pur nella grandiosità delle dimensioni, non ci si sente a disagio.
                    </p>
                    <p>
                        La <b>prima cappella</b> della navata sinistra presenta alle pareti laterali due affreschi di <b>Giovanni da Modena</b> del 1420. Qui vediamo <i>Il trionfo della chiesa sulla Sinagoga</i>. La croce a quattro braccia incorona la chiesa e sconfigge la Sinagoga.
                    </p>
                    <p>
                        La <b>seconda cappella</b> custodisce le reliquie di <b>San Petronio</b>. Fu fatta riccamente adornare nella prima metà del Settecento dal cardinale bolognese Pompeo Aldrovandi, che ne affidò il progetto ad Alfonso Torreggiani.
                    </p>
                    <p>
                        Nella <b>quarta cappella Bartolomeo Bolognini</b>, ricco mercante dell’inizio del XV secolo, fece eseguire da <b>Giovanni da Modena</b> uno splendido ciclo di affreschi, Il Paradiso, qui vediamo un particolare con la teoria ordinata dei santi, L’<i>Inferno</i>, ricco di dettagli 
                        realistici sulle pene inflitte ai peccatori, secondo la visione rappresentata da Dante Alighieri nella <i>Divina Commedia</i>. <br/>
                        Il <b>ciclo dei Magi</b>, di cui vediamo in particolare un originale ritorno in Oriente e via mare.<br/>
                        Sull’<b>altare</b> risplende un ricchissimo polittico ligneo intagliato da ignoto scultore e dipinto del pittore bolognese <b>Jacopo di Paolo</b> nei primi anni del XV secolo.<br/>
                        Tra la <b>quarta e la quinta cappella</b> si trova la più nota ed antica immagine di <b>San Petronio</b>, una bella statua lignea policroma che dalla fine del Trecento fu esposta alla venerazione dei fedeli.
                    </p>
                    <p>
                        La <b>quinta cappella</b>, dedicata a <b>San Sebastiano</b>, custodisce, fra gli altri gioielli, una bellissima <i>Annunciazione</i>, di cui vediamo il particolare dell’Angelo, opera di <b>Giacomo Francia</b> alla fine del XV secolo.<br/>
                        Il magnifico pavimento di questa cappella è del 1487 ed è costituito da mattonelle di maiolica eseguite da artisti faentini. Vi sono effigiati animali, fiori, frutti, scene sacre, emblemi araldici.
                    </p>
                    <p>
                        La <b>settima cappella</b>, dedicata a <b>San Giacomo</b>, mostra una tavola molto bella del pittore ferrarese <b>Lorenzo Costa</b>, eseguita nel 1492. Rappresenta la Vergine col Bambino e i santi Giacomo, Girolamo, Sebastiano e Giorgio.
                    </p>
                    <p>
                        L’<b>ottava cappella</b> è dedicata a <b>San Rocco</b>. Il santo è raffigurato insieme al committente nella tela del Parmigianino, prima metà del Cinquecento. È un’opera di grande importanza per la pittura umanistica e barocca bolognese.
                    </p>
                    <p>
                        Lungo la navata si estende la famosa <b>meridiana</b>, opera di <b>Gian Domenico Cassini</b>. L’altezza del foro, da cui entra la luce del sole che interseca la meridiana a mezzogiorno, è di 27 metri.
                    </p>
                    <p>
                        Sopra l’altare maggiore si eleva una grande tribuna, innalzata nel corso del XVI e XVII secolo su progetti del <b>Vignola</b>, di <b>Francesco Martini</b> e di <b>Gian Giacomo Monti</b>.<br/>
                        Il grande crocifisso è opera di anonimo del XV secolo.
                    </p>
                    <p>
                        Dei <b>due organi</b> situati nelle cantorie, quello destro fu realizzato nella seconda metà del Quattrocento da <b>Lorenzo da Prato</b>, primo nel mondo per l’ambito di 51 note e 10 registri indipendenti. Il secondo è opera di <b>Baldassarre Malamini</b> verso la fine del 
                        Cinquecento.
                    </p>
                    <p>
                        La <b>prima cappella della navata destra</b> è dedicata alla <i>Madonna della Pace</i> per l’immagine della Vergine, scolpita in pietra d’Istria dal tedesco <b>Giovanni Ferabech</b> nel 1394.<br/>
                        Proseguendo nella navata destra, la <b>quarta cappella</b> è detta della Santa Croce per il grande crocifisso posto sopra l’altare, dipinto dal bolognese <b>Ercole Banci</b> agli inizi del Cinquecento.<br/>
                        Sopra l’altare vediamo un particolare della finestra decorata intorno al 1465 dal domenicano <b>Giacomo da Ulma</b>, dalle caratteristiche e ricche intonazioni cromatiche.
                    </p>
                    <p>
                        In una grotta, in fondo alla navata destra è posto un <i>Compianto sul Cristo deposto dalla Croc</i> e in terracotta policroma, realizzato dal bolognese <b>Vincenzo Onofri</b> sul finire del XV secolo.<br/>
                        All’inizio e alla fine delle due navate si trovano le <b>croci</b> poste, secondo la tradizione, dallo stesso San Petronio alle quattro porte della città e sistemate all’interno della basilica nel 1798.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.984030902441!2d11.342455581466947!3d44.49299842277024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd495860346b7%3A0xa17d71587906b0a5!2sBasilica%20di%20San%20Petronio!5e1!3m2!1sit!2sit!4v1712997905235!5m2!1sit!2sit"
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
