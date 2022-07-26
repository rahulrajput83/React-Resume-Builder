import React from 'react';
import { FaTrash } from "react-icons/fa";

function Work(props) {


    const handleWorkChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...props.workList];
        list[index][name] = value;
        props.setWorkList(list);
    };

    const handleWorkRemove = (index) => {
        const list = [...props.workList];
        list.splice(index, 1);
        props.setWorkList(list);
    };
    const handleWorkAdd = () => {
        props.setWorkList([...props.workList, { work: "" }]);
    };

    return (
        
            <div className="mt-10 w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className=''>Work Qualification</h1>
                {props.workList.map((singleService, index) => (
                    <div key={index} className="w-3/4 md:w-96 rounded flex justify-center items-center flex-row outline-none">
                        
                            <input
                                name="work"
                                className="w-full my-2 p-2 outline-none"
                                type="text"
                                id="work"
                                value={singleService.service}
                                onChange={(e) => handleWorkChange(e, index)}
                                placeholder='Work Experience'
                            />
                        
                            {props.workList.length !== 1 && (
                                <button className='py-2 text-slate-800 font-medium'
                                    type="button"
                                    onClick={() => handleWorkRemove(index)}
                                >
                                    <span><FaTrash /></span>
                                </button>
                            )}
                    </div>
                    
                ))}
                <button className='my-2 bg-slate-700 py-2 px-5 text-white font-medium' type="button" onClick={handleWorkAdd}>Add More</button>
                
            </div>
        
    )
}
export default Work