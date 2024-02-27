import React  from "react";
import filterStyle from './Filter.module.css';

const Filters = ({setStatus , setGender , setSpecies, status, gender, species})=>{

    

    const handleClick = (value)=>{
        if(status === value){
            
            setStatus(null);
        }else{
            setStatus(value);
        }  
    }

    const genderClicked = (value)=>{
        if(gender===value){
            setGender(null);
        }else setGender(value);    
    }

    const speciesClicked = (value)=>{
        if(species === value){
            setSpecies(null);
        }else {
            setSpecies(value)
        }
    }
    return(
        <div>
            <div>
                <h3 className={filterStyle.textDeco}>Filters</h3>
            </div> 
            <div className={`accordion ${filterStyle.accordion}`} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne`">
                        Status
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body gap-1" style={{display: "flex" ,flexWrap: "wrap", justifyContent: "space-between"}}>
                        <input type="radio" className="btn-check" checked={status === 'dead'} name="status" id="dead" autoComplete="off" data-testid="deadInput" />
                        <label onClick={() => handleClick("dead")} className="btn btn-outline-success" htmlFor="dead">Dead</label>
                        <input type="radio" className="btn-check" name="status" checked={status === 'alive'} id="alive" autoComplete="off"  />
                        <label onClick={() => handleClick("alive")} className="btn btn-outline-success" htmlFor="alive">Alive</label>
                        <input type="radio" className="btn-check" name="status" id="unknown" checked={status === 'unknown'} autoComplete="off"  />
                        <label onClick={() => handleClick("unknown")} className="btn btn-outline-success" htmlFor="unknown">Unknown</label>
                    </div>
                    </div>
                </div>

                
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayTwo-collapseTwo">
                        Gender
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body gap-1" style={{display: "flex" ,flexWrap: "wrap", justifyContent: "space-between"}}>
                        <input type="radio" className="btn-check" checked={gender==="male"} name="gender" id="male" autoComplete="off"/>
                        <label onClick={() => genderClicked("male")} className="btn btn-outline-success" htmlFor="male">Male</label>
                        <input type="radio" className="btn-check" checked={gender==="female"} name="gender" id="female" autoComplete="off"/>
                        <label onClick={() => genderClicked("female")} className="btn btn-outline-success" htmlFor="female">Female</label>
                        <input type="radio" className="btn-check" checked={gender==="genderless"} name="gender" id="genderless" autoComplete="off"/>
                        <label onClick={() => genderClicked("genderless")} className="btn btn-outline-success" htmlFor="genderless">Genderless</label>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayThree-collapseThree">
                        Species
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body gap-1" style={{display: "flex" ,flexWrap: "wrap", justifyContent: "space-between"}}>
                        <input type="radio" className="btn-check" name="species" checked={species=== "human"} id="human" autoComplete="off"/>
                        <label onClick={() => speciesClicked("human")} className="btn btn-outline-success" htmlFor="human">Human</label>
                        <input type="radio" className="btn-check" name="species" checked={species=== "animal"} id="animal" autoComplete="off"/>
                        <label onClick={() => speciesClicked("animal")} className="btn btn-outline-success"  htmlFor="animal">Animal</label>
                        <input type="radio" className="btn-check" name="species" checked={species=== "robot"} id="robot" autoComplete="off"/>
                        <label onClick={() => speciesClicked("robot")} className="btn btn-outline-success" htmlFor="robot">Robot</label>
                        <input type="radio" className="btn-check" name="species" checked={species=== "unknown"} id="species-Unknonw" autoComplete="off"/>
                        <label onClick={() => speciesClicked("unknown")} className="btn btn-outline-success" htmlFor="species-Unknonw">Unknown</label>
                    </div>
                    </div>
                </div>
            
            </div>
            <div className={filterStyle.btnHome}>
                <a className={filterStyle.anchor} href="/"><h6 id={filterStyle.heading6} className="p-2 btn btn-outline-success">Clear Filters</h6></a>
            </div>
        </div>
    )
};

export default Filters;

