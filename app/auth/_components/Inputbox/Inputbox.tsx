import styles from "./Inputbox.module.css";

interface InputboxProps {
  labelText: string;
  inputType: string;
  id: string;
  value?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputbox = ({
  labelText,
  inputType,
  id,
  required,
  value,
  onChange,
}: InputboxProps) => {
  return (
    <div className={styles.Inputbox}>
      <label htmlFor={id}>{labelText}</label> <br />
      <input
        id={id}
        type={inputType}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
