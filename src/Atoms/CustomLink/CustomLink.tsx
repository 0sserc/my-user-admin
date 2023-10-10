import {Link} from "react-router-dom";
import classnames from "classnames";

import styles from "./CustomLink.module.scss";

interface CustomLink {
  children: React.ReactNode;
  pageToLink: string;
  disabled?: boolean;
  className?: string;
}

const CustomLink = ({children, pageToLink, disabled, className}) => (
  <Link className={classnames(disabled && styles.disabledLink, className)} to={pageToLink}>
    {children}
  </Link>
);

export default CustomLink;

CustomLink.displayName = "CustomLink";
