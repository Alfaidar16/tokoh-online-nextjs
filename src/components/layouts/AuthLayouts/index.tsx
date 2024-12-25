import Link from "next/link";
import Styles from "./AuthLayouts.module.scss";

type PropsType = {
  error?: string;
  title?: string;
  children: React.ReactNode;
  link: string;
  linkText?: string;
};

const AuthLayouts = (props: PropsType) => {
  const { error, title, children, link, linkText } = props;
  return (
    <div className={Styles.auth}>
      <h1 className={Styles.auth__title}>{title}</h1>
      {error && <p className={Styles.auth__error}>{error}</p>}
      <div className={Styles.auth__form}>{children}</div>
      <p className={Styles.auth__link}>
        <Link href={link}> {linkText} </Link>
      </p>
    </div>
  );
};
export default AuthLayouts;
