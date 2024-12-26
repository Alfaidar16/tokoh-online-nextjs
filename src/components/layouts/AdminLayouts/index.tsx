import Sidebar from "@/components/fragments/sidebar";
import styles from "./AdminLayouts.module.scss";

type PropsType = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bx bxs-dashboard",
  },
  {
    title: "Products",
    url: "/admin/product",
    icon: "bx bxs-box",
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: "bx bxs-group",
  },
];
const AdminLayout = (props: PropsType) => {
  const { children } = props;
  return (
    <div className={styles.admin}>
      <Sidebar lists={listSidebarItem} />
      <div className={styles.admin__main}>{children}</div>
    </div>
  );
};

export default AdminLayout;
