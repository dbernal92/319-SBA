import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        movie_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

// commentSchema. index({name: 1});
commentSchema.index({movie_id: 1});
commentSchema.index({text: 1})

export default mongoose.model("Comment", commentSchema);


// mongodb+srv://darienbernal:DariScorpiHeart92!@cluster0.lv2by.mongodb.net/sample_mflix

// mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/sample_mflix