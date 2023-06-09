import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value: SelectOption | any;
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ options, onChange, value }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value {value}</span>
      <button className={styles["close-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options.map((option) => (
          <li key={option.label} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Select;
