import { faEnvelope, faHome, faInfo, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

export interface Link {
    href: string;
    label: string;
    icon: ReactElement;
}

export const LINKS: Array<Link> = [
    { href: "/", label: "Home", icon: <FontAwesomeIcon icon={faHome} /> },
    { href: "/about", label: "About", icon: <FontAwesomeIcon icon={faInfo} /> },
    { href: "/services", label: "Services", icon: <FontAwesomeIcon icon={faList} /> },
    { href: "/contact", label: "Contact", icon: <FontAwesomeIcon icon={faEnvelope} /> },
]