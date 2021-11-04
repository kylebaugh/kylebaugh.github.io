import {Component} from 'react'

class AddItem extends Component{
    constructor(){
        super()
        this.state ={
            name:'',
            powerLevel: '',
            cost:'',
            image: ''
        }
    }

    handleAdd = () => {
        this.props.addItem(this.state.name, +this.state.powerLevel, +this.state.cost, this.state.image)
        this.setState({
            name:'',
            powerLevel:'',
            cost:'',
            image:''
        })
        console.log(this.props.armyArray)
    }

    handleName = (e) => {
        this.setState({
            name: e
        })
    }

    handlePowerLevel = (e) => {
        this.setState({
            powerLevel: e
        })
    }

    handleCost = (e) => {
        this.setState({
            cost: e
        })
    }

    handleImage = (e) => {
        this.setState({
            image: e
        })
    }


    render(){
        return(
            <div style={{}}>
                <h1 style={{color:'yellow'}}>Add Clone Resource</h1>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', 
                        gap:'.5vw', paddingTop:'1vw', paddingBottom:'1vw',
                        borderStyle:'solid', borderColor:'yellow', borderWidth:'.15vw'}}>
                    <input 
                        value={this.state.name}
                        onChange={(e) => this.handleName(e.target.value)}
                        placeholder={'Enter Name'}
                        >
                    </input>

                    

                    <input
                    value={this.state.cost}
                    onChange={(e) => this.handleCost(e.target.value)}
                    placeholder={'Enter Cost'}
                    >
                    </input>

                    <input
                        value={this.state.powerLevel}
                        onChange={(e) => this.handlePowerLevel(e.target.value)}   
                        placeholder={'Enter Power Level'}

                        >
                    </input>
                    
                    <input
                    value={this.state.image}
                    onChange={(e) => this.handleImage(e.target.value)}     
                    placeholder={'Enter Image URL'}
            
                        >
                    </input>
                    
                    <button onClick={() => this.handleAdd()}>Submit Item</button>
                </div>
            </div>
        )
    }
}

export default AddItem