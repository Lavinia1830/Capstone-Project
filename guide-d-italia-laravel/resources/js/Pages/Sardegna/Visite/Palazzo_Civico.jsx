import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_Civico(props) {
    return (
        <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='palazzo_civico' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Civico</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className='margin mt-3'>
                        <p className='fst-italic text-center'>
                            Un bellissimo palazzo in pietra bianca, simbolo di un cambiamento epocale e sede del municipio del capoluogo della Sardegna, spicca nel quartiere della Marina
                        </p>
                        <p>
                            Il <strong>Palazzo Civico di Cagliari</strong> si erge di fronte al porto come un baluardo di pietra bianca, elegante per forme e colori e in perfetta sintonia con gli altri antichi palazzi di via Roma. In origine la sede della municipalità era a <b>piazza Palazzo</b>, nel 
                            quartiere <b>Castello</b>, parte alta e fortificata della città, simbolo difensivo. Per lungimirante iniziativa del sindaco Ottone Bacaredda, la principale Istituzione cittadina fu trasferita nel quartiere popolare della <b>Marina</b>, ai confini con <b>Stampace</b>, di fronte 
                            al mare, facendo intravedere ambizioni da ‘salotto borghese’. Nel 1896 il consiglio comunale deliberò che la sede uscisse dalle mura e scendesse verso il porto. I lavori furono realizzati in pietra calcarea e su modelli gotico-catalani, con decori in stile Liberty. Nel 1907 la solenne 
                            inaugurazione. Il trasferimento fu espressione di una nuova idea politica, tipica della borghesia commerciale: visibilità, confronto e apertura, un taglio con l’atteggiamento aristocratico orgoglioso e diffidente. Cagliari si propose come città moderna, con un biglietto da visita 
                            di grande impatto: il suo nuovo Palazzo Civico che, non risparmiato dai bombardamenti della seconda guerra mondiale, fu ristrutturato tra 1946 e 1953.<br/>
                            Il palazzo, che potrai visitare come un museo, occupa un isolato tra le vie Roma, in cui si apre l’ingresso principale, Crispi, Angioi e il largo Carlo Felice. Il porticato caratterizza la facciata: sette arcate più quella centrale, da cui accederai al cortile. Sulla sommità dominano 
                            due torrette ottagonali, alte 38 metri, agli angoli svettano quattro obelischi, decorati con le teste dei Quattro Mori. Opere bronzee di Andrea Valli ornano i prospetti: sono un’aquila, che regge lo stemma della città, due leoni e le rappresentazioni allegoriche di Agricoltura, 
                            Commercio e Industria. Tramite una scalinata a due rampe salirai ai piani superiori. Nella sala del Consiglio ammirerai tre imponenti tele di Filippo Figari. La vicina sala della Giunta ospita il Gonfalone e il retablo dei Consiglieri (XVI secolo). Nella sala dei Matrimoni ammirerai 
                            un’altra opera del Figari che raffigura il matrimonio in Sardegna e pregevoli arredi artigianali. Vi sono custoditi anche gioielli, reperti archeologici e il simulacro di sant’Agostino giacente. Nella sala del Sindaco spicca un grande arazzo fiammingo (1620) e in quella Sabauda tre 
                            opere del Marghinotti: i ritratti di Vittorio Emanuele II e di Carlo Alberto e il suo arrivo a Cagliari nel 1840.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543.8756698208605!2d9.110132120737255!3d39.2152430701754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e734064dbd3757%3A0xd303c4b8aaf592be!2sPalazzo%20Civico%20di%20Cagliari!5e1!3m2!1sit!2sit!4v1713531118389!5m2!1sit!2sit"
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
