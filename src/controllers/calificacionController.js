import CalificacionesRepository from "../repository/calificacionRepository.js";

const findAll = async (req, res) => {
    const result = await CalificacionesRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.idCalificacion;
    const result = await CalificacionesRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await CalificacionesRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await CalificacionesRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.idCalificacion;

    const result = await CalificacionesRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CalificacionController = { findAll, create, findOne, update, remove }

export default CalificacionController;