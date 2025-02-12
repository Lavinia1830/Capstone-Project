import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Monte_Bondone(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='monte_bondone' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Monte Bondone</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Monte Bondone</strong> domina Trento e la Valle dell’Adige con la sua parete a strapiombo e il profilo inconfondibile del Palon. Da sempre la città e la sua Alpe vivono in simbiosi, donando l'una all’altra le proprie ricchezze.
                    </p>
                    <p>
                        Ciò che distingue il Monte Bondone dagli altri monti che circondano la città è la rapidità con la quale il Bondone permette ai propri visitatori di passare da un contesto urbano ad un contesto di alta montagna, accogliente e con numerose e confortevoli strutture ricettive. 
                        A pochi minuti da Trento, il Monte Bondone offre insomma in ogni stagione fantastiche opportunità per una vacanza a misura di famiglia.
                    </p>
                    <p>
                        Il <strong>Monte Bondone</strong> viene spesso chiamato la "montagna dei trentini", a riprova del forte legame che esiste tra Trento e la "sua" montagna, un luogo dalle mille facce e che racchiude una molteplicità di microcosmi che lo rendono unico e ricco di sorprese. Nel 
                        volgere di pochi mesi è possibile passare dalle passeggiate nei prati delle malghe e dai trekking più impegnativi, alle ampie piste da sci della skiarea, dalle fortificazioni austro-ungariche alla quiete di angoli naturali  di rara bellezza. 
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26248.866827372633!2d11.01027637711735!3d45.98808342544068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478272ce1b1c171d%3A0x3b2c7c22f8008f79!2sMonte%20Bondone!5e1!3m2!1sit!2sit!4v1712930482407!5m2!1sit!2sit"
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
