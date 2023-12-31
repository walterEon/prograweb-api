import CursosRepository from "../repository/cursoRepository.js";

const findAll = async (req, res) => {
    const result = await CursosRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.idCurso;
    const result = await CursosRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await CursosRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await CursosRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.idCurso;

    const result = await CursosRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CursoController = { findAll, create, findOne, update, remove }

export default CursoController;