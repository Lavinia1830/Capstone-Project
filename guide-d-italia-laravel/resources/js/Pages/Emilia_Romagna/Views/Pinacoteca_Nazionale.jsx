import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Pinacoteca_Nazionale(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='pinacoteca_nazionale' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Pinacoteca Nazionale</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        La <strong>inacoteca Nazionale di Bologna</strong>P nasce nel 1808 come quadreria dell’Accademia di Belle Arti, l’istituto d’istruzione sorto dalle ceneri della settecentesca Accademia Clementina. L’antico nucleo, proveniente dall’Istituto delle Scienze, fu in seguito 
                        arricchito dalla straordinaria raccolta di quasi mille dipinti frutto delle soppressioni di chiese e conventi compiute dopo l’ingresso delle truppe napoleoniche a Bologna, tra il 1797 e il 1810, e nuovamente a seguito delle soppressioni del 1866 attuate dal nuovo stato 
                        italiano.
                    </p>
                    <p>
                        Nella sede distaccata di Palazzo Pepoli Campogrande è possibile ammirare le sale splendidamente affrescate dai principali protagonisti della grande decorazione bolognese tra la seconda metà del Seicento e gli inizi del secolo successivo: il Salone d’onore con la trionfale 
                        Apoteosi di Ercole di Canuti, la Sala di Felsina con le pitture composte e aggraziate dei fratelli Rolli, le sale delle Stagioni e dell’Olimpo, dove l’irriverente Giuseppe Maria Crespi contamina la decorazione celebrativa con i modi della pittura di genere, l’elegante 
                        classicismo della Sala di Alessandro di Donato Creti. Gli ambienti del piano nobile di Palazzo Pepoli Campogrande ospitano alle pareti alcuni dipinti della quadreria Zambeccari, la ricca collezione destinata alla pubblica fruizione a fine Settecento dal marchese Giacomo 
                        Zambeccari ed entrata a far parte delle raccolte della Pinacoteca nel 1884.  
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.4448642985274!2d11.353052982598502!3d44.49748861128797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bb1de70405%3A0xe67a2e08c4cf2dcf!2sPinacoteca%20Nazionale%20di%20Bologna!5e1!3m2!1sit!2sit!4v1713162448718!5m2!1sit!2sit"
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
