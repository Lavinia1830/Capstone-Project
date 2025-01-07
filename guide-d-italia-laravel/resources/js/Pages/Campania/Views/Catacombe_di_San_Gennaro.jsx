import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Catacombe_di_San_Gennaro(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='catacombe_di_san_gennaro' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Catacombe di San Gennaro</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Le <strong>catacombe di San Gennaro e di San Gaudioso</strong> trovano spazio nelle viscere della città, raccontandone la storia più antica e lo strettissimo legame che <Link href='/destinazioni/campania/napoli' className='text-decoration-none color_link'>Napoli</Link> 
                        ha con la fede. Spazi che sono stati, per lunghissimo tempo, protrattosi fino all’età ducale, epoca cui seguirono devastazioni e saccheggi, cimiteri sotterranei e luoghi di preghiera. Dopo un lungo periodo di abbandono, nei primi anni 2000, padre Loffredo, insieme ai 
                        ragazzi della Sanità uniti nella cooperativa la Paranza e poi nella Fondazione San Gennaro, hanno preso in gestione i siti archeologici e li hanno radicalmente rigenerati. Anche l’impianto di illuminazione, in grado di valorizzare i chiaroscuri preservando il patrimonio 
                        pittorico del luogo, è stato realizzato dall’Officina dei Talenti, cooperativa formata dai ragazzi del quartiere.
                    </p>
                    <p>
                        Ad annunciare l’ingresso alle catacombe di San Gennaro è <b>una statua</b> del santo alta più di quattro metri, opera moderna di Lello Esposito. Risalgono al II secolo, e gli affreschi sono stati realizzati fino al X secolo. Nel III secolo vi fu deposto sant’Agrippino 
                        e agli inizi del V san Gennaro, le cui reliquie (poi trafugate nell’831) resero il luogo meta di devozione.
                    </p>
                    <p>
                        E poi, <b>tombe a forma di arco affrescate</b>, tra cui una con la più antica raffigurazione di san Gennaro (del V secolo), che rappresenta il martire tra una bambina e una donna e con il capo sormontato dalla scritta «Sancto Martyri Januario». E poi cunicoli, passaggi 
                        magnifici (come quello a tre archi decorati) conducono alla <b>basilica ipogea</b>basilica ipogea di fine V secolo, esempio unico nell’architettura delle catacombe, con elementi scolpiti nel tufo. Oppure alla cripta dei vescovi, dedicata alla memoria dei primi 
                        quattordici vescovi napoletani, con tombe ornate da notevoli mosaici con i ritratti di quattro vescovi del V secolo.
                    </p>
                    <p>
                        Ancora, la basilica di S. Agrippino, dal grande lucernario conico decorato; nell’altare, attraverso la fenestella confessionis, i fedeli toccavano la tomba di san Gennaro con panni che conservavano poi come reliquie. A sinistra è invece l’ambiente più bello delle 
                        catacombe, sorto come ipogeo gentilizio e poi ceduto alla comunità cristiana, con ai lati sarcofagi ricavati nel tufo, il soffitto impreziosito da pitture del II secolo e una vasca battesimale dell’VIII secolo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.4268668101114!2d14.247150165300173!3d40.86521945503217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b087b0c1be0af%3A0x21ae361ac00c4fed!2sCatacombe%20di%20San%20Gennaro!5e1!3m2!1sit!2sit!4v1713360981715!5m2!1sit!2sit"
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
