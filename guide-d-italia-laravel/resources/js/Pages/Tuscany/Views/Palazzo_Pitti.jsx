import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Palazzo_Pitti(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='palazzo_pitti' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Palazzo Pitti</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Era vanitoso, Luca Pitti. Così vanitoso che nel 1440 incaricò Brunelleschi di progettare quest’immensa dimora che avrebbe fatto invidia a tutti, compreso Cosimo I, suo arcinemico. Il palazzo più grande di Firenze (la facciata, ricoperta di un imponente bugnato, è lunga 200 
                        m e alta 30) fu iniziato nel 1557, ma presto i Pitti andarono in rovina e furono costretti a venderlo. Lo comprarono i Medici, che, dopo averlo dotato del Giardino di Boboli, vi si trasferirono. Oggi ospita una strepitosa raccolta d’arte e tre musei tematici: del Costume, 
                        degli Argenti e delle Porcellane.
                    </p>
                    <p>
                        La strabiliante collezione d’arte della Galleria Palatina, che vanta tele di Botticelli, Raffaello, Caravaggio, Giorgione e altri maestri della pittura europea dal XVI al XVIII secolo, vi lascerà senza fiato. La raccolta, divisa in 28 sale, fu accumulata dai Medici e dai 
                        Lorena e rispecchia il gusto collezionistico del tempo; i quadri (che coprono interamente le pareti delle stanze) sono organizzati sulla base di criteri non cronologici o stilistici, ma puramente decorativi, per similitudini tematiche o coloristiche. Orientarvi non sarà 
                        facile, ma così sarete obbligati a guardare con attenzione tutti i dipinti.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.749588550823!2d11.249069982821569!3d43.765119579375124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515441db99f1%3A0x5cd0cce4e6f1502a!2sPalazzo%20Pitti!5e1!3m2!1sit!2sit!4v1713192719147!5m2!1sit!2sit"
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
