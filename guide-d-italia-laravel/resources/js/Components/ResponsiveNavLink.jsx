import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'text-decoration-none color_link '
                    : 'text-decoration-none color_link border-transparent'
            }`}
        >
            {children}
        </Link>
    );
}
