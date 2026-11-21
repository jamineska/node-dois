import express from 'express';
import { creatAService, deleteServicioById, getAllServices, getAServiceById, updateService } from '../controllers/servicioController.js';
const routerServicios = express.Router()

//GET ALL SERVICES <urlBase>/api/v1/servicios
routerServicios.get('/servicios', getAllServices) 

//GET A SERVICE BY ID <urlBase>/api/v1/servicios
routerServicios.get('/servicios/:id', getAServiceById)

//CREATE A SERVICE <urlBase>/api/v1/servicios
routerServicios.post('/servicios', creatAService)

//UPDATE A SERVICE BY ID <urlBase>/api/v1/servicios
routerServicios.put('/servicios/:id', updateService)

//ELIMINAR A SERVICE BY ID <urlBase>/api/v1/servicios
routerServicios.delete('/servicios/:id', deleteServicioById)



export default routerServicios