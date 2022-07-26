import React from 'react';
import { FaTrash } from "react-icons/fa";

function Extra(props) {

    const handleExtraChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...props.extraList];
        list[index][name] = value;
        props.setExtraList(list);
    };

    const handleExtraRemove = (index) => {
        const list = [...props.extraList];
        list.splice(index, 1);
        props.setExtraList(list);
    };
    
    const handleExtraAdd = () => {
        props.setExtraList([...props.extraList, { extra: "" }]);
    };

    return (
        
            <div className="mt-10 w-full md:w-1/2 flex flex-col justify-center items-center">
                <h1 className=''>Extra Qualification</h1>
                {props.extraList.map((singleService, index) => (
                    <div key={index} className="w-3/4 md:w-96 rounded flex justify-center items-center flex-row outline-none">
                        
                            <input
                                name="extra"
                                className="w-full my-2 p-2 outline-none"
                                type="text"
                                id="extra"
                                value={singleService.service}
                                onChange={(e) => handleExtraChange(e, index)}
                                placeholder='Extra Qualification'
                            />
                        
                            {props.extraList.length !== 1 && (
                                <button className='py-2 text-slate-800 font-medium'
                                    type="button"
                                    onClick={() => handleExtraRemove(index)}
                                >
                                    <span><FaTrash /></span>
                                </button>
                            )}
                    </div>
                    
                ))}
                <button className='my-2 bg-slate-700 py-2 px-5 text-white font-medium' type="button" onClick={handleExtraAdd}>Add More</button>
                
            </div>
        
    )
}
export default Extra