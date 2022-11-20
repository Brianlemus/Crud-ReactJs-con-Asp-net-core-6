import React from 'react'
import { Button, Table } from "reactstrap"

const TablaVehiculos = ({ data , setEditar, mostrarModal, setMostrarMOdal}) => {

    const enviarDatos = (Vehiculo) => {
        setEditar(Vehiculo);
        setMostrarMOdal(!mostrarModal);
    }

    return(
        <Table striped responsive>
            <thead>
                <tr>
                    {/* <th>No.Registro</th> */}
                    <th>No.Placa</th>
                    <th>Marca</th>
                    <th>linea</th>
                    <th>Modelo</th>
                    <th>Tipo</th>
                    <th>Color</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                   (data.length < 1 ) ? (
                    <tr>
                        <td colSpan="8">Sin Registro de vehiculos</td>
                    </tr>
                   ) : (
                    data.map((item) => (
                        <tr key={item.idRegistro}>
                            <td>{item.noPlaca}</td>
                            <td>{item.marca}</td>
                            <td>{item.linea}</td>
                            <td>{item.modelo}</td>
                            <td>{item.tipo}</td>
                            <td>{item.color}</td>
                            <td>
                                <Button color='primary' size='sm' className='me-2' 
                                    onClick={ () => enviarDatos(item) }>Editar Vehiculo</Button>
                                {/* <Button color='danger' size='sm' >Eliminar</Button> */}
                            </td>
                        </tr>
                    ))
                   )
            }
            </tbody>
        </Table>
        
    )
}

export default TablaVehiculos;
