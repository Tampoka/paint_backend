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
        console.log(error);
        res.send(error);
    }
}

async function getProject(req, res) {
    try {
        const project = await getDrawingById()
        res.send(project)
    } catch
        (error) {
        console.log(error);
        res.send(error);
    }
}

async function addProject(req, res) {
    try {
        await addDrawing(req.body.name)
        // res.send(project)
        res.send({success: true})
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function deleteProject(req, res) {
    try {
        await deleteDrawing(req.params.id)
        res.sendStatus(204);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getProjects,
    getProject,
    addProject,
    deleteProject,
};