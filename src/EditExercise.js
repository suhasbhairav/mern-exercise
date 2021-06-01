import React, {useState, useEffect} from 'react'
import axios from 'axios';
const EditExercise = (props) => {
    const id = props.match.params.id;
    const [exercise, setExercise] = useState('');
    const [existingExercise, setExistingExercise] = useState(null);
    useEffect(async () => {
        const result = await axios.get(`http://localhost:5000/exercises/${id}`);
        console.log(result.data);
        setExistingExercise(result.data);
    }, [id]);

    const update = async (e) =>{
        e.preventDefault();
        const newData = {
            username: existingExercise.username,
            description: exercise,
            duration: existingExercise.duration,
            date: new Date(),
        };
        console.log(newData);
        console.log(existingExercise._id);
        const res = await axios.post(`http://localhost:5000/exercises/update/${existingExercise._id}`, newData);
        console.log(res);
        props.history.push('/');
    };

    return (
        <div>
            EditExercise
            <div>
                <form onSubmit={update}>
                    <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value) }/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default EditExercise
