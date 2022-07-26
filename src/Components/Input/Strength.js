import React from 'react';
import { FaTrash } from "react-icons/fa";

function Strength(props) {
    

    const handleStrengthChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...props.strengthList];
        list[index][name] = value;
        props.setStrengthList(list);
    };

    const handleStrengthRemove = (index) => {
        const list = [...props.strengthList];
        list.splice(index, 1);
        props.setStrengthList(list);
    };
    
    const handleStrengthAdd = () => {
        props.setStrengthList([...props.strengthList, { strength: "" }]);
    };

    return (
        
            <div className="mt-10 w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className=''>Strength</h1>
                {props.strengthList.map((singleService, index) => (
                    <div key={index} className="w-3/4 md:w-96 rounded flex justify-center items-center flex-row outline-none">
                        
                            <input
                                name="strength"
                                className="w-full my-2 p-2 outline-none"
                                type="text"
                                id="strength"
                                value={singleService.service}
                                onChange={(e) => handleStrengthChange(e, index)}
                                placeholder='Strength'
                            />
                        
                            {props.strengthList.length !== 1 && (
                                <button className='py-2 text-slate-800 font-medium'
                                    type="button"
                                    onClick={() => handleStrengthRemove(index)}
                                >
                                    <span><FaTrash /></span>
                                </button>
                            )}
                    </div>
                    
                ))}
                <button className='my-2 bg-slate-700 py-2 px-5 text-white font-medium' type="button" onClick={handleStrengthAdd}>Add More</button>
                
            </div>
        
    )
}
export default Strength;