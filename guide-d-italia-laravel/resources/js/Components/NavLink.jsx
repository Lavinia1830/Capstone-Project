import { Link } from '@inertiajs/react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 text-decoration-none color_link'
                    : 'inline-flex items-center px-1 pt-1 text-decoration-none color_link'
            }
        >
            {children}
        </Link>
    );
}
