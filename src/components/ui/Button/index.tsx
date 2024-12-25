import Styles from "./button.module.scss";

type propsType = {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  variant?: string;
  className?: string;
  children: React.ReactNode;
};
const Button = (props: propsType) => {
  const { type, onClick, children, variant = "primary", className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${Styles.button} ${Styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
