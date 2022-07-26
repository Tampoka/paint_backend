const {
    getDrawings,
    getDrawingById,
    addDrawing,
    deleteDrawing
} = require('./drawings-repo');


async function getProjects(req, res) {
    try {
        const projects = await getDrawings()
        res.send(projects)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

async function getProject(req, res) {
    try {
        const project = await getDrawingById()
        res.send({success: true, project})
    } catch
        (error) {
        console.log(error)
        res.send({success: false, error})
    }
}

async function addProject(req, res) {
    try {
        await addDrawing(req.body.name, req.body.strokes, req.body.image)
        const projects = await getDrawings()
        res.send({success: true, projects})
    } catch (error) {
        console.log(error)
        return ({success: false, error})
    }
}

async function deleteProject(req, res) {
    try {
        await deleteDrawing(req.params.id)
        res.sendStatus({success: true})
    } catch (error) {
        return ({success: false, error})
    }
}

module.exports = {
    getProjects,
    getProject,
    addProject,
    deleteProject,
};