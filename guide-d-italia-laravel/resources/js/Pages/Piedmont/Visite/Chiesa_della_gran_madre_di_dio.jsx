import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';

export default function Chiesa_della_gran_madre_di_dio(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
    >
        <main>
            <div className='chiesa_della_gm_di_dio' style={{ position: 'relative' }}>
                <h1 className='text-center' style={{ position: 'absolute', top: 20, left: 20 }}>Chiesa della Gran Madre di Dio</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>CATEGORIE</span>
                <p className='categorie' style={{ position: 'absolute', bottom: 10, left: 20 }}>Da vedere</p>
            </div>
            <div className="margin mt-3">
                <p>
                    La chiesa fu costruita tra il 1818 e il 1831 per commemorare il ritorno di Vittorio Emanuele I dall’esilio dopo il Congresso di Vienna. La scalinata esterna compare nel film del 1969 Un colpo all’italiana, e c’è chi sostiene che sotto la chiesa sia sepolto il Sacro Graal.
                </p>
            </div>
            <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>Mappa</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5609.690363018909!2d7.694750564480285!3d45.06251752128632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788729e5ee55467%3A0xb8a74c31bb4c5333!2sGran%20Madre%20di%20Dio%20-%20Diocesi%20di%20Torino!5e1!3m2!1sit!2sit!4v1712587273307!5m2!1sit!2sit"
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
