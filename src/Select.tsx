import { useState } from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: number;
};

type SelectProps = {
  options: SelectOption[];
  value: SelectOption | any;
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ options, onChange, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const clearOptions = () => onChange(undefined);
  const selectOption = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      onClick={toggle}
      onBlur={toggle}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className={styles["close-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
            }}
            key={option.label}
            className={styles.option}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Select;
