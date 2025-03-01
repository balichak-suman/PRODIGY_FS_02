import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees").then((res) => setEmployees(res.data));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp._id}>{emp.name} - {emp.position} - \$${emp.salary}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;