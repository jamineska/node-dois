export const getAllServices = async (req, resp) => {
    try {
        //llamada a bbdd
        resp.status(200).json({
            ok: true,
            msg: "recibiendo servicios......."
        });
        //throw: error
    } catch (error) {
        //llamada a bbdd
        resp.status(500).json({
            ok: true,
            msg: "Error de servidor, pongase en contacto con el servidor..."
        });
    }
};


export const getAServiceById = async (req, resp) => {
    try {
        //llama la bbdd y le solicita un servicio por id
        resp.status(200).json({
            ok: true,
            msg: "recibiendo un servicio..."
        });
    } catch {
        //llamada a bbdd
        resp.status(500).json({
            ok: true,
            msg: "Error de servidor, pongase en contacto con el servidor..."
        });
    }
};

export const creatAService = async (req, resp) => {
    try {      
        ///{llama la bbdd y le solicita un servicio para crear id}
        if ('Elservicio si exista') {
            return resp.status(401).json({
                ok: true,
                msg: "El servicio ya existe..."
            });
        }
        return resp.status(200).json({
            ok: true,
            msg: "creando un servicio..."
        });
    } catch {
            //llamada a bbdd
        resp.status(500).json({
            ok: true,
            msg: "Error de servidor, pongase en contacto con el servidor..."
        });
    }
};

export const updateService = async (req, resp) => {
    try {
        //{id:1, nombre:'servicio1', descripcion:'descripción de servicio'}
        //{llama la bbdd y le solicita un servicio por id}
        if (true) {
            return resp.status(401).json({
                ok: true,
                msg: "El servicio ya existe..."
            });
        }
    } catch {
            //llamada a bbdd
        resp.status(500).json({
            ok: true,
            msg: "Error de servidor, pongase en contacto con el servidor..."
        });
    }
};

export const deleteServicioById = async (req, resp) => {
    try {
        //{id:1, nombre:'servicio1', descripcion:'descripción de servicio'}
        //{llama la bbdd y le solicita un servicio por id}
        
        if (true) {
            return resp.status(401).json({
                ok: true,
                msg: "El servicio ya existe..."
            });
        }
    } catch {
        //llamada a bbdd
        resp.status(500).json({
            ok: true,
            msg: "Error de servidor, pongase en contacto con el servidor..."
        });
    }
};