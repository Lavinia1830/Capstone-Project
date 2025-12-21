import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { NavDropdown, Dropdown } from 'react-bootstrap';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function AuthenticatedLayout({ auth, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const { i18n, t } = useTranslation();

    const locale = i18n.language;
    const login = locale === 'en' ? '/login' : '/accedi';
    const register = locale === 'en' ? '/register' : '/registrati';

    return (
        <div>
            <nav className="bg-navbar border-b border-gray-100">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/" className='text-dark'>
                                    <ApplicationLogo/>
                                </Link>
                            </div>
                            <div className="flex items-center hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">
                                <NavDropdown title={t("regions")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/abruzzo">Abruzzo</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/basilicata">Basilicata</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/calabria">Calabria</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/campania">Campania</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/emilia_romagna">Emilia Romagna</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/friuli_venezia_giulia">Friuli Venezia Giulia</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/lazio">Lazio</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/liguria">Liguria</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/lombardy">{t("lombardy")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/marche">Marche</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/molise">Molise</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/piedmont">{t("piedmont")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/apulia">{t("apulia")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/sardinia">{t("sardinia")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/sicily">{t("sicily")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/toscany">{t("toscany")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/trentino_south_tyrol">{t("trentino south tyrol")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/umbria">Umbria</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/aosta_valley">{t("aosta valley")}</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/veneto">Veneto</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("rivers")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/rivers/adige_river">{t("adige river")}</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("lakes")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/lakes/lake_garda">{t("lake garda")}</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("sea")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/sea/adriatic_sea">{t("adriatic sea")}</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("mountain")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/mountain/monte_bondone">Monte Bondone</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("events")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/events">Eventi</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={t("favorite")} className='text-dark' style={{ marginTop: '3px'}} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <NavLink className='color_link' href="/favorite">Priferiti</NavLink>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:ml-6">
                            <div className="flex items-center space-x-4 ml-auto">
                                {/* Authentication Links */}
                                {!auth?.user && (
                                    <>
                                        <ResponsiveNavLink href={login} className="color_link">
                                            {t('login')}
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href={register} className="color_link">
                                            {t('register')}
                                        </ResponsiveNavLink>
                                    </>
                                )}

                                {/* User Dropdown */}
                                {auth?.user && (
                                    <Dropdown>
                                        <Dropdown.Toggle className="flex items-center px-3 py-2 bg-black rounded-md shadow">
                                            <span className="text-white truncate w-[70px]">{auth.user.name}</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <ResponsiveNavLink href={route('profile.edit')} className="color_link">
                                                {t('profile')}
                                            </ResponsiveNavLink>
                                            <ResponsiveNavLink href={route('logout')} method="post" as="button" className='color_link'>
                                                {t('log out')}
                                            </ResponsiveNavLink>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )}
                            </div>
                            <LanguageSwitcher />
                        </div>

                        <div className="-mr-2 flex items-center lg:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' lg:hidden'}>
                    <div className="ps-4 pt-2 pb-3 space-y-1">
                        <h6 className='ms-1 fw-bold text-dark'>{t("regions")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/abruzzo">Abruzzo</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/basilicata">Basilicata</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/calabria">Calabria</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/campania">Campania</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/emilia_romagna">Emilia Romagna</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/friuli_venezia_giulia">Friuli Venezia Giulia</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/lazio">Lazio</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/liguria">Liguria</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/lombardy">{t("lombardy")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/marche">Marche</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/molise">Molise</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/piedmont">{t("piedmont")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/apulia">{t("apulia")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/sardinia">{t("sardinia")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/sicily">{t("sicily")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/toscany">{t("toscany")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/trentino_south_tyrol">{t("trentino south tyrol")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/umbria">Umbria</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/aosta_valley">{t("aosta valley")}</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/veneto">Veneto</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold text-dark'>{t("rivers")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/rivers/adige_river">{t("adige river")}</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold text-dark'>{t("lakes")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/lakes/lake_garda">{t("lake garda")}</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold text-dark'>{t("seas")}</h6>
                        <div className="ms-3">
                        <NavDropdown.Item>
                                <NavLink className='color_link' href="/seas/adriatic_sea">{t("adriatic sea")}</NavLink>
                            </NavDropdown.Item>
                        </div>
                        
                        <h6 className='ms-1 fw-bold text-dark'>{t("mountains")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/mountain/monte_bondone">Monte Bondone</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold text-dark'>{t("events")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/events">Eventi</NavLink>
                            </NavDropdown.Item>
                        </div>
                        <h6 className='ms-1 fw-bold text-dark'>{t("favorite")}</h6>
                        <div className="ms-3">
                            <NavDropdown.Item>
                                <NavLink className='color_link' href="/favorite">Priferiti</NavLink>
                            </NavDropdown.Item>
                        </div>
                    </div>

                    <div className="pt-4 pb-1 border-t">
                        {auth?.user ? (
                            <div>
                                <div className="px-4">
                                    <div className="font-medium fw-bold text-white">
                                        {auth.user.name}
                                    </div>
                                    <div className="font-medium text-white">{auth.user.email}</div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink href={route('profile.edit')} className='color_link'>{t('profile')}</ResponsiveNavLink>
                                    <ResponsiveNavLink method="post" href={route('logout')} as="button" className='color_link'>
                                        {t("log out")}
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <ResponsiveNavLink href={login} className="color_link">{t('login')}</ResponsiveNavLink>
                                <ResponsiveNavLink href={register} className="color_link">{t('register')}</ResponsiveNavLink>
                            </div>
                        )}
                    </div>
                    <LanguageSwitcher />
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}