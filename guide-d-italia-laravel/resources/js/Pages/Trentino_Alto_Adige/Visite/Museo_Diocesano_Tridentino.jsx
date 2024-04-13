import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

export default function Museo_Diocesano_Tridentino(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <main>
                <div className='museo_diocesano_tridentino' style={{ position: 'relative' }}>
                    <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Museo Diocesano Tridentino</h1>
                    <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                    <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                </div>
                <div className="margin mt-3">
                    <p>
                        Il <strong>Museo Diocesano Tridentino</strong> di <Link href='/destinazioni/trento' className='text-decoration-none color_link'>Trento</Link>, fondato nel 1903, si trova all’interno di Palazzo Pretorio, prima residenza vescovile situata nella centrale Piazza Duomo, da sempre cuore pulsante della vita civile e religiosa della 
                        città. La piazza è delimitata dalla splendida cattedrale di San Vigilio, dove, sotto la sua superficie, sono stati rinvenuti i resti dell’antica basilica paleocristiana (oggi visitabile).
                    </p>
                    <p>
                        Nelle sale del museo è possibile ammirare un ricco patrimonio artistico e culturale risalente al periodo tra l’XI e il XIX secolo: dipinti, sculture lignee, altari a portelle, ricchi paramenti, codici miniati, testimonianze iconografiche del Concilio di Trento, preziose oreficerie, antichi ricami e sontuosi arazzi fiamminghi. 
                        Il museo custodisce inoltre il tesoro della Cattedrale con la grande urna processionale di S. Vigilio.
                    </p>
                    <p>
                        Fanno parte del museo anche la Basilica paleocristiana di San Vigilio, Porta Veronensis - l’antico ingresso monumentale alla Tridentum romana risalente al I secolo d.C. - e la Torre Civica (o Torre di Piazza) che, con un’altezza di 45 metri, si erge a simbolo della città. Al museo compete anche la custodia della sede di Villa 
                        Lagarina all’interno di Palazzo Libera.
                    </p>
                </div>
                <div className="margin mt-3">
                    <h2 className='color-subtitle'>Tridentum la città sotterranea</h2>
                    <p>
                        Nel sottosuolo del centro storico di Trento vive l'antica Tridentum,  inglobata nella Trento medievale e moderna. Oggi, in seguito a ricerche e scavi archeologici, è stato possibile riportare alla luce e rendere visitabili alcune aree dell'antico centro abitato. 
                    </p>
                    <p>
                        È nato così il progetto " Tridentum . La città sotterranea”, una rete di siti che offre ai visitatori un avvincente percorso alla scoperta dell'antica realtà urbana e della vita quotidiana della Trento romana. Sono attualmente visitabili il S.A.S.S. (Spazio Archeologico Sotterraneo del Sas), 
                        l'area archeologica di Palazzo Lodron, la Porta Veronensis e la Basilica Paleocristiana del Duomo.
                    </p>
                </div>
                <div className='margin mb-4'>
                    <h3 className='color-subtitle text-center'>Mappa</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1948.143517045165!2d11.120713040919824!3d46.06790256355501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4782714b1a918985%3A0x67be9b5cf555f6c!2sMuseo%20Diocesano%20Tridentino!5e1!3m2!1sit!2sit!4v1712918669388!5m2!1sit!2sit"
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
