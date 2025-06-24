import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation} from 'react-i18next';
import { Image } from 'react-bootstrap';
import Colosseum_Lazio from '../../../../assets/Lazio/City/Rome/Colosseum_Rome_Lazio.jpg';
import Colosseum_Rome_Lazio from '../../../../assets/Lazio/City/Rome/Colosseum_Rome_Lazio1.jpg';
import St_Peter_s_Basilica from '../../../../assets/Lazio/City/Rome/St_Peter_s_Basilica_Rome_Lazio.jpg';
import Vatican_Museums from '../../../../assets/Lazio/City/Rome/Vatican_Museum_Rome_Lazio.jpg';
import Sistine_Chapel from '../../../../assets/Lazio/City/Rome/Sistine_Chapel_Rome_Lazio.jpg';
import Pantheon_Rome_Lazio from '../../../../assets/Lazio/City/Rome/Pantheon_Rome_Lazio.jpg';
import Colosseum from '../../../../assets/Lazio/Colosseum_Rome_Lazio2.jpg';
import Imperial_Forums_Street from '../../../../assets/Lazio/City/Rome/Imperial_Forums_Street_Rome_Lazio.jpg';
import Venice_Square from '../../../../assets/Lazio/City/Rome/Venice_Square_Rome_Lazio.jpg';
import Ara_Pacis_Museum from '../../../../assets/Lazio/City/Rome/Ara_Pacis_Museum_Rome_Lazio.jpg';
import Trevi_Fountain from '../../../../assets/Lazio/City/Rome/Trevi_Fountain_Rome_Lazio.jpg';
import Navona_Square from '../../../../assets/Lazio/City/Rome/Navona_Square_Rome_Lazio.jpg';
import Spanish_Steps from '../../../../assets/Lazio/City/Rome/Spanish_Steps_Rome_Lazio.jpg';
import Pantheon from '../../../../assets/Lazio/City/Rome/Pantheon_Rome_Lazio2.jpg';
import Villa_Borghese from '../../../../assets/Lazio/City/Rome/Villa_Borghese_Rome_Lazio.jpg';
import Eur from '../../../../assets/Lazio/City/Rome/Eur_Rome_Lazio.jpg';
import Tevere_Rome_Lazio from '../../../../assets/Lazio/City/Rome/Tevere_Rome_Lazio.jpg';
import Ancient_Appian_Way from '../../../../assets/Lazio/City/Rome/Ancient_Appian_Way_Rome_Lazio.jpg';
import Ostia_Beach from '../../../../assets/Lazio/City/Rome/Ostia_Beach_Lazio.jpg';
import Field_of_Flowers from '../../../../assets/Lazio/City/Rome/Field_of_Flowers_Rome_Lazio.jpg';
import The_Street_of_the_Course from '../../../../assets/Lazio/City/Rome/The_Street_of_the_Course_Rome_Lazio.jpg';
import Pasta_Rome_Lazio from '../../../../assets/Lazio/City/Rome/Pasta_Rome_Lazio.jpg';
import Unusual_Places_Rome_Lazio from '../../../../assets/Lazio/City/Rome/Unusual_Places_Rome_Lazio.jpg';
import Basilica_of_St_Peter_in_Chains from '../../../../assets/Lazio/City/Rome/Basilica_of_St_Peter_in_Chains_Rome_Lazio.jpg';
import Orange_Garden from '../../../../assets/Lazio/City/Rome/Orange_Garden_Rome_Lazio.jpg';
import Non_Catholic_Cemetery from '../../../../assets/Lazio/City/Rome/Non_Catholic_Cemetery_Rome_Lazio.jpg';

export default function Rome(props) {

    const { i18n,t } = useTranslation();

    const scrollContainerRefHistory = useRef(null);
    const scrollContainerRefIconic = useRef(null);
    const scrollContainerRefCulture = useRef(null);
    const scrollContainerRefGems = useRef(null);

    const scrollLeft = () => {
        scrollContainerRefHistory.current.scrollBy({ left: -200, behavior: "smooth" });
        scrollContainerRefIconic.current.scrollBy({ left: -200, behavior: "smooth" });
        scrollContainerRefCulture.current.scrollBy({ left: -200, behavior: "smooth" });
        scrollContainerRefGems.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRefHistory.current.scrollBy({ left: 200, behavior: "smooth" });
        scrollContainerRefIconic.current.scrollBy({ left: 200, behavior: "smooth" });
        scrollContainerRefCulture.current.scrollBy({ left: 200, behavior: "smooth" });
        scrollContainerRefGems.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const locale = i18n.language;
    
    const st_peter_s_basilica = locale === 'en' ? '/views/lazio/rome/st_peters_s_basilica' : '/visite/lazio/roma/basilica_di_san_pietro';
    const vatican_museums = locale === 'en' ? '/views/lazio/rome/vatican_museums' : '/visite/lazio/roma/musei_vaticani';
    const sistine_chapel = locale === 'en' ? '/views/lazio/rome/sistine_chapel' : '/visite/lazio/roma/cappella_sistina';
    const colosseum = locale === 'en' ? '/views/lazio/rome/colosseum' : '/visite/lazio/roma/colosseo';
    const imperial_forums_street = locale == 'en' ? '/views/lazio/rome/imperial_forums_street' : '/visite/lazio/roma/via_dei_fori_imperiali';
    const venice_square = locale == 'en' ? '/views/lazio/rome/venice_square' : '/visite/lazio/roma/piazza_venezia';
    const ara_pacis_museum = locale == 'en' ? '/views/lazio/rome/ara_pacis_museum' : '/visite/lazio/roma/museo_dell_ara_pacis';
    const trevi_fountain = locale == 'en' ? '/views/lazio/rome/trevi_fountain' : '/visite/lazio/roma/fontana_di_trevi';
    const navona_square = locale == 'en' ? '/views/lazio/rome/navona_square' : '/visite/lazio/roma/piazza_navona';
    const spanish_steps = locale == 'en' ? '/views/lazio/rome/spanish_steps' : '/visite/lazio/roma/piazza_di_spagna';
    const pantheon = locale == 'en' ? '/views/lazio/rome/pantheon' : '/visite/lazio/roma/pantheon';
    const villa_borghese = locale == 'en' ? '/views/lazio/rome/villa_borghese' : '/visite/lazio/roma/villa_borghese';
    const eur = locale == 'en' ? '/views/lazio/rome/eur' : '/visite/lazio/roma/eur';
    const ancient_appian_way = locale == 'en' ? '/views/lazio/rome/ancient_appian_way' : '/visite/lazio/roma/via_appia_antica';
    const ostia_beach = locale == 'en' ? '/views/lazio/rome/ostia_beach' : '/visite/lazio/roma/lido_di_ostia';
    const field_of_flowers = locale == 'en' ? '/views/lazio/rome/field_of_flowers' : '/visite/lazio/roma/campo_de_fiori';
    const the_street_of_the_course = locale == 'en' ? '/views/lazio/rome/the_street_of_the_course' : '/visite/lazio/roma/via_del_corso';
    const basilica_of_st_peter_in_chains = locale == 'en' ? '/views/lazio/rome/basilica_of_st_peter_in_chains' : '/visite/lazio/roma/basilica_di_san_pietro_in_vincoli';
    const orange_garden = locale == 'en' ? '/views/lazio/rome/orange_garden' : '/visite/lazio/roma/giardino_degli_aranci';
    const non_catholic_cemetery = locale == 'en' ? '/views/lazio/rome/non_catholic_cemetery' : '/visite/lazio/roma/cimitero_acattolico';





    const history = [
        { id: 1, title: t("st peter's basilica"), location: t("lazio rome"), href: st_peter_s_basilica, image: St_Peter_s_Basilica },
        { id: 2, title: t("vatican museums"), location: t("lazio rome"), href: vatican_museums, image: Vatican_Museums },
        { id: 3, title: t("sistine chapel"), location: t("lazio rome"), href: sistine_chapel, image: Sistine_Chapel },
        
    ]

    const iconic = [
        { id: 1, title: t("colosseum"), location: t("lazio rome"), href: colosseum, image: Colosseum },
        { id: 2, title: t("imperial forums street"), location: t("lazio rome"), href: imperial_forums_street, image: Imperial_Forums_Street },
        { id: 3, title: t("venice square"), location: t("lazio rome"), href: venice_square, image: Venice_Square },
        { id: 4, title: t("ara pacis museum"), location: t("lazio rome"), href: ara_pacis_museum, image: Ara_Pacis_Museum },
        { id: 5, title: t("trevi fountain"), location: t("lazio rome"), href: trevi_fountain, image: Trevi_Fountain },
        { id: 6, title: t("navona square"), location: t("lazio rome"), href: navona_square, image: Navona_Square },
        { id: 7, title: t("spanish steps"), location: t("lazio rome"), href: spanish_steps, image: Spanish_Steps },
        { id: 8, title: t("pantheon"), location: t("lazio rome"), href: pantheon, image: Pantheon },
        { id: 9, title: t("villa borghese"), location: t("lazio rome"), href: villa_borghese, image: Villa_Borghese },
        { id: 10, title: t("eur"), location: t("lazio rome"), href: eur, image: Eur },
    ]

    const culture = [
        { id: 1, title: t("ancient appian way"), location: t("lazio rome"), href: ancient_appian_way, image: Ancient_Appian_Way },
        { id: 2, title: t("ostia beach"), location: t("lazio ostia lido"), href: ostia_beach, image: Ostia_Beach },
        { id: 3, title: t("field of flowers"), location: t("lazio rome"), href: field_of_flowers, image: Field_of_Flowers },
        { id: 4, title: t("the street of the course"), location: t("lazio rome"), href: the_street_of_the_course, image: The_Street_of_the_Course }
    ]

    const gems = [
        { id: 1, title: t("basilica of st. peter in chains"), location: t("lazio rome"), href: basilica_of_st_peter_in_chains, image: Basilica_of_St_Peter_in_Chains },
        { id: 2, title: t("orange garden"), location: t("lazio rome"), href: orange_garden, image: Orange_Garden },
        { id: 3, title: t("non catholic cemetery"), location: t("lazio rome"), href: non_catholic_cemetery, image: Non_Catholic_Cemetery }
    ]

    return (
        <>
            <Head title={t("Rome")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='rome' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("rome")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("city")}</p>
                    </div>
                    <div className="body">
                        <p className='mt-2 text-center'>{t("lazio")}</p>
                        <div>
                            <h4 className='text-center'>{t("index")}</h4>
                            <ul className='text-center'>
                                <li>
                                    <Link href='#History_and_curiosities_about_Rome' className='color_link'>{t("index rome")}</Link>
                                </li>
                                <li>
                                    <Link href='#What_to_See_in_Rome_11_Iconic_Places_You_Can_t_Miss' className='color_link'>{t("index rome1")}</Link>
                                </li>
                                <li>
                                    <Link href='#What_to_do_in_Rome_7_proposals_between_culture_sports_and_shopping' className='color_link'>{t("index rome2")}</Link>
                                </li>
                                <li>
                                    <Link href='#What_to_Eat_In_Rome_6_Dishes_That_Taste_of_Tradition' className='color_link'>{t("index rome3")}</Link>
                                </li>
                                <li>
                                    <Link href='#Unusual_Places_in_Rome_6_Semi_Hidden_Gems' className='color_link'>{t("index rome4")}</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <Image src={Colosseum_Lazio} className='rounded-4'/>
                            </div>
                            <p className='mt-3'>
                                <Trans i18nKey="rome2" components={{ b: <b/> }}/>
                            </p>
                        </div>
                        <div>
                            <h2 id='History_and_curiosities_about_Rome' className='color-subtitle'>{t("index rome")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Colosseum_Rome_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="rome3" components={{ b: <b/>, Link: <Link/> }}/>
                                </p>
                            </div>
                            <div className="scroll-wrapper">
                                <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle" onClick={scrollLeft}>❮</button>
                                <div className="scroll-container" ref={scrollContainerRefHistory}>
                                    {history.map((item) => (
                                        <div key={item.id} className="scroll-item">
                                            <Link href={item.href} className="d-flex w-100 text-decoration-none ">
                                                <Image src={item.image} alt={item.title} className='scroll-image'/>
                                                <div className="text-container ms-2">
                                                    <h6 className="title color_link">{item.title}</h6>
                                                    <p className='mt-auto color-subtitle'>{item.location}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle" onClick={scrollRight}>❯</button>
                            </div>
                        </div>
                        <div>
                            <h2 id='What_to_See_in_Rome_11_Iconic_Places_You_Can_t_Miss' className='color-subtitle'>{t("index rome1")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Pantheon_Rome_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="rome4" components={{ b: <b/> }}/>
                                </p>
                                <div>
                                    <ul className='list'>
                                        <li><Trans i18nKey="rome5" components={{ b: <b/>, Link: <Link/> }}/></li>
                                        <li className='mt-3'>
                                            <Trans i18nKey="rome6" components={{ b: <b/> }}/>
                                        </li>
                                        <li className='mt-3'>
                                            <Trans i18nKey="rome7" components={{ b: <b/> }}/>
                                        </li>
                                        <li className='mt-3'>
                                            <Trans i18nKey="rome8" components={{ b: <b/> }}/>
                                        </li>
                                        <li className='mt-3'>
                                            <Trans i18nKey="rome9" components={{ b: <b/> }}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="scroll-wrapper">
                                <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle" onClick={scrollLeft}>❮</button>
                                <div className="scroll-container" ref={scrollContainerRefIconic}>
                                    {iconic.map((item) => (
                                        <div key={item.id} className="scroll-item">
                                            <Link href={item.href} className="d-flex w-100 text-decoration-none ">
                                                <Image src={item.image} alt={item.title} className='scroll-image'/>
                                                <div className="text-container ms-2">
                                                    <h6 className="title color_link">{item.title}</h6>
                                                    <p className='mt-auto color-subtitle'>{item.location}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle" onClick={scrollRight}>❯</button>
                            </div>
                        </div>
                        <div>
                            <h2 id='What_to_do_in_Rome_7_proposals_between_culture_sports_and_shopping' className='color-subtitle'>{t("index rome2")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Tevere_Rome_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="rome10" components={{ b: <b/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="rome11" components={{ b: <b/> }}/>
                                </p>
                                <p>
                                    <Trans i18nKey="rome12" components={{ b: <b/> }}/>
                                </p>
                            </div>
                            <div className="scroll-wrapper">
                                <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle" onClick={scrollLeft}>❮</button>
                                <div className="scroll-container" ref={scrollContainerRefCulture}>
                                    {culture.map((item) => (
                                        <div key={item.id} className="scroll-item">
                                            <Link href={item.href} className="d-flex w-100 text-decoration-none ">
                                                <Image src={item.image} alt={item.title} className='scroll-image'/>
                                                <div className="text-container ms-2">
                                                    <h6 className="title color_link">{item.title}</h6>
                                                    <p className='mt-auto color-subtitle'>{item.location}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle" onClick={scrollRight}>❯</button>
                            </div>
                        </div>
                        <div>
                            <h2 id='What_to_Eat_In_Rome_6_Dishes_That_Taste_of_Tradition' className='color-subtitle'>{t("index rome3")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Pasta_Rome_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="rome13" components={{ Link: <Link/>, b: <b/> }}/>
                                </p>
                                <ul className='list'>
                                    <li>
                                        <Trans i18nKey="rome14" components={{ b: <b/> }}/>
                                    </li>
                                    <li className='mt-3'>
                                        <Trans i18nKey="rome15" components={{ b: <b/> }}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 id='Unusual_Places_in_Rome_6_Semi_Hidden_Gems' className='color-subtitle'>{t("index rome4")}</h2>
                            <div className='d-flex justify-content-center'>
                                <Image src={Unusual_Places_Rome_Lazio} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="rome16" components={{ Link: <Link/>, b: <b/> }}/>
                                </p>
                                <ul className='list'>
                                    <li>
                                        <Trans i18nKey="rome17" components={{ b: <b/> }}/>
                                    </li>
                                    <li className='mt-3'>
                                        <Trans i18nKey="rome18" components={{ b: <b/> }}/>
                                    </li>
                                </ul>
                                <p>
                                    <Trans i18nKey="rome19" components={{ b: <b/> }}/>
                                </p>
                            </div>
                            <div className="scroll-wrapper">
                                <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle" onClick={scrollLeft}>❮</button>
                                <div className="scroll-container" ref={scrollContainerRefGems}>
                                    {gems.map((item) => (
                                        <div key={item.id} className="scroll-item">
                                            <Link href={item.href} className="d-flex w-100 text-decoration-none ">
                                                <Image src={item.image} alt={item.title} className='scroll-image'/>
                                                <div className="text-container ms-2">
                                                    <h6 className="title color_link">{item.title}</h6>
                                                    <p className='mt-auto color-subtitle'>{item.location}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle" onClick={scrollRight}>❯</button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
