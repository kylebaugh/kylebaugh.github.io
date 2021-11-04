import {Component} from 'react'

class GetCost extends Component{
    constructor(){
        super()
        this.state = {
            editMode: false

        }
    }

    toggleEdit = () => {
        this.setState({
            editMode: !this.state.editMode
        });
        return Promise.resolve()
    }

    scrollDown = () => {
        window.scrollBy(0,1000)
        console.log('test')
    }

    render(){
        return this.state.editMode ? (
            <div style={{marginBottom:'5vh', color:'yellow'}}>

                {/* <button onClick={() => {this.scrollDown()}}>Scroll Down</button> */}

                <h1>Cost: The lives of all the Jedi</h1>
                <h1>Power: UNLIMITED</h1>
                <img 
                src={'https://forum.predator.illfonic.com/uploads/default/original/2X/1/1d7b2801394efce541a2934a909138c83aabfeec.gif'}
                alt={'Palpatine the Boss'}
                style={{width:'25vw'}}
                ></img>
                <br></br>
                <button onClick={this.toggleEdit}>Close</button>
            </div>
        ):(
            <div style={{marginBottom:'5vh'}}>
                <button onClick= { () => {
                    this.toggleEdit()
                    .then(() => {this.scrollDown()})
                    
                    }}>
                    Calculate Cost and Power</button>
            </div>
        )
    }
}

export default GetCost