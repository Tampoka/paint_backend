const {
    getDrawings,
    getDrawingById,
    addDrawing,
    deleteDrawing, getDrawingByName
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
        res.send({project})
    } catch
        (error) {
        console.log(error)
        res.send(error)
    }
}

async function addProject(req, res) {
    try {
        await addDrawing(req.body.name, req.body.strokes, req.body.image)
        const project = await getDrawingByName(req.body.name)
        res.send({project})
    } catch (error) {
        console.log(error)
        return (error)
    }
}

async function deleteProject(req, res) {
    try {
        await deleteDrawing(req.params.id)
        res.sendStatus({success: true})
    } catch (error) {
        return (error)
    }
}

module.exports = {
    getProjects,
    getProject,
    addProject,
    deleteProject,
};