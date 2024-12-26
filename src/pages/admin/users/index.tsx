import UsersAdminView from "@/components/views/admin/Users";
import userServices from "@/services/user";
import { useEffect, useState } from "react";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getAllUsers();
      // console.log(data.data);
      setUsers(data.data);
    };
    getAllUsers();
  }, []);
  // console.log(users);
  return (
    <>
      <UsersAdminView users={users} />
    </>
  );
};
export default AdminUsersPage;
