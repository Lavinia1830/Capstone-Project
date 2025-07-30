import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation} from 'react-i18next';

export default function Imperial_Fora(props) {

  const { i18n,t } = useTranslation();

    return (
      <>
        <Head title={t("imperial fora")}/>
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
          <main>
              <div className='imperial_fora' style={{ position: 'relative' }}>
                <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("roman forum")}</h1>
                <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("to see")}</p>
              </div>
              <div className="body">
                <p className='mt-2 text-center'>{t("rome1")}</p>
                <div>
                  <h4 className='text-center'>{t("index")}</h4>
                  <ul className='text-center'>
                      <li>
                          <Link href='#Forum_of_Ceaser' className='color_link'>{t("index imperial fora")}</Link>
                      </li>
                      <li>
                          <Link href='#Forum_of_Augustus' className='color_link'>{t("index imperial fora1")}</Link>
                      </li>
                      <li>
                          <Link href='#The_Temple_of_Peace' className='color_link'>{t("index imperial fora2")}</Link>
                      </li>
                      <li>
                          <Link href='#Forum_of_Nerva' className='color_link'>{t("index imperial fora3")}</Link>
                      </li>
                      <li>
                          <Link href='#Trajan_s_Forum' className='color_link'>{t("index imperial fora4")}</Link>
                      </li>
                  </ul>
                </div>
                <div>
                    <p className='mt-3'>
                      <Trans i18nKey="rome2" components={{ b: <b/> }}/>
                    </p>
                </div>
              </div>
              <div className='margin mb-4'>
                <h3 className='color-subtitle text-center'>{t("map")}</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.274804286749!2d12.483790300439095!3d41.89188954300916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b383a9cdef%3A0xfa914007c0ec7de6!2sForo%20Romano!5e1!3m2!1sit!2sit!4v1750862570914!5m2!1sit!2sit"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className='mx-auto map'
                ></iframe>
              </div>
          </main>
          <Footer/>
        </AuthenticatedLayout>
    </>
    )
}
