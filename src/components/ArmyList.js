import axios from 'axios'
import {Component} from 'react'
import AddItem from './AddItem'
import ManageItem from './ManageItem'
import GetCost from './GetCost'

class ArmyList extends Component{
    constructor(){
        super()
        this.state = {
            armyArray: []

        }
    }

    componentDidMount(){
        axios.get('/api/army')
            .then((res) => {
                this.setState({
                    armyArray: res.data
                    })
                    console.log(this.state.armyArray)
                })
            .catch((err) => {console.log(err)})

    }


    addItem = (name, powerLevel, cost, image) => {
        axios.post('/api/army', {name, powerLevel, cost, image})
            .then((res) => {
                this.setState({
                    armyArray: res.data
                })
            })
            .catch((err) => {console.log(err)})
            console.log(this.state.armyArray)

    }

    deleteItem = (id) => {
        axios.delete(`/api/army/${id}`)
            .then((res) => {
                this.setState({
                    armyArray: res.data
                })
            })
            .catch((err) => {console.log(err)})
    }

    editItem = (id, name, cost, powerLevel, upgradeCount) => {
        axios.put(`/api/army/${id}`, {name, cost, powerLevel, upgradeCount})
            .then((res) => {
                this.setState({
                    armyArray: res.data
                })
            })
            .catch((err) => {console.log(err)})
    }

    render(){
        
        return(
            
            <div style={{width:'95vw', height:'fit-content', display:'flex', flexDirection:'column', 
                marginLeft:'2.5vw', marginBottom:'2.5vw', borderStyle:'solid', borderColor:'yellow', borderWidth:'.25vw'
             }}>
                <AddItem 
                armyArray = {this.state.armyArray}
                addItem = {this.addItem}
                />  

                <br></br>
                <h1 style={{color:'yellow'}}>Resource List</h1>
                <br></br>
                <div style={{
                display:'flex', flexDirection:'row', justifyContent:'space-evenly',
                paddingLeft:'2vw', paddingRight:'2vw', flexWrap:'wrap', gap:'2.5vw'
                }}>   
                {this.state.armyArray.map((item) => {
                    return(
                        <div style={{
                            width:'17vw'
                            }}>
                            <ManageItem
                                item={item}
                                deleteItem={this.deleteItem}
                                editItem={this.editItem}
                            />
                        </div>
                    )
                })}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <GetCost />
                </div>
            </div>
            
        )
    }
}

export default ArmyList