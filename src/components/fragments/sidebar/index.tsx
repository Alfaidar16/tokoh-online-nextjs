import { useRouter } from "next/router";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
type PropsType = {
  lists: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
};
const Sidebar = (props: PropsType) => {
  const { lists } = props;
  const { pathname } = useRouter();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <h1 className={styles.sidebar__top__title}>Admin Panel</h1>
        <div className={styles.sidebar__top__lists}>
          {lists.map((list, index) => (
            <Link
              href={list.url}
              key={list.title}
              className={`${styles.sidebar__top__lists__item} ${
                pathname == list.url && styles.sidebar__top__lists__item__active
              }`}
            >
              <i
                className={`bx ${list.icon} ${styles.sidebar__top__lists__item_icon}`}
              />
              <h5 className={styles.sidebar__top__lists__item__title}>
                {list.title}
              </h5>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => signOut()}
          className={styles.sidebar__bottom__button}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
