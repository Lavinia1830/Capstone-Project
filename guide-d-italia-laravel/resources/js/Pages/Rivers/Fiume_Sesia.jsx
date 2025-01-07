import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Fiume_Sesia(props) {
    return (
        <>
            <Head title="Fiume Sesia"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='fiume_sesia' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Fiume Sesia</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>fiume Sesia</strong> è uno dei più <b>importanti fiumi</b> dell’<b>Italia settentrionale</b> ed è lungo circa <b>140 km</b>. Nasce dalle <b>pendici 
                            del <Link href='/montagna/piemonte/monte_rosa' className='text-decoration-none color_link'></Link>Monte Rosa</b>, nelle <b>Alpi Pennine</b>, 
                            a <b>2.000 metri</b> sul livello del mare. Il fiume scorre verso sud attraversando le province di <Link href='destinazioni/piemonte/vercelli' 
                            className='text-decoration-none color_link'>Vercelli</Link>, <Link href='/destinazioni/piemonte/vercelli' 
                            className='text-decoration-none color_link'>Novara</Link> e <Link href='/destinazioni/piemonte/biella' className='text-decoration-none color_link'>Biella</Link>, 
                            per poi sfociare nel <Link href='/fiumi/piemonte/fiume_po' className='text-decoration-none color_link'>fiume Po</Link>, a nord di <b>Casale Monferrato</b>.
                        </p>
                        <p>
                            È un <b>fiume</b> di <b>montagna</b>, caratterizzato da un corso molto <b>tortuoso</b> e da un elevato grado di <b>erosione</b>. Durante il suo <b>percorso</b>, 
                            il fiume attraversa diverse <b>valli</b> e <b>gole</b>, creando paesaggi <b>mozzafiat</b>o e offrendo numerosi spunti turistici.
                        </p>
                        <p>
                            Le <b>sue acque</b> sono molto <b>importanti</b> per l’<b>agricoltura</b> della <b>pianura padana</b>, poiché vengono utilizzate per <b>irrigare</b> i <b>campi</b>. 
                            Inoltre, il <b>fiume</b> è molto apprezzato dagli <b>appassionati</b> di <b>sport acquatici</b>, come <b>rafting</b>, <b>canoa</b> e <b>kayak</b>.
                        </p>
                        <p>
                            Il <b>fiume</b> è stato al centro di molte <b>controversie</b> negli ultimi anni a causa dell’attività estrattiva delle <b>cave di ghiaia</b> presenti lungo il suo 
                            corso. L’estrazione di ghiaia ha causato una significativa <b>erosione</b> delle sponde del fiume, aumentando il rischio di <b>inondazioni</b> e provocando danni 
                            all’<b>ecosistema fluviale</b>.
                        </p>
                        <p>
                            Per <b>proteggere</b> il fiume, sono stati promossi diversi <b>progetti</b> di <b>ripristino</b> del suo corso <b>naturale</b> e di miglioramento 
                            della <b>qualità</b> delle <b>acque</b>. Tra questi, un importante progetto è stato realizzato nel tratto compreso tra la località di <b>Serravalle Sesia</b> e la 
                            confluenza con il fiume <b>Cervo</b>, che ha permesso di ripristinare il <b>letto</b> del fiume e di costruire alcune <b>opere</b> di <b>protezione</b> delle <b>sponde</b>.
                        </p>
                        <p>
                            <b>Inoltre</b>, il <b>fiume</b> è stato <b>incluso</b> nella <b>lista</b> dei <b>Siti di Importanza Comunitaria (SIC)</b> e 
                            delle <b>Zone di Protezione Speciale (ZPS)</b> dell’<b>Unione Europea</b>, a <b>conferma</b> della sua <b>importanza ecologica</b> e del suo <b>valore naturalistico</b>.
                        </p>
                        <p>
                            In conclusione, questo <b>corso d’acqua</b> rappresenta uno dei <b>tesori naturali</b> dell’<b>Italia settentrionale</b>, un <b>fiume</b> dalle <b>acque limpide</b> e <b>cristalline</b> che 
                            scorre nel cuore delle <b>Alpi</b> e che offre numerosi spunti <b>turistici</b> e <b>sportivi</b>. Tuttavia, la sua <b>salvaguardia</b> e la sua <b>protezione</b> sono 
                            fondamentali per garantire la sua <b>sopravvivenza</b> e quella dell’<b>ecosistema fluviale</b> che lo circonda.
                        </p>
                        <p>
                            Il <strong>fiume Sesia</strong> ha una <b>lunga storia</b> di <b>avvenimenti</b> legati alla sua <b>presenza</b> sul <b>territorio</b>. Tra le <b>leggende</b> più <b>celebri</b>, 
                            si racconta che lungo le sue <b>rive</b> si sia combattuta la <b>leggendaria battaglia</b> tra le <b>truppe di Annibale</b> e l’<b>esercito romano</b> nel <b>218 a.C.</b> Tuttavia, 
                            questa leggenda non è <b>supportata</b> da <b>fonti storiche attendibili</b>.
                        </p>
                        <p>
                            Tra gli avvenimenti storici più importanti, si ricorda la <b>fondazione</b> della città di <b>Vercelli</b>, avvenuta intorno al <b>VII secolo a.C.</b> Grazie alla 
                            sua <b>posizione strategica</b> sulla <b>via delle Alpi</b>, Vercelli divenne presto un importante centro di <b>scambi commerciali</b> tra la <b>pianura padana</b> e 
                            le <b>regioni alpine</b>.
                        </p>
                        <p>
                            Nel corso dei secoli, il <b>fiume</b> ha rappresentato anche un importante <b>confine</b> tra le diverse <b>potenze</b> che si sono succedute in <b>Italia settentrionale</b>. 
                            Nel <b>XII secolo</b>, ad esempio, la città di <Link href='/destinazioni/piemonte/vercelli' className='text-decoration-none color_link'>Vercelli</Link> fu coinvolta in 
                            una <b>guerra</b> tra il <b>Sacro Romano Impero</b> e il <b>Regno di Francia</b> per il controllo dei <b>territori alpini</b>.
                        </p>
                        <p>
                            Durante la Seconda Guerra Mondiale, il <b>fiume</b> fu teatro di <b>importanti battaglie</b> tra le <b>truppe alleate</b> e quelle <b>tedesche</b>. In particolare, nel 
                            settembre 1944, il <b>ponte di Varallo</b> fu <b>distrutto</b> dai <b>nazisti</b> per impedire l’avanzata degli <b>Alleati</b> verso la <b>Germania</b>.
                        </p>
                        <p>
                            Oggi, il <b>Sesia</b> rappresenta una <b>preziosa risorsa</b> per l’<b>agricoltura</b> e il <b>turismo</b> della regione, ma anche una <b>sfida</b> per 
                            la <b>protezione</b> dell’<b>ambiente</b> e dei suoi <b>ecosistemi</b>. Numerosi <b>progetti</b> sono stati avviati 
                            per <b>ripristinare</b> il <b>corso naturale</b> del <b>fiume</b> e <b>migliorare</b> la <b>qualità</b> delle <b>acque</b>, al fine di <b>preservare</b> la 
                            sua <b>bellezza</b> e la sua <b>importanza ecologica</b> per le <b>generazioni future</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10448.179127320886!2d8.426232257979864!3d45.34410546680388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47864c41282a4029%3A0xd8910e9d96149ed4!2sFiume%20Sesia!5e1!3m2!1sit!2sit!4v1716470109736!5m2!1sit!2sit"
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
