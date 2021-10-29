export type Employees = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
};

export default interface EmployeesProps {
  employees: Employees[];
}
