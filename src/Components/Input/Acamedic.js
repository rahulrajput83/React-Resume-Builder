import React from 'react';
import { FaTrash } from "react-icons/fa";

function Acamedic(props) {

    const handleAcademicChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...props.academicList];
        list[index][name] = value;
        props.setAcademicList(list);
    };

    const handleAcademicRemove = (index) => {
        const list = [...props.academicList];
        list.splice(index, 1);
        props.setAcademicList(list);
    };
    
    const handleAcademicAdd = () => {
        props.setAcademicList([...props.academicList, { academic: "" }]);
    };

    return (
        
            <div className="mt-10 w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className=''>Academic Qualification</h1>
                {props.academicList.map((singleService, index) => (
                    <div key={index} className="w-3/4 md:w-96 rounded flex justify-center items-center flex-row outline-none">
                        
                            <input
                                name="academic"
                                className="w-full my-2 p-2 outline-none"
                                type="text"
                                id="academic"
                                value={singleService.service}
                                onChange={(e) => handleAcademicChange(e, index)}
                                 placeholder='Academic Qualification'
                            />
                        
                            {props.academicList.length !== 1 && (
                                <button className='py-2 text-slate-800 font-medium'
                                    type="button"
                                    onClick={() => handleAcademicRemove(index)}
                                >
                                    <span><FaTrash /></span>
                                </button>
                            )}
                    </div>
                    
                ))}
                <button className='my-2 bg-slate-700 py-2 px-5 text-white font-medium' type="button" onClick={handleAcademicAdd}>Add More</button>
                
            </div>
        
    )
}
export default Acamedic