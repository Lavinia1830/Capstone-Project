import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Teatro_Romano(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='teatro_romano_aosta' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Teatro Romano</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>teatro romano di Aosta</strong> è un altro <b>simbolo della città</b>, realizzato per stupire chi arrivava dalle Gallie per recarsi a Roma. Infatti, era davvero imponente: poteva contenere <b>oltre 3000 spettatori</b>. Fu costruito all’epoca di Augusto, qualche 
                        tempo dopo la fondazione della città di <i>Augusta Praetoria</i>. Gli austeri e grandiosi resti, che occupano l’area di un intero isolato su una superficie di 81,20 x 64,10 metri, comprendono il muro di facciata, alto 22 metri e disposto su più ordini di finestre, e la 
                        parte inferiore della cavea e della scena. Le gradinate della cavea, rivolte a nord, arrivavano fino al terzo ordine di finestre del muro perimetrale. Il frontescena, probabilmente a due piani, presentava un tempo ornamenti corinzi. Al centro si apriva la “porta regia”, 
                        fiancheggiata dalle due laterali inquadrate da avancorpi con colonne e architravi. Un porticato collegava probabilmente il Teatro all’Anfiteatro del I secolo d.C., i cui resti sono visibili nel cortile del convento duecentesco di S. Caterina.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.9594380781155!2d7.321851204185428!3d45.73845720579907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478920b034c4e3f7%3A0x5b8765bf42f6b966!2sTeatro%20Romano!5e1!3m2!1sit!2sit!4v1713858884382!5m2!1sit!2sit"
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
