import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Piazza_del_Plebiscito(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='piazza_del_plebiscito' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Piazza del Plebiscito</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <h2 className="color-subtitle">La storia di Napoli in una delle piazze più belle d’Italia</h2>
                    <p>
                        È la piazza più grande di <b>Napoli</b> e una delle più grandi d'Italia. <strong>Piazza del Plebiscito</strong> si trova in pieno centro storico, tra il lungomare e via Toledo, ai piedi della collina di Pizzofalcone. Con i suoi 25mila metri quadrati, è stata il luogo simbolo 
                        della politica partenopea per secoli e, ancora oggi, ospita spesso concerti e altre manifestazioni di rilievo.
                    </p>
                    <p>
                        Nel 1860, la piazza ha assunto la sua attuale denominazione in onore del plebiscito con cui il Regno delle Due Sicilie si univa al Regno d'Italia. La sua storia, inoltre, è ben spiegata dalle <b>statue</b> presenti nelle nicchie delle arcate chiuse sul <b>Palazzo Reale</b>, 
                        realizzate da scultori diversi: ognuna, infatti, simboleggia una dinastia alla quale Napoli è stata sottoposta nel corso dei secoli.
                    </p>
                    <p>
                        Nelle immediate vicinanze di <strong>Piazza del Plebiscito</strong> potrete visitare la <b>Basilica di San Francesco di Paola</b> e il <b>Palazzo Reale</b> e ammirare le <b>statue equestri di Carlo III e Ferdinando I</b>. Ciliegina sulla torta, potrete sorseggiare un buon 
                        caffè in uno dei locali storici più eleganti della città, il <b>Gran Caffè Gambrinus</b>, per poi passeggiare sul lungomare o dedicarvi allo shopping lungo via Toledo o via Chiaia. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1786.4145623248164!2d14.24750889715043!3d40.83613601008589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b085255ec54b9%3A0x8ad9122a45803c14!2sPiazza%20del%20Plebiscito%2C%20Napoli!5e1!3m2!1sit!2sit!4v1713351751484!5m2!1sit!2sit"
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
