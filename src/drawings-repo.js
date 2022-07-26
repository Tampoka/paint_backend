const mongoose = require('mongoose');

const drawingsSchema = new mongoose.Schema({
    image: String,
    name: String,
    id: String,
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

const Drawing=mongoose.model('drawings',drawingsSchema)

