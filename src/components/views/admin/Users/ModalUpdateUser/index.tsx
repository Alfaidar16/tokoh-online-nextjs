import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import userServices from "@/services/user";

import { FormEvent, useState } from "react";

const ModalUpdateUser = (props: any) => {
  const { updatedUser, setUpdateUser, setUsersData } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdateDataUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    const result = await userServices.updateUser(updatedUser.id, data);

    if (result.status === 200) {
      setIsLoading(false);
      setUpdateUser({});
      const { data } = await userServices.getAllUsers();
      setUsersData(data.data);
      // push("/auth/login");
      alert("Update User Berhasil!");
    } else {
      setIsLoading(false);
      alert("Update User Gagal!");
      // setError("Email Sudah Terdaftar");
    }
  };

  return (
    <Modal onClose={() => setUpdateUser({})}>
      <h1>Update User</h1>
      <form onSubmit={handleUpdateDataUser}>
        <Input
          label="Email"
          type="email"
          name="email"
          defaultValue={updatedUser.fullname}
          disabled
        />
        <Input
          label="fullname"
          type="text"
          name="fullname"
          defaultValue={updatedUser.email}
          disabled
        />
        <Input
          label="Phone"
          type="number"
          name="phone"
          defaultValue={updatedUser.phone}
          disabled
        />
        <Select
          name="role"
          label="Hak Akses"
          defaultValue={updatedUser.role}
          options={[
            { label: "Member", value: "member" },
            { label: "Admin", value: "admin" },
          ]}
        />
        <Button type="submit" variant="primary">
          Update
        </Button>
      </form>
    </Modal>
  );
};
export default ModalUpdateUser;
