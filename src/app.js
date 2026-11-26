
import express from 'express';
import 'dotenv/config'
import helmet from "helmet";



import serviciosRouter from './router/serviciosRouter.js';
import productosRouter from './router/productosRouter.js'

const app = express();
const port = process.env.PORT || 3000;



//RUTAS
app.use(express.json());
app.use('/api/v1', serviciosRouter)
app.use('/api/v1', productosRouter)
app.use(helmet());

//GET ALL SERVICES <urlBase>/api/v1/productos


app.listen(port,() => {
    console.log(`servidor a la escucha del puerto $(port)`);
})
