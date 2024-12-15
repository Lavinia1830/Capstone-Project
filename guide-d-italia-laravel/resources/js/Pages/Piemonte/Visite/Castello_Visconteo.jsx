import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Castello_Visconteo(props) {
    return (
        <>
            <Head title="Castello Visconteo"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='castello_visconteo' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Castello Visconteo</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Castello Visconteo</strong> nasce nel 1290 per ordine di Matteo Visconti ed è collocato di fronte ad una piccola piazza tra il 
                            ghetto ebraico e il <Link href='/visite/piemonte/vercelli/cattedrale_di_sant_eusebio' className='text-decoration-none color_link'>Duomo</Link>. 
                            Molto probabilmente l’edificio è sorto sulle rovine di strutture precedenti e nel corso del Trecento è stato dotato di armi da fuoco. <b>Ospita 
                            i podestà viscontei</b> fino a quando Vercelli diviene proprietà di Amedeo VIII di Savoia nel 1427. Dagli anni ’20 del Novecento, ospita 
                            il <b>tribunale cittadino</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Dal Castello Visconteo al tribunale cittadino</h2>
                        <p>
                            Il <b>castello</b>, adibito inizialmente a residenza sabauda, subisce importanti danneggiamenti a seguito dell‘<b>assedio spagnolo nel 1638</b>. 
                            Diviene così una <b>caserma</b> durante l’epoca napoleonica e anche un carcere durante il IXX secolo. Solo nel 1926 diventa a tutti gli effetti 
                            il <b>tribunale</b> di Vercelli. L’edificio attuale, nonostante i vari restauri e le ristrutturazioni da parte dei <b>Savoia</b>, riserva 
                            ancora oggi l’impianto quadrangolare originario, con delle torri quadrate agli angoli. La fortificazione dell’edificio è stata collegata alle 
                            mura comunali, a loro volta importanti per l’influenza sulla pianta del castello.
                        </p>
                        <p>
                            La torre a nord-est del castello sorgeva sulla linea delle <b>mura urbane</b>, mentre quella di sud-est rimaneva più esterna. Quest’ultima 
                            probabilmente serviva per raccordare il <b>castello</b> allo spazio triangolare esistente tra le <b>mura della città</b> e la struttura recintata 
                            interna.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Quello che non c’è più dell’antica struttura</h2>
                        <p>
                            Il <strong>Castello Visconteo</strong> presentava anche <b>una bassa torre</b> lungo il lato orientale, purtroppo non più esistente ma visibile 
                            nella tarsia cinquecentesca del <b>coro ligneo di Sant’Andrea</b>, realizzato intorno al 1511. In essa è raffigurato il castello di Vercelli, 
                            un’immagine quasi del tutto realistica. Il disegno mostra la presenza di una doppia cortina fra le due torri di levante.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">Il tribunale e l’antico Theatrum Sabaudiae</h2>
                        <p>
                            <b>Il castello aveva tre ingressi, serviti da ponti levatoi, ed era circondato su tre lati da un ampio fossato</b> tra i quali uno è ancora in 
                            uso sul lato meridionale. L’altro è ad oggi murato sul lato di ponente mentre l’ultimo e piccolo ingresso si trova nell’angolo sud orientale. 
                            Molto probabilmente, esso dava accesso alla strettoia fra le mura urbane e il recinto del castello.
                        </p>
                        <p>
                            Nel lato di ponente e quello meridionale del castello erano stati addossati, prima delle ristrutturazioni o degli ampliamenti dell’edificio nel 
                            XVII secolo, fabbricati come ad esempio una cappella castrense, con l’aggiunta di un <b><span className='fst-italic'>palatium</span> ed un corpo di guardia</b>. Questi 
                            ultimi sono ancora distinguibili nella veduta secentesca del <b className='fst-italic'>Theatrum Sabaudiae</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">All’interno del Castello</h2>
                        <p>
                            La <b>pianta interna</b> ebbe successivamente una completa ristrutturazione con la costruzione di altri corpi di fabbrica ai lati del 
                            quadrilatero, escludendo quello settentrionale. Inoltre fu inserita, più recentemente, anche la struttura meridionale che occupa una buona parte 
                            della corte antica. Il castello ospitò anche i <b>podestà viscontei</b> fino al <b>1427</b>, <b>lo stesso anno in cui Filippo Maria Visconti 
                            cedette Vercelli ad Amedeo VIII di Savoia</b>.
                        </p>
                    </div>
                    <div className="margin mt-3">
                        <h2 className="color-subtitle">La domus di Santo Stefano</h2>
                        <p>
                            Il <strong>Castello Visconteo</strong> <b> e le sue vicende sono tutt’ora una grande storia e un importante riferimento per i cittadini vercellesi</b>. 
                            Inoltre, i ritrovamenti archeologici del secolo scorso nel fossato a nord, permettono di pensare alla realistica presenza nell’edificio di resti antichi. 
                            Probabilmente potrebbero essere legati alla <b><span className='fst-italic'>domus</span> di Santo Stefano</b>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.6753754342483!2d8.425345213669363!3d45.327810984601136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47864c8aaa2d6e0f%3A0x1eea29700a436d26!2sCastello%20Visconteo%20di%20Vercelli!5e1!3m2!1sit!2sit!4v1716385142197!5m2!1sit!2sit"
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
