import CustomLink from "../Atoms/CustomLink/CustomLink";

import styles from "./BasePage.module.scss";

const BasePage = ({children}: {children: React.ReactNode}) => (
  <div>
    <CustomLink className={styles.basePageLink} pageToLink="/">
      Go Home
    </CustomLink>
    {children}
  </div>
);

export default BasePage;
