const mongoose = require('mongoose');

const drawingsSchema = new mongoose.Schema({
    image: String,
    name: String,
    strokes: [
        {
            points: [
                {
                    x: Number,
                    y: Number,
                }
            ],
            color: String
        }
    ],
})

const Drawing = mongoose.model('drawings', drawingsSchema)

const getDrawings = () => {
    return Drawing.find()
}

const getDrawingById = (id) => {
    return Drawing.findOne({_id: id})
}

const addDrawing = (name,strokes,image) => {
    const drawing = new Drawing({name,strokes,image})
    return drawing.save()
}

const deleteDrawing = (id) => {
    return Drawing.deleteOne({_id: id})
}

module.exports = {
    getDrawings,
    getDrawingById,
    addDrawing,
    deleteDrawing
};