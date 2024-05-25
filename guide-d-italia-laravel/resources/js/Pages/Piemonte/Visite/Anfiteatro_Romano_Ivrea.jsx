import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Anfiteatro_Romano_Ivrea(props) {
    return (
        <>
            <Head title="Anfiteatro Romano di Ivrea"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='anfiteatro_romano_ivrea' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Afiteatro Romano di Ivrea</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <b>Risalente alla metà del I secolo d.C.</b>, l’<strong>Anfiteatro d’Ivrea</strong> si trova al di fuori delle <b>mura della città</b>, sulla 
                            via che conduce a <Link href='/destinazioni/piemonte/vercelli' className='text-decoration-none color_link'>Vercelli</Link>. Si ritiene che la 
                            sua <b>capienza</b> variasse da <b>10.000</b> a <b>15.000 persone</b>. <br/>
                            Esteso per <b>65 metri</b>, dell’Anfiteatro restano le <b>fondazioni dei muri</b>, in particolare quello <b>perimetrale ellittico esterno</b> e 
                            ulteriori <b>mura laterali di sostituzione</b>, ovvero strutture in tutto o in parte <b>sotterranee</b> per sostenere un <b>edificio sovrastante</b>. <br/>
                            Durante i lavori di <b>scavo</b>, avvenuti all’inizio del <b>1955</b>, sono state individuate le <b>fondazioni dei muri</b>, in particolare 
                            del <b>muro esterno ellittico</b>, nonché dei <b>muri di sostituzione</b>. Inoltre, sono stati scoperti alcuni <b>cunicoli sotterranei</b>, nei 
                            quali venivano custoditi gli <b>animali da combattimento</b>. Tale <b>anfiteatro eporediese</b> presenta, come rinvenuto dagli <b>scavi del 
                            ’55</b>, diversi <b>frammenti di affreschi</b> ed un lungo tratto di <b>rivestimento in bronzo</b> per le <b>spalliere di sedili del podio</b>. 
                            Nei pressi dell’anfiteatro, i <b>Romani</b> fecero abbattere una <b>villa preesistente</b>, di cui sono state 
                            ritrovate <b>monete</b>, <b>anfore</b>, <b>frammenti di statue</b> e <b>resti di intonaco dipinto</b>.
                        </p>
                        <p>
                            La <Link href='/visite/valle_d_aosta/aosta/via_francigena' className='text-decoration-none color_link'>via delle Gallie</Link>, che 
                            univa <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link> ai territori al di là delle Alpi, portava 
                            anche all’antica <b>Eporedia</b>. Quest’ultima, divenendo un importante nodo commerciale e tappa d’obbligo, si sviluppò notevolmente, 
                            soprattutto durante l’<b>età imperiale</b>. Estendendosi oltre le mura, soprattutto nella parte <b>orientale</b>, sorsero dei nuovi quartieri, 
                            come è testimoniato da <b>fonti medievali</b> e da <b>scavi archeologici</b>. Un’area ad uso prevalentemente <b>commerciale</b> è stata 
                            identificata anche a nord della <Link href='/visite/valle_d_aosta/aosta/porta_praetoria' className='text-decoration-none color_link'>Porta Praetoria</Link>.
                        </p>
                    </div>
                    <div className='margin mb-4'>
                        <h3 className='color-subtitle text-center'>Mappa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1266.0607377215758!2d7.886554724557531!3d45.46808530120047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47888359c96946ad%3A0x1024074dc42b8a23!2sAnfiteatro%20romano!5e1!3m2!1sit!2sit!4v1716646285314!5m2!1sit!2sit"
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
