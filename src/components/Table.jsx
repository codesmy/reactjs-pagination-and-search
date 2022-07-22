import React from "react";

function Table({ items, query, loading }) {
   
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Заголовок</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {!loading ? items
          .filter((item) => item.title.toLowerCase().includes(query))
          .map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          )) : <tr><td colSpan="3">Загрузка ... </td></tr>}
      </tbody>
    </table>
  );
}

export default Table;
