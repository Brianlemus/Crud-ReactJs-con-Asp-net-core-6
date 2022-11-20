import { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalVehiculo from "./componentes/ModalVehiculo"
import TablaVehiculos from "./componentes/TablaVehiculos"




const App = () => {

    const [Vehiculo, setVehiculo] = useState([])

    const [mostrarModal, setMostrarModal] = useState(false);
    
    const [editar, setEditar] = useState(null);

    const mostrarcontactos = async () => {
        const response = await fetch("api/vehiculo/ListaVehiculos");
        
        if (response.ok) {
            const data = await response.json();
            setVehiculo(data);
        }else{
            console.log("error en la lista desde la BD");
        }
    } 

    useEffect(() =>{
        mostrarcontactos();
    }, [])


    // guarda datos a la base de datos..!
    const guardarVehiculo = async (Vehiculo) => {
        const response = await fetch("api/vehiculo/Guardar", {
            method: 'POST',
            headers : {
                'content-Type' : 'application/json;charset=utf-8' 
            },
            body: JSON.stringify(Vehiculo)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarcontactos();

        }
    }

    /// edita datos de la Base de datos..!
    const editarVehiculo = async (Vehiculo) => {
        const response = await fetch("api/vehiculo/Editar", {
            method: 'PUT',
            headers : {
                'content-Type' : 'application/json;charset=utf-8' 
            },
            body: JSON.stringify(Vehiculo)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarcontactos();

        }
    }


    return (
        <Container >
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista De Vehiculos</h5>
                        </CardHeader>
                        <CardBody>
                        <Button color="success" 
                            onClick={ () => setMostrarModal(!mostrarModal)}>
                                Nuevo Vehiculo</Button>
                            <hr></hr>
                            <TablaVehiculos 
                            data={Vehiculo}
                            setEditar={setEditar}
                            mostrarModal={mostrarModal}
                            setMostrarMOdal={setMostrarModal}
                            />
                        </CardBody>
                    </Card>
                </Col>

            </Row>

            <ModalVehiculo 
            mostrarModal={mostrarModal} 
            
            setMostrarMOdal = {setMostrarModal} 
            guardarVehiculo = {guardarVehiculo}

            editar={editar}
            setEditar={setEditar}
            editarVehiculo={editarVehiculo}
            />
        </Container >
        )
}

export default App;