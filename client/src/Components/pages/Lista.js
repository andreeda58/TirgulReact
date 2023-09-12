import "./lista.css"

import { useState } from "react";

const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
];

const Lista = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const [filteredData, setFilteredData] = useState(data);



    const handleClick = (nextIndex) => {


        setExpandedIndex((currentExpandedIndex) => {

            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }


        });
    }

    const handleDelete = (index) => {
        setFilteredData([...filteredData].filter((item) => item !== filteredData[index]))
    }


    const RenderData = filteredData.map((item, index) => {
        const isOpen = index === expandedIndex;
       
        return (
            <div id="mueve" className="items" key={index}>
                <label className="items-2">{item.name}</label>
                <input type="checkbox" onChange={() => handleClick(index)}></input>
                {isOpen && <button className="items-2" onClick={() => handleDelete(index)}>delete</button>}
            </div>

        )
    });

    return (
        <div className="box">
            {RenderData}
        </div>

    )
}

export default Lista;