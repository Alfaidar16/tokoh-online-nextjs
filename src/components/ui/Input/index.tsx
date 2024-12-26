import Styles from "./input.module.scss";

type propsType = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
};
const Input = (props: propsType) => {
  const { label, name, type, placeholder, defaultValue, disabled } = props;
  return (
    <div className={Styles.container}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={Styles.container__input}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
};
export default Input;
