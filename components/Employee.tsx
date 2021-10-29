import Image from "next/image";
import styles from "./Employee.module.css";
import { Employees } from "../types/employees.types";

const Employee = ({ email, name, address }: Employees) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          src={"/images/avatar.png"}
          width={48}
          height={48}
          alt="avatar image"
        />
        <div className={styles.employeeName}>
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p>{email}</p>
        <p>{address.city}</p>
        <p>{address.street}</p>
        <p>{address.zipcode}</p>
      </div>
    </div>
  );
};

export default Employee;
