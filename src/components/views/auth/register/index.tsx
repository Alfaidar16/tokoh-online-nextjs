import Link from "next/link";
import Styles from "./Register.module.scss";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

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
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

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
    <div className={Styles.register}>
      <h1 className={Styles.register__title}>Register</h1>
      {error && <p className={Styles.register__error}>{error}</p>}
      <div className={Styles.register__form}>
        <form onSubmit={handleSubmit}>
          <Input label="fullname" type="text" name="fullname" />
          <Input label="Email" type="email" name="email" />
          <Input label="Phone" type="number" name="phone" />
          <Input label="Password" type="password" name="password" />
          <Button type="submit" className={Styles.register__form__button}>
            {isLoading ? "Loading" : " Register"}
          </Button>
        </form>
      </div>
      <p className={Styles.register__link}>
        Sudah Punya Akun ? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterView;
