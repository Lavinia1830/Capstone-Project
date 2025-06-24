import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation} from 'react-i18next';
import { Image } from 'react-bootstrap';
import Ninfa from '../../../../assets/Lazio/Nature/Garden_of_Ninfa_Lazio1.jpg';
import Sermoneta from '../../../../assets/Lazio/City/Sermoneta/Sermoneta_Lazio.jpg';
import Caetani_Castle_of_Sermoneta from '../../../../assets/Lazio/City/Sermoneta/Caetani_Castle_of_Sermoneta_Lazio.jpg';


export default function Garden_of_Ninfa(props) {

    const { i18n,t } = useTranslation();

    const scrollLeft = () => {
        scrollContainerRefGarden_of_Ninfa.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRefGarden_of_Ninfa.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const scrollContainerRefGarden_of_Ninfa = useRef(null);

    const locale = i18n.language;

    const caetani_castle_of_sermoneta = locale === 'en' ? '/views/lazio/sermoneta/caetani_castle_of_sermoneta' : '/visite/lazio/semoneta/castello_caetani_di_sermoneta';
    const sermoneta = locale === 'en' ? '/destinations/lazio/sermoneta' : '/destinazione/lazio/sermoneta';
    
    const ninfa = [
        { id: 1, title: t("sermoneta"), location: t("lazio sermoneta"), href: sermoneta , image: Sermoneta },
        { id: 2, title: t("caetani castle of sermoneta"), location: t("lazio sermoneta"), href: caetani_castle_of_sermoneta, image: Caetani_Castle_of_Sermoneta }
    ]

    return (
        <>
            <Head title={t("garden of ninfa")}/>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='garden_of_ninfa' style={{ position: 'relative' }}>
                        <h1 style={{ position: 'absolute', top: 20, left: 20 }}>{t("garden of ninfa")}</h1>
                        <span className='text-light' style={{ position: 'absolute', bottom: 50, left: 20 }}>{t("categories")}</span>
                        <p className='categories' style={{ position: 'absolute', bottom: 10, left: 20 }}>{t("to see")}</p>
                    </div>
                    <div className="body">
                        <div>
                            <p className='mt-2 text-center'>{t("imperial fora1")}</p>
                        </div>
                        <div>
                            <Trans i18nKey="garden of ninfa2" components={{ strong: <strong/>, b: <b/> }}/>
                        </div>
                        <div className='mt-3'>
                            <div className='d-flex justify-content-center'>
                                <Image src={Ninfa} className='rounded-4'/>
                            </div> 
                            <div className='mt-3'>
                                <p>
                                    <Trans i18nKey="garden of ninfa3" components={{ b: <b/> }}/>
                                </p>
                            </div>
                        </div>
                        <div className="scroll-wrapper">
                            <button className="scroll-button left mr-3 px-3 py-2 border border-black rounded-circle arrows" onClick={scrollLeft}>❮</button>
                            <div className="scroll-container" ref={scrollContainerRefGarden_of_Ninfa}>
                                {ninfa.map((item) => (
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
                            <button className="scroll-button right ml-3 px-3 py-2 border border-black rounded-circle arrows" onClick={scrollRight}>❯</button>
                        </div>
                    </div>
                </main>
                <Footer/>
            </AuthenticatedLayout>
        </>
        
    )
}
