import AdminLayout from "@/components/layouts/AdminLayouts";
import Button from "@/components/ui/Button";
import styles from "./Users.module.scss";
import { useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import userServices from "@/services/user";
import ModalDeleteUser from "./ModalDeleteUser";
type PropsType = {
  users: any;
};
const UsersAdminView = (props: PropsType) => {
  const [updatedUser, setUpdateUser] = useState<any>({});
  const [usersData, setUsersData] = useState([]);
  const [deletedUser, setDeletedUser] = useState<any>({});
  const { users } = props;

  useEffect(() => {
    setUsersData(users);
  }, [users]);
  return (
    <>
      <AdminLayout>
        <div className={styles.users}>
          <h2>Users Management</h2>
          <table className={styles.users__table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.length > 0 &&
                usersData.map((user: any, index: number) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>
                      <div className={styles.users__action}>
                        <Button
                          type="button"
                          variant="primary"
                          onClick={() => setUpdateUser(user)}
                          className={styles.users__action__edit}
                        >
                          <i className="bx bx-edit" />
                        </Button>
                        <Button
                          type="button"
                          className={styles.users__action__hapus}
                          onClick={() => setDeletedUser(user)}
                        >
                          {" "}
                          <i className="bx bx-trash" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              {usersData.length === 0 && (
                <tr>
                  <td colSpan={6}>No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </AdminLayout>
      {Object.keys(updatedUser).length && (
        <ModalUpdateUser
          updatedUser={updatedUser}
          setUpdateUser={setUpdateUser}
          setUsersData={setUsersData}
        />
      )}
      {Object.keys(deletedUser).length && (
        <ModalDeleteUser
          deletedUser={deletedUser}
          setDeletedUser={setDeletedUser}
          setUsersData={setUsersData}
        />
      )}
    </>
  );
};
export default UsersAdminView;
