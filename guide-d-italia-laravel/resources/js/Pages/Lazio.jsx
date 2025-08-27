import React from 'react';
import { useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Card, CardImg, CardText, CardTitle } from 'react-bootstrap';
import Gaeta from "../../assets/Lazio/Gaeta_Lazio.jpg";
import FavoriteButton from "@/Components/FavoriteButton";

export default function Lazio(props) {

    const { i18n, t } = useTranslation();
    const locale = i18n.language;

    

        /* const navbar = document.getElementById('navbarLazio'); // o l'id, tipo '#navbar'
        const navbarOffset = navbar.offsetTop;
    
        window.addEventListener('scroll', () => {
            if (window.scrollY >= navbarOffset) {
                navbar.classList.add('fixed');
            } else {
                navbar.classList.remove('fixed');
            }
        }); */

        useEffect(() => {
            const navbar = document.getElementById('navbarLazio');
            if (!navbar) return; // evita errori se l'elemento non esiste
    
            const navbarOffset = navbar.offsetTop;
    
            const handleScroll = () => {
                if (window.scrollY >= navbarOffset) {
                    navbar.classList.add('fixed');
                } else {
                    navbar.classList.remove('fixed');
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            // cleanup per evitare memory leaks
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []); // eseguito solo al primo montaggio

        const handleFavorite = () => {
            Inertia.post("/favorites", { tour_id: tourId });
        };

    return (
        <>
            <Head title="Lazio" />
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
            >
                <main>
                    <div className='text-center lazio'>
                        <h1 className='pb-4 px-5'>{t("lazio")}</h1>
                        <p className='px-5'>
                            {t("lazio1")}
                        </p>
                    </div>
                    <div className="body">
                        <div className='bg-light' id="navbarLazio">
                            <ul>
                                {/* <li>
                                    <Link href="#Region_map" className='color_link'>{t("region map")}</Link>
                                </li> */}
                                <li>
                                    <Link href="#Not_to_be_missed" className='color_link'>{t("not to be missed")} </Link>
                                </li>
                                <li>
                                    <Link href="#The_region" className='color_link'>{t("the region")}</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div id='Region_map' className='mt-5'>
                            <Link href="#">{t("discover the area")}</Link>
                        </div> */}
                        <div id="Not_to_be_missed" className='mt-5'>
                            <h4 className="color_subtitle text-center">{t("not to be missed")}</h4>
                            <h2 className="color_subtitle text-center">{t("the best of lazio")}</h2>
                            <div className='mt-4'>
                                <ul  className='d-flex justify-content-evenly'>
                                    <li>
                                        <Link href='' className='color_link'>{t("featured")}</Link>
                                    </li>
                                    <li>
                                        <Link href='' className='color_link'>{t("villages")}</Link>
                                    </li>
                                    <li>
                                        <Link href='' className='color_link'>{t("nature")}</Link>
                                    </li>
                                    <li>
                                        <Link href='' className='color_link'>{t("sport")}</Link>
                                    </li>
                                    <li>
                                        <Link href='' className='color_link'>{t("art and culture")}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='mx-5 my-4'>
                                <Card className='card position-relative rounded-5'>
                                    <CardImg src={Gaeta} className='card-img rounded-top-5'/>
                                    <Button className='position-absolute top-0 start-0 bg-success px-2 py-1 rounded ms-3 mt-3 text-white fw-bold border-0' style={{fontSize: "13px"}}>Tour e esperienze</Button>
                                    <FavoriteButton/>
                                    <CardTitle className='card-title mt-3'>Gite fuori porta partendo da Roma</CardTitle>
                                    <CardText className='ms-5 d-flex mb-0'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 80 80">
                                            <path d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M31.5,27h-8c-0.8,0-1.5-0.7-1.5-1.5v-12c0-0.8,0.7-1.5,1.5-1.5	s1.5,0.7,1.5,1.5V24h6.5c0.8,0,1.5,0.7,1.5,1.5S32.3,27,31.5,27z"></path>
                                        </svg>5 minuti
                                    </CardText>
                                </Card>
                            </div>
                        </div>

                    </div>
                </main>
                <Footer />
            </AuthenticatedLayout>
        </>

    )
}
