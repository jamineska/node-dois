import express from 'express';
import { creatAproduct, deleteProductById, getAllProducts, getAProductById, updateProduct } from '../controllers/productoController.js'

const routerProductos = express.Router();

routerProductos.get('/productos', getAllProducts);
routerProductos.get('/productos/:id', getAProductById);
routerProductos.post('/productos', creatAproduct);
routerProductos.put('/productos/:id', updateProduct);
routerProductos.delete('/productos/:id', deleteProductById);

export default routerProductos;


