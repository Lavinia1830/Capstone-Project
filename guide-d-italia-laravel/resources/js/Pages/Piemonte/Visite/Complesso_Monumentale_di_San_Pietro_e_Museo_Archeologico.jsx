import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Complesso_Monumentale_di_San_Pietro_e_Museo_Archeologico(props) {
    return (
        <>
            <Head title="Complesso Monumentale di San Pietro e Museo Archeologico"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='c_m_di_san_pietro_e_m_a' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>Complesso Monumentale di San Pietro e Museo Archeologico</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            Il <strong>Complesso Monumentale di S. Pietro in Consavia</strong> comprende la <b>chiesa rotonda</b>, la contigua <b>cappella Valperga</b>, 
                            il <b>chiostro</b> e parte della <b>casa priorale</b>. I locali dell’ospedale, in origine destinati ad accogliere pellegrini e viaggiatori, 
                            esistono ancora sul lato sud del chiostro, ma sono oggi di proprietà privata. Dal <b>XII secolo</b> fino al <b>1798</b> il complesso
                            appartenne ai <b>Cavalieri di San Giovanni di Gerusalemme</b>. Lo stato attuale degli edifici è frutto di un  intervento di restauro 
                            del <b>1930-31</b>.La <b>chiesa rotonda</b> fu costruita tra il <b>1110</b> e il <b>1130</b>. La sua intitolazione originaria al <b>Santo 
                            Sepolcro</b> e la sua forma la collocano tra gli esempi più significativi di chiese edificate ad imitazione della rotonda del <b>Santo 
                            Sepolcro di Gerusalemme</b>, contenente al suo interno l’edicola con il <b>sepolcro di Cristo</b>. La <b>cappella Valperga</b>, a 
                            pianta quadrata, fu costruita tra il <b>1446</b> e il <b>1467</b> per volontà del priore <b>Giorgio Valperga</b>. Essa si segnala 
                            all’esterno per i <b>fregi in terracotta</b>. Notevoli, all’interno, le <b>quindici formelle</b> della cornice della <b>finestra 
                            centrale</b> e le <b>mensole scolpite a mascheroni</b> su cui si impostano le <b>nervature della volta</b>. Tutte le decorazioni in 
                            terracotta sono attribuite a <b>Francesco Filiberti di Alessandria</b>.Il <b>chiostro</b>, con pilastri circolari e volte a crociera dalla 
                            perfetta tessitura muraria, assunse un aspetto molto simile a quello odierno solo nel ’<b>400</b>. I locali della <b>casa priorale</b> sono 
                            quasi integralmente frutto dell’intervento del <b>1930-31</b>. Nel Complesso di San Pietro ha sede dal <b>1932</b> il <b>Museo Archeologico</b>. 
                            Costituto in massima parte da quattro collezioni donate da cittadini astigiani tra fine Otto e inizio Novecento, il Museo 
                            comprende <b>metalli pre-romani</b>, <b>ceramiche greche</b>, <b>magnogreche ed etrusche</b>, e una consistente raccolta di <b>reperti 
                            romani</b>: <b>vasellame</b> e <b>lucerne in terracotta</b>, <b>urne cinerarie</b>, <b>vetri</b>, <b>bronzi</b>. Parte dei materiali romani 
                            proviene da <b>corredi funebri</b> di tombe del <b>I secolo d.C.</b> rinvenute nel <b>1879</b> alla periferia ovest di <b>Asti</b>. 
                            Nella piccola, ma significativa <b>sezione egizia</b> sono presenti due <b>mummie</b>, i relativi <b>sarcofagi lignei antropomorfi</b>, <b>vasi 
                            canòpi</b> ed una raccolta di <b>amuleti</b>, <b>ushàbti</b>, <b>statuine di divinità</b> ed altri oggetti di carattere religioso-funerario.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1278.6980546832258!2d8.212004105972865!3d44.902696947465444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47879317b7455633%3A0xab5544947df93c2!2sBattistero%20di%20San%20Pietro%20in%20Consavia!5e1!3m2!1sit!2sit!4v1717333521613!5m2!1sit!2sit"
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
