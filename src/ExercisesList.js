import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(async () => {
        const result = await axios.get('http://localhost:5000/exercises/');
        console.log(result.data);

        setExercises(result.data);
    }, []);

    const deleteExercise = (id) => {
        console.log(id);
        const res = axios.delete(`http://localhost:5000/exercises/${id}`);
        console.log(res.data);
        setExercises(exercises.filter(exercise => {
            return exercise._id !== id;
        }))
    };


    return (
        <div>
            ExercisesList
            <Link to='/add'>
                <button>
                    Add
                </button>
            </Link>
            {
                exercises.map(exercise => {
                    return <div key={exercise._id}>
                                {exercise.username} ; {exercise.description} 
                                <Link to={"/edit/"+exercise._id}>Edit</Link>
                                <button onClick={() => deleteExercise(exercise._id)}>Delete</button>
                            </div>
                })
            }
        </div>
    )
}

export default ExercisesList
