import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"


const modeloVehiculo = {
    idRegistro : 0,
    noPlaca : "",
    marca : "",
    linea : "",
    modelo : "",
    tipo : "",
    color : ""
}

const ModalVehiculo = ({ mostrarModal, setMostrarMOdal, guardarVehiculo, editar, setEditar, editarVehiculo }) => {

    const [vehiculo, setvehiculo] = useState(modeloVehiculo);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setvehiculo(
            {
                ...vehiculo,
                [e.target.name] : e.target.value
            }
        )
    }

    const enviarDatos = () => {
        if (vehiculo.idRegistro == 0 ) {
            guardarVehiculo(vehiculo)
        }else{
            editarVehiculo(vehiculo)
        }

        setvehiculo(modeloVehiculo)
    }

    useEffect(() => {
        if (editar != null ) {
            setvehiculo(editar);
        }else{
            setvehiculo(modeloVehiculo);
        }
    }, [editar])


    const cerrarModal = () => {
        setMostrarMOdal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>

                {vehiculo.idRegistro == 0  ? "Nuevo Vehiculo" : "Editar Vehiculo" }
                
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>No.Placa</Label>
                        <Input name="noPlaca" onChange={(e) => actualizarDato(e)} value={vehiculo.noPlaca}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Marca</Label>
                        <Input name="marca" onChange={(e) => actualizarDato(e)} value={vehiculo.marca}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Linea</Label>
                        <Input name="linea" onChange={(e) => actualizarDato(e)} value={vehiculo.linea}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Modelo</Label>
                        <Input name="modelo" onChange={(e) => actualizarDato(e)} value={vehiculo.modelo}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Tipo</Label>
                        <Input name="tipo" onChange={(e) => actualizarDato(e)} value={vehiculo.tipo}/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label>Color</Label>
                        <Input name="color" onChange={(e) => actualizarDato(e)} value={vehiculo.color}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                 <Button color='primary' size='sm'  onClick={enviarDatos}>Guardar</Button>
                 <Button color='danger' size='sm'  onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalVehiculo;