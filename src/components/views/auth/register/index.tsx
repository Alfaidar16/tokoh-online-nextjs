import Link from "next/link";
import Styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import authServices from "@/services/auth";
import AuthLayouts from "@/components/layouts/AuthLayouts";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
      role: "member",
    };

    const result = await authServices.registerAccount(data);

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
      alert("Registration successful!");
    } else {
      setIsLoading(false);
      setError("Email Sudah Terdaftar");
    }
  };
  return (
    <AuthLayouts
      title="Registrasi"
      error={error}
      link="/auth/login"
      linkText="Sudah Punya Akun ? Login"
    >
      <form onSubmit={handleSubmit}>
        <Input label="fullname" type="text" name="fullname" />
        <Input label="Email" type="email" name="email" />
        <Input label="Phone" type="number" name="phone" />
        <Input label="Password" type="password" name="password" />
        <Button type="submit" className={Styles.register__button}>
          {isLoading ? "Loading" : " Register"}
        </Button>
      </form>
    </AuthLayouts>
  );
};

export default RegisterView;
