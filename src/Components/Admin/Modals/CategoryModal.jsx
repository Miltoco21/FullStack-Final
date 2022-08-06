import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { PlusCircle, Pencil, XCircle } from "react-bootstrap-icons";

function CategoryModal({ showCategory, setShowCategory, category, setCategory, categories, setCategories }) {
  console.log('category', category)
  const emptyForm = { categoria: ""},
    [errorMsg, setErrorMsg] = useState(""),
    [showAlert, setShowAlert] = useState(false),
    [form, setForm] = useState(emptyForm),

    handleChange = (e) => 
    setForm({ ...form, [e.id]: e.value }),

    handleClose = () => {
      setShowCategory(false);
      setErrorMsg("");
      setForm(emptyForm);
      setShowAlert(false);
    },

    
    handleSubmit = async (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-lone-blocks
      {category === null ? setForm(emptyForm): setForm(category)};
      console.log('form', form)
      if (form.categoria.length < 3) {
        setShowAlert(true);
        setErrorMsg("El nombre de la categoria es muy corto");
        return;
      }
      // eslint-disable-next-line no-lone-blocks
      {
        category === null ? setCategories([...categories, form ]): setCategory(item => item.id === category.id ? {id:category.id, user: category} : item ) ;
      }

      handleClose();
    };
    console.log("user", category);

  return (
    <Modal show={showCategory} centered backdrop="static" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{category ? "Modificar " : "Crear "} Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresar Categoria"
              required
              value={form.categoria}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="warning"
              className="shadow zoom me-4"
              type="submit"
            >
              {category ? (
                <>
                  <Pencil className="me-2" /> Modificar
                </>
              ) : (
                <>
                  <PlusCircle className="me-2" /> Agregar
                </>
              )}
            </Button>
            <Button
              variant="danger"
              onClick={handleClose}
              className="shadow zoom bk"
            >
              <XCircle className="me-2" />
              Cerrar
            </Button>
          </div>
        </Form>
        <div className="mt-4">
          {showAlert ? (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {errorMsg}
            </Alert>
          ) : null}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CategoryModal;
