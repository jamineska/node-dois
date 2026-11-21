export const getAllProducts = async (req, resp) => {
    try {
        return resp.status(200).json({
        ok: true,
        msg: 'recibiendo todos los productos...'
        });
    }catch (error) {
        return resp.status(500).json({
            ok:false,
            msg: 'Error de servidor, póngase en contacto con el admisnitrador...'
        });
    }
};

export const getAProductById = async  (req, resp) => {
    try {
        return resp.status(200).json ({
            ok:true,
            msg:'recibiendo un producto'
        });
    }
    catch (error){
        return resp.status(500).json ({
            ok:false,
            msg: 'Error de servidor, póngase en contacto con el servidor...'
    
        });
    }    
};

export const creatAproduct = async (req, resp) => {
    try {
        const existe = false;
        if (existe) {
            return resp.status(401).json({
                    ok: false,
                    msg:'El producto ya existe...'
                }
            );
        }
        return resp.status(200).json({
            ok: true,
            msg: 'creando un producto...'
        });
        
    }
    catch (error){
        return resp.status(500).json ({
            ok: false,
            msg: 'Error de servidor, póngase en contacto con el administrador...'
        });
    }
};

export const updateProduct = async (req, resp)=> {
    try {
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
        return resp.status(500).json({
            ok: false,
            msg: 'Error de servidor, póngase en contacto con el administrador...'
        });
    }
};

export const deleteProductById = async (req, resp) => {
    try {
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
            }
        );
    }
    catch (error){
        return resp.status(500).json ({
            ok: false,
            msg:'Error de servidor, póngase en contacto con el administrador...'
        });
    }

};