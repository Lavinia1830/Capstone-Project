import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Image } from 'react-bootstrap';
import PalazzoDucale_Cappella1 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_1.jpg';
import PalazzoDucale_Cappella2 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_2.jpg';
import PalazzoDucale_Cappella3 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_3.jpg';
import PalazzoDucale_Cappella4 from '../../../../../assets/Liguria/PalazzoDucale_Cappella_4.jpg';

export default function La_Cappella(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='la_cappella' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>La Cappella</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <h2 className='color-subtitle'>La Cappella del Doge</h2>
                <p>
                    All’interno dell’Appartamento del Doge si trova la splendida Cappella, affrescata da Giovanni Battista Carlone nel 1653. Sebbene sembri dedicata alla Vergine, rappresentata nella radiosa scultura di Francesco Schiaffino sull’altare, la Cappella celebra in realtà i fasti 
                    di Genova: in un <i>crescendo</i> di decorazioni – dal pavimento con i marmi policromi alla volta a <i>trompe l’oeil</i> – sulle pareti affrescate sono rappresentati gli eroi della storia di Genova, Guglielmo Embriaco e Cristoforo Colombo. Sulla volta la Vergine in trono, 
                    invocata dai Santi protettori della città Giovanni Battista, Giorgio, Bernardo e Lorenzo mostra il bambino Gesù con un cartiglio che recita «et rege eos» – <i>govèrnali</i> – in riferimento al decreto del 1637 con cui la Madonna venne eletta Regina di Genova e la Repubblica trasformata in Regno. 
                </p>
                <div className='row d-flex justify-content-evenly mx-0 mb-4'>
                    <Image src={PalazzoDucale_Cappella1} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Cappella2} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Cappella3} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                    <Image src={PalazzoDucale_Cappella4} className='col-4 px-0 w-sm-50 w-md-50 w-lg-50 m-2'/>
                </div>
            </div>
        </main>
        <Footer/>
    </AuthenticatedLayout>
  )
}
