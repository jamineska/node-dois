export const getAllProducts = async (req, resp) => {
    try {
        //llamada a bbdd
        return resp.status(200).json({
        ok: true,
        msg: 'recibiendo todos los productos...'
        });
    }catch (error) {
        //llamada a bbdd
        return resp.status(500).json({
            ok:false,
            msg: 'Error de servidor, póngase en contacto con el admisnitrador...'
        });
    }
};


export const getAProductById = async  (req, resp) => {
    try {
        //llama la bbdd y le solicita un producto por id
        return resp.status(200).json ({
            ok:true,
            msg:'recibiendo un producto'
        });
    }
    catch (error){
        //llamada a bbdd
        return resp.status(500).json ({
            ok:false,
            msg: 'Error de servidor, póngase en contacto con el servidor...'
    
        });
    }    
};

export const creatAproduct = async (req, resp) => {
    try {
        //{llama la bbdd y le solicita un producto para crear id}
        const existe = false;
        if (existe) {
            return resp.status(401).json({
                ok: false,
                msg:'El producto ya existe...'
            });
        }
        return resp.status(200).json({
            ok: true,
            msg: 'creando un producto...'
        });
        
    }
    catch (error){
        //llamada a bbdd
        return resp.status(500).json ({
            ok: false,
            msg: 'Error de servidor, póngase en contacto con el administrador...'
        });
    }
};

export const updateProduct = async (req, resp)=> {
    try {
        //{id:1, nombre:'producto1', descripcion:'descripción de producto'}
         //{llama la bbdd y le solicita un producto por id}        
        const existe = false;
        if (existe) {
            return resp.status(401).json({
                ok: false,
                msg: 'El producto no existe...'
            });
        }
        return resp.status(200).json({
            ok: true,
            msg:'actualizando un producto...'
        });
    }
    catch(error){
        //llamada a bbdd
        return resp.status(500).json({
            ok: false,
            msg: 'Error de servidor, póngase en contacto con el administrador...'
        });
    }
};

export const deleteProductById = async (req, resp) => {
    try { 
        //{id:1, nombre:'producto1', descripcion:'descripción de producto'}
        //{llama la bbdd y le solicita un producto por id}        
        const existe = false;
        if (existe) {
            return resp.status(401).json({
                ok: false,
                msg:'El producto no existe...'
            });
        }
        return resp.status(200).json ({
            ok: true,
            msg: 'eliminando un producto...'
        });
    }
    catch (error){
        return resp.status(500).json ({
            ok: false,
            msg:'Error de servidor, póngase en contacto con el administrador...'
        });
    }

};