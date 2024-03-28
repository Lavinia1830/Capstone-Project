import { useState } from 'react';

import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import {NavDropdown} from 'react-bootstrap';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-navbar border-b border-gray-100">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/home" className='text-decoration-none text-dark'>
                                    <strong className=''>Guide d'Italia</strong>
                                </Link>
                            </div>

                            <div className="flex items-center hidden space-x-8 md:-my-px md:ml-10 md:flex">
                                <Link href={route('home')} active={route().current('home')} className="text-decoration-none color_link">
                                    Home
                                </Link>
                                <NavDropdown title="Regioni" style={{ marginTop: '2px' }} id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/abruzzo">Abruzzo</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/basilicata">Basilicata</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/calabria">Calabria</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/campania">Campania</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/emilia_romagna">Emilia Romagna</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/friuli_venezia_giulia">Friuli Venezia Giulia</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/lazio">Lazio</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/liguria">Liguria</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/lombardia">Lombardia</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/marche">Marche</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/molise">Molise</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/piemonte">Piemonte</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/puglia">Puglia</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/sardegna">Sardegna</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/sicilia">Sicilia</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/toscana">Toscana</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/trentino_alto_adige">Trentino Alto Adige</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/umbria">Umbria</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' href="/valle_d_aosta">Valle d'Aosta</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-decoration-none color_link' to="/veneto">Veneto</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Link className='text-decoration-none color_link' to="#link">Mare</Link>
                                <Link className='text-decoration-none color_link' to="#link">Montagna</Link>
                                <Link className='text-decoration-none color_link' to="#link">Laghi</Link>
                            </div>
                        </div>

                        <div className="hidden md:flex md:items-center md:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center md:hidden">
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

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' md:hidden'}>
                    <div className="ps-4 pt-2 pb-3 space-y-1">
                        <Link href={route('home')} active={route().current('home')} className="text-decoration-none color_link">
                            Home
                        </Link>
                        <NavDropdown title="Regioni" style={{ marginTop: '2px' }} id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/abruzzo">Abruzzo</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/basilicata">Basilicata</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/calabria">Calabria</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/campania">Campania</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/emilia_romagna">Emilia Romagna</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/friuli_venezia_giulia">Friuli Venezia Giulia</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/lazio">Lazio</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/liguria">Liguria</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/lombardia">Lombardia</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/marche">Marche</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/molise">Molise</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/piemonte">Piemonte</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/puglia">Puglia</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/sardegna">Sardegna</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/sicilia">Sicilia</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/toscana">Toscana</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/trentino_alto_adige">Trentino Alto Adige</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/umbria">Umbria</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' href="/valle_d_aosta">Valle d'Aosta</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className='text-decoration-none color_link' to="/veneto">Veneto</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Link className='text-decoration-none color_link' to="#link">Mare</Link> <br/>
                        <Link className='text-decoration-none color_link' to="#link">Montagna</Link> <br/>
                        <Link className='text-decoration-none color_link' to="#link">Laghi</Link>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
