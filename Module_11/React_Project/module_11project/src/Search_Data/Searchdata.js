import React, { useState } from "react";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SearchableTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toString().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table data={filteredData} />
    </div>
  );
};

const Searchdata = () => {
  const initialData = [
    { name: "Janvi", age: 30, email: "janvi@example.com" },
    { name: "Jully", age: 35, email: "jully@example.com" },
    { name: "Nidhi ", age: 45, email: "Nidhi@example.com" },
    { name: "Zain", age: 15, email: "Zain@example.com" },
    { name: "Aksha", age: 25, email: "Aksha@example.com" },
    { name: "Priya", age: 55, email: "Priya@example.com" },
    { name: "Arti", age: 65, email: "Arti@example.com" },
  ];

  return (
    <div>
      <h1>Searchable Table</h1>
      <SearchableTable data={initialData} />
    </div>
  );
};

export default Searchdata;
