import Tour from '../models/Tour.js';


// create new tour
export const createTour = async (req,res)=>{
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({success:true, message:"Tour created successfully", data:savedTour});

    } catch (err) {
        res.status(500).json({success:false, message:"Failed to create tour. Try again"});
    }
}

// update tour
export const updateTour = async (req,res)=>{

    const id = req.params.id;

    try{

        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true});

        res.status(200).json({success:true, message:"Tour updated successfully", data:updatedTour});

    } catch (err){
        res.status(500).json({success: false, message:"failed to update tour"});
    }
}

// delete tour
export const deleteTour = async (req,res)=>{
    const id = req.params.id;

    try{

        await Tour.findByIdAndDelete(id);

        res.status(200).json({success:true, message:"Tour deleted successfully"});

    } catch (err){
        res.status(500).json({success: false, message:"failed to delete tour"});
    }
}

// getSingle tour
export const getSingleTour = async (req,res)=>{
    try{
    } catch (err){}
}

// getAll tour
export const getAllTour = async (req,res)=>{
    try{
    } catch (err){}
}