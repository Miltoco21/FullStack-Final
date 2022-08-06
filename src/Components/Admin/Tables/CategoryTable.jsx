import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import CategoryModal from "../Modals/CategoryModal";
import { PlusCircleFill, PencilFill, Trash3Fill } from "react-bootstrap-icons";

function UserTable() {

  let data = [
    {
      id: 1,
      categoria: "Terror",
    },
    {
      id: 2,
      categoria: "Drama",
    },
    {
      id: 3,
      categoria: "Comedia",
    },
  ];

  const [showCategory, setShowCategory] = useState(false),
    [ category, setCategory] = useState(null),
    [categories, setCategories] = useState(data),

    handleShow = () => setShowCategory(true),
    onEdit = item => {
      console.log(item);
      setCategory(item);
      setShowCategory(true);
    },

    onDelete = (id) => {
      const arrayUser = categories.filter(item => item.id !== id)
      setCategories(arrayUser)
    };

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
            <th>Categoria</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id}>
              <td>{item.categoria}</td>
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
      <CategoryModal
        showCategory={showCategory}
        setShowCategory={setShowCategory}
        categories={categories}
        setCategories={setCategories}
        category={category}
        setCategory={setCategory}
      />
    </Container>
  );
}

export default UserTable;
