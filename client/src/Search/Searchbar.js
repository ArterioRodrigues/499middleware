import React, { useEffect, useState } from 'react'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import './Search.css'


export default function Searchbar() {
    const [search, setSearch] = useState('');
    const [searchbar, setSearchBar] = useState(false);
    const [adbar, setAdBar] = useState(false)
    const showSearch = () => {
        setSearchBar(!searchbar);
    }

    const handleClick = () =>{
        setAdBar(!adbar)
    }

    const handleSubmit = () =>{
        console.log('working')
        setSearchBar(true)
    }


    return (
        
        <div className='search'>
            <form method = 'get'>
                <RiIcons.RiArrowDropDownLine id = "advance" className= 'search-icon' onClick={handleClick}/>
                <input id = "myInput_1" className='search-menu' type="text" placeholder="Enter Workout" onChange={e => setSearch(e)}/>     
                <AiIcons.AiOutlineSearch className='search-icon' onClick={handleSubmit}/> 
                {adbar && BarData} 
            </form>
        </div>
    )

    
}


export const BarData = [
    <div className='advance-option'>

    
        <label >Target Area</label>
        <input type="checkbox" value="Target Area"/>

        <label> Weight:</label>
        <input style={{width: '50px'}} type="number" />

        <br/>

        <label>Target Muscle </label>
        <input type="checkbox" value="Target Muscle" />

        <label> Weight:</label>
        <input  style={{width: '50px'}} type="number"/>

        <br/>

        <label>Exercise Category</label>
        <input type="checkbox" value="Exercise Category"/>

        <label> Weight:</label>
        <input style={{width: '50px'}} type="number" />

        <br/>

        <label>PPA</label> 
        <input type="checkbox" value="Push Pull Stretch Aerobic"/>

        <label> Weight:</label>
        <input style={{width: '50px'}} type="number"/>

        <br/>

        <label>Difficulty</label>
        <input type="checkbox" value="Difficulty"/>

        <label> Weight:</label>
        <input style={{width: '50px'}} type="number"/>

        <br/>

        <label>Location </label>
        <input type="checkbox" value="Location" />

        <label> Weight:</label>
        <input style={{width: '50px'}} type="number"/>

    </div>
    
]

