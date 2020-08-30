import React, { Component } from 'react';
import '../App.css'
import Sidebar from './sideBar'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs: [],
            randomOutput: "",
            header: "",
            defaultHeader: "..."
        }
    }
    handleHeader(e){
        this.state.header = e.target.value
        this.setState({header : this.state.header})
    }
    addInput(){
        this.setState({inputs: [...this.state.inputs, ""]})
    }

    handleChange(e, index){
        this.state.inputs[index] = e.target.value
        this.setState({inputs: this.state.inputs})
    }
    handleRandom(){
        this.setState({
            randomOutput: this.state.inputs[Math.floor(Math.random()*this.state.inputs.length)],
        })
    }
    something(){
        this.state.header.map((head) => {
            if (head === head){
                console.log("yess")
            }else{
                console.log("no")
            }
        })
    }
    render() { 
        return ( 
            <div className="body">

                {/* sidebar */}
                <Sidebar sideState={this.state} />

                {/* form */}
                <div className="form-body">
                        <div className="question-header">
                            <h1 className="first-header">Enter Your Question</h1>
                            <p>Please type in your question here..</p>
                        </div>
                        <input className="input" onChange={(e)=>this.handleHeader(e)}/>                
                        <div className="input-header">
                            <h1 className="option-header">Enter Your Options</h1>
                            <p>Click the <i>Add options</i> button to type..</p>
                        </div>
                        {
                            this.state.inputs.map((input,index)=>{
                                return(
                                    <div key={index}>
                                        <input className="option-input" onChange={(e)=>this.handleChange(e, index)} />
                                    </div>    
                                )
                            })
                        }
                        <div className="buttons">
                            <button className="add-button" onClick={(e)=>this.addInput(e)}>Add Options</button>
                            <button className="generate-button" onClick={(e)=>this.handleRandom(e)}>Randomize</button>
                        </div>                    
                </div>
            </div>
        );
    }
}
 
export default Counter;