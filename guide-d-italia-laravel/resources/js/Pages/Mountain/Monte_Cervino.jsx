import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/inertia-react'; 

export default function Monte_Cervino(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='monte_cervino' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte Cervino</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        <strong>Il Monte Cervino</strong>, noto anche come Matterhorn in tedesco, è una delle montagne più iconiche delle Alpi. Situato al confine tra la Svizzera e l'Italia, il suo profilo distintivo a forma di piramide lo rende facilmente riconoscibile. La sua cima è alta 
                        circa 4.478 metri sul livello del mare.
                    </p>
                    <p>
                        Il <strong>Cervino</strong> è celebre per la sua bellezza ma anche per la sua sfida alpinistica. La prima ascensione di successo fu compiuta nel 1865 da una squadra guidata da Edward Whymper, ma fu oscurata dalla tragedia in cui quattro membri della squadra morirono 
                        durante la discesa. Questa scalata storica e il suo tragico epilogo sono raccontati nel libro "Scrambles Amongst the Alps" di Whymper.
                    </p>
                    <p>
                        Oggi, il <strong>Monte Cervino</strong> attira numerosi alpinisti e escursionisti da tutto il mondo che desiderano sfidare le sue ripide pareti rocciose e le sue difficili condizioni meteorologiche. È una delle montagne più fotografate al mondo e una meta ambita per 
                        gli amanti dell'alpinismo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.8857963698954!2d7.657341037646149!3d45.976941168935824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f3368cbb9ecd9%3A0x9826458cace55849!2sMonte%20Cervino!5e1!3m2!1sit!2sit!4v1713942944186!5m2!1sit!2sit"
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
