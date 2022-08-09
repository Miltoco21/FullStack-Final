import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import UserModal from "../Modals/UserModal";
import { PlusCircleFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import clientAxios from "../../../config/clientAxios";

function UserTable() {
  const [showUser, setShowUser] = useState(false),
    [user, setUser] = useState(null),
    [users, setUsers] = useState([]),
    handleShow = () => setShowUser(true),
    onEdit = (item) => {
      console.log(item);
      setUser(item);
      setShowUser(true);
    },
    onDelete = (id) => {
      const arrayUser = users.filter((item) => item.id !== id);
      setUsers(arrayUser);
    };
  useEffect(() => {
    clientAxios.get("/registro").then((response) => {
      setUsers(response.data);
    });
  }, []);
  console.log(users);
  return (
    <Container>
      <div className="d-flex justify-content-end my-3">
        <Button className="shadow" variant="danger" onClick={handleShow}>
          <PlusCircleFill className="me-2" />
          Agregar
        </Button>
      </div>
      <Table className="bg-white shadow" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <Button variant="link" onClick={() => onEdit(item)}>
                  <PencilFill className="text-warning" />
                </Button>
              </td>
              <td>
                <Button variant="link" onClick={() => onDelete(item.id)}>
                  <Trash3Fill className="text-danger" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <UserModal
        showUser={showUser}
        setShowUser={setShowUser}
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
      />
    </Container>
  );
}

export default UserTable;
