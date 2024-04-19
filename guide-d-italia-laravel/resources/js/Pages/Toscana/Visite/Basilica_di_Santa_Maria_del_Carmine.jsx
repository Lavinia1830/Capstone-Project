import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Basilica_di_Santa_Maria_del_Carmine(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='basilica_di_santa_maria_del_carmine' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Basilica di Santa Maria del Carmine</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Situata sul lato meridionale di Piazza del Carmine, questa cappella è uno scrigno contenente dipinti di Masolino da Panicale, Masaccio e Filippino Lippi. In particolare gli affreschi di Masaccio sono considerati tra i suoi lavori più importanti, e rappresentano una definitiva cesura con l’arte 
                        gotica e una svolta verso nuovi modi espressivi che preannunciano il primo Rinascimento.
                    </p>
                    <p>
                        Eretta nell’omonima piazza, la <strong>Chiesa di Santa Maria del Carmine</strong> è un esempio di imponenza architettonica con una facciata realizzata in pietra e laterizio. La chiesa venne fondata nel 1268 ed è stata completata nel 1476, diventando famosa soprattutto per la Cappella Brancacci, 
                        decorata con i notevoli affreschi di Masaccio e Masolino. Nel corso dei secoli XVI e XVII la chiesa subì trasformazioni importanti, e nel 1771 subì un devastante un incendio. Giulio Mannaioni ne curò la ricostruzione seguendo un progetto di Giuseppe Ruggieri nel 1775.<br/>
                        L’interno, a croce latina, è caratterizzato da una sola navata e cinque altari per ogni parte, decorati con stucchi in stile settecentesco. La chiesa presenta una lunghezza di 82 metri, una larghezza di 15 e l’altezza della cupola è di 34 metri. I soffitti sono adornati da affreschi di maestri 
                        quali Giuseppe Romei, mentre nelle cappelle possiamo ammirare dipinti del XVII secolo, tra cui la Crocefissione di Giorgio Vasari (1560). La Cappella Brancacci, che si trova all’interno della chiesa con entrata indipendente, è una meta di grande interesse storico-artistico e che può essere agevolmente
                        visitata attraverso un percorso appositamente studiato.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.9946855444575!2d11.243365237486056!3d43.76826179960577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515329c8323f%3A0xb5c1ff6fc35d2044!2sChiesa%20di%20Santa%20Maria%20del%20Carmine!5e1!3m2!1sit!2sit!4v1713193341727!5m2!1sit!2sit"
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
