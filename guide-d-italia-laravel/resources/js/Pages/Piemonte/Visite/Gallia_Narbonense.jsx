import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function Gallia_Narbonense(props) {
    return (
        <>
            <Head title="Gallia Narbonense"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='gallia_narbonense' style={{ position: 'relative' }}>
                        <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Gallia Narbonense</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                        <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
                    </div>
                    <div className="margin mt-3">
                        <p>
                            <strong>Gallia Narbonense</strong> è stata una provincia dell'<b>Impero Romano</b>, situata nel sud della <b>Francia</b> odierna. La sua storia 
                            inizia con la fondazione della colonia di <b>Narbo Martius</b> (l'odierna <b>Narbonne</b>) nel <b>118 a.C.</b> da parte dei <b>Romani</b>. 
                            Questa regione era conosciuta anche come <b>Provincia</b> o <b>Gallia Transalpina</b>.
                        </p>
                        <p>
                            <Link href='/destinazioni/lazio/roma' className='text-decoration-none color_link'>Roma</Link> si interessò a quest'area per motivi strategici e 
                            commerciali. La <strong>Gallia Narbonense</strong> serviva come cuscinetto contro le incursioni delle tribù <b>galliche</b> più a nord e come 
                            punto di collegamento tra l'<b>Italia</b> e le province <b>spagnole</b>. Inoltre, la regione era ricca di <b>risorse naturali</b> e aveva 
                            un'importante <b>rete commerciale</b>.
                        </p>
                        <p>
                            Durante il <b>I secolo a.C.</b>, la <strong>Gallia Narbonense</strong> divenne una delle province più <b>romanizzate</b> dell'Impero. La città 
                            di <b>Narbo Martius</b> fiorì come centro <b>amministrativo</b> e <b>commerciale</b>. La costruzione di strade, come la <b>Via Domitia</b>, 
                            facilitò i trasporti e favorì lo sviluppo economico.
                        </p>
                        <p>
                            Con la riorganizzazione dell'Impero da parte di <b>Augusto</b> nel <b>27 a.C.</b>, la <strong>Gallia Narbonense</strong> divenne una 
                            provincia <b>imperiale</b>, direttamente controllata dall'imperatore. La regione continuò a prosperare durante il <b>periodo imperiale</b>, 
                            contribuendo notevolmente alla <b>stabilità</b> e alla <b>ricchezza</b> dell'<b>Impero Romano</b>.
                        </p>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
    )
}
