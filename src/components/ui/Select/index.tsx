import styles from "./Select.module.scss";

type Option = {
  label: string;
  value: string;
};
type propsType = {
  label?: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  options: Option[];
};
const Select = (props: propsType) => {
  const { name, label, defaultValue, disabled, options } = props;
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={styles.container__select}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
