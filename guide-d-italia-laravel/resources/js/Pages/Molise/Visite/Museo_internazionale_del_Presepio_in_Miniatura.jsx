import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Museo_internazionale_del_Presepio_in_Miniatura(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_internazionale_del_presepio_in_miniatura' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo internazionale del Presepio in miniatura</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Museo internazionale del presepio in miniatura</strong> Guido Colitti è ospitato all'interno di Villa Colitti, nel centro della città di Campobasso. 
                    </p>
                    <p>
                        Fondato nel 1932 da Guido Colitti, il museo ospita circa 400 esempi di presepi in miniatura, provenienti da tutto il mondo. Alcuni sono intagliati in legno e provengono dalla foresta nera, altri sono in cartoncino pieghevole, in terracotta colorata, in madreperla e maiolica. Tra quelli realizzati dallo stesso Colitti, notevole 
                        un presepe in sughero con figure in terracotta ottocentesche. Interessante la collezione di pastori del ’700 e ’800 napoletano.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.7656874194681!2d14.655758452739468!3d41.5557313819407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a74ccecdaffdb%3A0xd7a0387a84b1d522!2sMuseo%20Internazionale%20del%20Presepio%20in%20Miniatura%20%22Guido%20Colitti%22!5e1!3m2!1sit!2sit!4v1713343113202!5m2!1sit!2sit"
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
