import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation} from 'react-i18next';
import Rome_Lazio from '../../assets/Lazio/Rome_Lazio.jpg';
import Colosseum_Rome_Lazio from '../../assets/Lazio/Rome_Lazio1.jpg';
import Lazio_Castles from '../../assets/Lazio/Lazio_Castles.jpg';
import St_Peter_s_Basilica from '../../assets/Lazio/St_Peter_s_Basilica_Rome_Lazio.jpg';
import Vatican_Museums from '../../assets/Lazio/Vatican_Museum_Rome_Lazio.jpg';
import Aqueducts_Park from '../../assets/Lazio/Aqueducts_Park_Rome_Lazio.jpg';
import Trevi_Fountain from '../../assets/Lazio/Trevi_Fountain_Rome_Lazio.jpg';
import Roman_forum from '../../assets/Lazio/Roman_forum_Rome_Lazio.jpg';
import Palatine from '../../assets/Lazio/Palatine_Rome_Lazio.jpg';
import Capitol_Square from '../../assets/Lazio/Capitol_Square_Rome_Lazio.jpg';
import Imperial_Forums_Street from '../../assets/Lazio/Imperial_Forums_Street_Rome_Lazio.jpg';
import Colosseum from '../../assets/Lazio/Colosseum_Rome_Lazio2.jpg';
import Pantheon from '../../assets/Lazio/Pantheon_Rome_Lazio.jpg';
import Tiber_Island from '../../assets/Lazio/Tiberin_Island_Rome_Lazio.jpg';
import Viterbo from '../../assets/Lazio/Viterbo_Lazio.jpg';
import Frosinone from '../../assets/Lazio/Frosinone_Lazio.jpg';
import Latin from '../../assets/Lazio/Latin_Lazio.jpg';
import Pontine_Islands from '../../assets/Lazio/Pontine_Islands_Lazio.jpg';
import Circeo_National_Park from '../../assets/Lazio/Circeo_National_Park_Sabaudia_Lazio.jpg';
import Garden_of_Ninfa from '../../assets/Lazio/Garden_of_Ninfa_Lazio.jpg';
import Rieti from '../../assets/Lazio/Rieti_Lazio.jpg';
import City_of_Bagnoregio from '../../assets/Lazio/City_of_Bagnoregio_Viterbo_Lazio.jpg';
import Ponza_Island from '../../assets/Lazio/Ponza_Island_Lazio.jpg';
import Lake_bracciano from '../../assets/Lazio/Lake_bracciano_Lazio.jpg';
import Pope_s_Rock from '../../assets/Lazio/Pope_s_Rock_Lazio.jpg';
import Cheese_Lazio from '../../assets/Lazio/Cheese_Lazio.jpg';
import Colosseum_Rome from '../../assets/Lazio/Colosseum_Rome_Lazio.jpg';
import Ariccia from '../../assets/Lazio/Ariccia_Lazio.jpg'
import { Image } from 'react-bootstrap';

    export default function Lazio(props) {

    const { i18n,t } = useTranslation();

    const scrollContainerRefData = useRef(null);
    const scrollContainerRefStops = useRef(null);
    const scrollContainerRefRome = useRef(null);
    const scrollContainerRefAriccia = useRef(null);

    const scrollLeft = () => {
        scrollContainerRefData.current.scrollBy({ left: -200, behavior: "smooth" });
        scrollContainerRefStops.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRefData.current.scrollBy({ left: 200, behavior: "smooth" });
        scrollContainerRefStops.current.scrollBy({ left: 200, behavior: "smooth" });

    };

    const locale = i18n.language;
    
    const st_peter_s_basilica = locale === 'en' ? '/views/lazio/rome/st_peters_s_basilica' : '/visite/lazio/roma/basilica_di_san_pietro';
    const vatican_museums = locale === 'en' ? '/views/lazio/rome/vatican_museums' : '/visite/lazio/roma/musei_vaticani';
    const aqueducts_park = locale === 'en' ? '/views/lazio/rome/aqueducts_park' : '/visite/lazio/roma/parco_degli_acquedotti';
    const trevi_fountain = locale === 'en' ? '/views/lazio/rome/trevi_fountain' : '/visite/lazio/roma/fontana_di_trevi';
    const roman_forum = locale === 'en' ? '/views/lazio/rome/roman_forum' : '/visite/lazio/roma/foro_romano';
    const palatine = locale === 'en' ? '/views/lazio/rome/palatine' : '/visite/lazio/roma/palatino';
    const capitol_square = locale === 'en' ? '/views/lazio/rome/capitol_square' : '/visite/lazio/roma/piazza_del_campidoglio';
    const imperial_forums_street = locale === 'en' ? '/views/lazio/rome/imperial_forums_street' : '/visite/lazio/roma/via_dei_fori_imperiali';
    const colosseum = locale === 'en' ? '/views/lazio/rome/colosseum' : '/visite/lazio/roma/colosseo';
    const pantheon = locale === 'en' ? '/views/lazio/rome/pantheon' : '/visite/lazio/roma/pantheon';
    const tiber_island = locale === 'en' ? '/views/lazio/rome/tiber_island' : '/visite/lazio/roma/isola_tiberina';
    const viterbo = locale === 'en' ? '/destinations/lazio/viterbo' : '/destinazioni/lazio/viterbo';
    const frosinone = locale === 'en' ? '/destinations/lazio/frosinone' : '/destinazioni/lazio/frosinone';
    const latin = locale === 'en' ? '/destinations/lazio/latina' : '/destinazioni/lazio/latina';
    const pontine_islands = locale === 'en' ? '/destinations/lazio/latina/pontine_islands' : '/destinazioni/lazio/latina/isole_ponziane';
    const circeo_national_park = locale === 'en' ? '/nature/lazio/sabaudia/circeo_narional_park' : '/natura/lazio/sabaudia/parco_nazionale_del_circeo';
    const garden_of_ninfa = locale === 'en' ? '/views/lazio/latina/garden_of_ninfa' : '/visite/lazio/latina/giardino_di_ninfa';
    const rieti = locale === 'en' ? '/destinations/lazio/rieti' : '/destinazioni/lazio/rieti';
    const city_of_bagnoregio = locale === 'en' ? '/destinations/lazio/viterbo/city_of_bagnoregio' : '/destinazioni/lazio/viterbo/civita_di_bagnoregio';
    const ponza_island = locale === 'en' ? '/islands/lazio/ponza_island' : '/isole/lazio/isola_di_ponza';
    const lake_bracciano = locale === 'en' ? '/lake/lazio/lake_brazziano' : '/laghi/lazio/lao_di_bracciano';
    const pope_s_rock = locale === 'en' ? '/destinations/lazio/pope_s_rock' : '/destinazioni/lazio/rocca_di_papa';
    const rome = locale === 'en' ? '/destinations/lazio/rome' : '/destinazioni/lazio/roma';
    const ariccia = locale === 'en' ? '/destinations/lazio/ariccia' : '/destinazioni/lazio/ariccia';
    
    const data = [
        { id: 1, title: t("st peter's basilica"), location: t("lazio rome"), href: st_peter_s_basilica, image: St_Peter_s_Basilica },
        { id: 2, title: t("vatican museums"), location: t("lazio rome"), href: vatican_museums, image: Vatican_Museums },
        { id: 3, title: t("aqueducts park"), location: t("lazio rome"), href: aqueducts_park, image: Aqueducts_Park },
        { id: 4, title: t("trevi fountain"), location: t("lazio rome"), href: trevi_fountain, image: Trevi_Fountain },
        { id: 5, title: t("roman forum"), location: t("lazio rome"), href: roman_forum, image: Roman_forum },
        { id: 6, title: t("palatine"), location: t("lazio rome"), href: palatine, image: Palatine },
        { id: 7, title: t("capitol square"), location: t("lazio rome"), href: capitol_square, image: Capitol_Square },
        { id: 8, title: t("imperial forums street"), location: t("lazio rome"), href: imperial_forums_street, image: Imperial_Forums_Street },
        { id: 9, title: t("colosseum"), location: t("lazio rome"), href: colosseum, image: Colosseum },
        { id: 10, title: t("pantheon"), location: t("lazio rome"), href: pantheon, image: Pantheon }, 
        { id: 11, title: t("tiber island"), location: t("lazio rome"), href: tiber_island, image: Tiber_Island },
        { id: 12, title: t("viterbo"), location: "Lazio, Viterbo", href: viterbo, image: Viterbo },
        { id: 13, title: t("frosinone"), location: "Lazio, Frosinone", href: frosinone, image: Frosinone },
        { id: 14, title: t("latin"), location: "Lazio, Latin", href: latin, image: Latin },
        { id: 15, title: t("pontine islands"), location: "Lazio", href: pontine_islands, image: Pontine_Islands },
        { id: 16, title: t("circeo national park"), location: "Lazio, Sabaudia", href: circeo_national_park, image: Circeo_National_Park },
        { id: 17, title: t("garden of ninfa"), location: "Lazio", href: garden_of_ninfa, image: Garden_of_Ninfa },
        { id: 18, title: t("rieti"), location: "Lazio, Rieti", href: rieti, image: Rieti },
    ]
    
    const stops = [
        { id: 1, title: t("city of bagnoregio"), location: "Lazio, Viterbo", href: city_of_bagnoregio, image: City_of_Bagnoregio },
        { id: 2, title: t("ponza island"), location: "Lazio", href: ponza_island, image: Ponza_Island },
        { id: 3, title: t("lake bracciano"), location: "Lazio", href: lake_bracciano, image: Lake_bracciano },
        { id: 4, title: t("pose's rock"), location: "Lazio, Pope's Rock", href: pope_s_rock, image: Pope_s_Rock },
    ]

    const rome_destination = [
        { id: 1, title: t("rome"), location: t("lazio rome"), href: rome, image: Colosseum_Rome },
    ]

    const ariccia_destination = [
        { id: 1, title: "Ariccia", location: "Lazio, Ariccia", href: ariccia, image: Ariccia },
    ]

    return (
        <>
            <Head title="Lazio"/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='text-center lazio'>
                        <h1>Lazio</h1>
                    </div>
                    <div className="body">
                        <p className='mt-2 text-center'>{t("lazio")}</p>
                        <div>
                            <h4 className='text-center'>{t("index")}</h4>
                            <ul className='text-center'>
                                <li>
                                    <Link href='#Origins_and_historical_notes_on_Lazio' className='color_link'>{t("index lazio")}</Link>
                                </li>
                                <li>
                                    <Link href='#The_main_cities_of_Lazio' className='color_link'>{t("index lazio1")}</Link>
                                </li>
                                <li>
                                    <Link href='#What_to_see_in_Lazio:_4_essential_stops' className='color_link'>{t("index lazio2")}</Link>
                                </li>
                                <li>
                                    <Link href='#Typical_products_of_Lazio:_6_delicacies_to_savor' className='color_link'>{t("index lazio3")}</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <Image src={Rome_Lazio} className='rounded-4'/>
                            </div>
                            <p className='mt-3'>
                                <Trans i18nKey="lazio1" components={{ b: <b/>, Link: <Link/> }}/>
                            </p>
                            <p>
                                <Trans i18nKey="lazio2" components={{ b: <b/> }}/>
                            </p>
                            <p>
                                {t("lazio3")}
                            </p> 
                        </div>
                        <div>
                            <h2 id='Origins_and_historical_notes_on_Lazio' className='color-subtitle'>{t("index rome")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Colosseum_Rome_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    {t("lazio4")}
                                </p>
                                <p>
                                    <Trans i18nKey="lazio5" components={{ b: <b/> }}/>
                                </p>
                                <p>
                                    {t("lazio6")}
                                </p>  
                            </div>
                            <div className="scroll-wrapper">
                                <div className="scroll-container" ref={scrollContainerRefRome}>
                                    {rome_destination.map((item) => (
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
                        <div>
                            <h2 id='The_main_cities_of_Lazio' className='color-subtitle'>{t("index rome1")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Lazio_Castles} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="lazio7" components={{ Link: <Link/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="lazio8" components={{ b: <b/>, Link: <Link/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="lazio9" components={{ b: <b/> }}/>
                                </p>  
                                <p>
                                    <Trans i18nKey="lazio10" components={{ b: <b/> }}/>
                                </p> 
                                <p>
                                    <Trans i18nKey="lazio11" components={{ b: <b/> }}/>
                                </p> 
                                <p>
                                    <Trans i18nKey="lazio12" components={{ b: <b/> }}/>
                                </p> 
                                <p>
                                    <Trans i18nKey="lazio13" components={{ b: <b/> }}/>
                                </p> 
                                <p>
                                    <Trans i18nKey="lazio14" components={{ b: <b/> }}/>
                                </p> 
                                <p>
                                    <Trans i18nKey="lazio15" components={{ b: <b/>, Link: <Link/> }}/>
                                </p> 
                                <p>
                                    <Trans i18nKey="lazio16" components={{ b: <b/> }}/>
                                </p> 
                            </div>
                        </div>
                        <div className="scroll-wrapper mx-auto">
                            <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle" onClick={scrollLeft}>❮</button>
                            <div className="scroll-container mx-auto" ref={scrollContainerRefData}>
                                {data.map((item) => (
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
                            <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle" onClick={scrollRight}>❯</button>
                        </div>
                        <div>
                            <h2 id='What_to_see_in_Lazio:_4_essential_stops' className='color-subtitle'>{t("index rome2")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={City_of_Bagnoregio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="lazio17" components={{ Link: <Link/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="lazio18" components={{ b: <b/>, Link: <Link/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="lazio19" components={{ b: <b/>, Link: <Link/> }}/>
                                </p>  
                                <p>
                                    <Trans i18nKey="lazio20" components={{ Link: <Link/> }}/>
                                </p> 
                            </div>
                        </div>
                        <div className="scroll-wrapper">
                            <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle" onClick={scrollLeft}>❮</button>
                            <div className="scroll-container" ref={scrollContainerRefStops}>
                                {stops.map((item) => (
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
                            <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle" onClick={scrollRight}>❯</button>
                        </div>
                        <div>
                            <h2 id='Typical_products_of_Lazio:_6_delicacies_to_savor' className='color-subtitle'>{t("index rome3")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Cheese_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="lazio21" components={{ b: <b/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="lazio22" components={{ b: <b/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="lazio23" components={{ b: <b/> }}/>
                                </p>
                            </div>
                            <div className="scroll-wrapper">
                                <div className="scroll-container" ref={scrollContainerRefAriccia}>
                                    {ariccia_destination.map((item) => (
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
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
