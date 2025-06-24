import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation} from 'react-i18next';
import { Image } from 'react-bootstrap';
import Imperial_Fora_Rome from '../../../../assets/Lazio/City/Rome/Monuments/Imperial_Fora_Rome_Lazio1.jpg';
import Markets_Trajan_s from '../../../../assets/Lazio/City/Rome/Monuments/Trajan_s_Markets_Museum_of_the_Imperial_Forums_Rome_Lazio.jpg';
import Forum_of_Ceaser from '../../../../assets/Lazio/City/Rome/Monuments/Forum_of_Ceasar_Rome_Lazio.jpg'
import Forum_of_Augustus from '../../../../assets/Lazio/City/Rome/Monuments/Forum_of_Augustus_Rome_Lazio.jpg';
import The_Temple_of_Peace from '../../../../assets/Lazio/City/Rome/Monuments/The_Temple_of_Peace_Rome_Lazio.jpg';
import Forum_of_Nerva from '../../../../assets/Lazio/City/Rome/Monuments/Forum_of_Nerva_Rome_Lazio.jpg';
import Trajan_s_Forum from '../../../../assets/Lazio/City/Rome/Monuments/Trajan_s_Forum_Rome_Lazio.jpg';
export default function Imperial_Fora(props) {

    const { i18n,t } = useTranslation();

    const scrollContainerRefImperialFora = useRef(null);

    const locale = i18n.language;

    const markets_trajan_s = locale === 'en' ? '/views/lazio/rome/trajan_s_markets_museum_of_the_imperial_forums' : '/visite/lazio/roma/mercati_di_traiano_museo_dei_fori_imperiali';
    
    const imperial_fora = [
        { id: 1, title: t("trajan's markets museum of the imperial forums"), location: t("lazio rome"), href: markets_trajan_s, image: Markets_Trajan_s },
    ]

    return (
        <>
            <Head title={t("imprial fora")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='imperial_fora' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("imperial fora")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("to see")}</p>
                    </div>
                    <div className="body">
                        <p className='mt-2 text-center'>{t("imperial fora1")}</p>
                        <div className='text-center'>
                            <h4 className='text-center'>{t("index")}</h4>
                            <ul >
                                <li>
                                    <Link href='#Forum_of_Ceasar' className='color_link'>{t("index imperial fora")}</Link>
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
                                    <Link href="#Trajan's Forum" className='color_link'>{t("index imperial fora4")}</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <Image src={Imperial_Fora_Rome} className='rounded-4'/>
                            </div>
                            <p className='mt-3'>
                                <Trans i18nKey="imperial fora2" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div>
                            <h2 id='Forum_of_Caesar' className='color-subtitle'>{t("index imperial fora")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Forum_of_Ceaser} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="imperial fora3" components={{ b: <b/> }}/>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 id='Forum_of_Augustus' className='color-subtitle'>{t("index imperial fora1")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Forum_of_Augustus} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="imperial fora4" components={{ b: <b/> }}/>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 id='The_Temple_of_Peace' className='color-subtitle'>{t("index imperial fora2")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={The_Temple_of_Peace} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="imperial fora5" components={{ b: <b/> }}/>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 id='Forum_of_Nerva' className='color-subtitle'>{t("index imperial fora3")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Forum_of_Nerva} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="imperial fora6" components={{ b: <b/> }}/>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 id='Trajan_s_Forum' className='color-subtitle'>{t("index imperial fora4")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Trajan_s_Forum} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="imperial fora7" components={{ b: <b/> }}/>
                                </p>
                            </div>
                        </div>
                        <div className="scroll-wrapper">
                            <div className="scroll-container " ref={scrollContainerRefImperialFora}>
                                {imperial_fora.map((item) => (
                                    <div key={item.id} className="scroll-item">
                                        <Link href={item.href} className="d-flex w-100 text-decoration-none ">
                                            <Image src={item.image} alt={item.title} className='scroll-image'/>
                                            <div className="text-container ms-2">
                                                <h6 className="title color_link space_title">{item.title}</h6>
                                                <p className='mt-auto color-subtitle'>{item.location}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
