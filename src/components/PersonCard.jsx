import { render } from '@testing-library/react'
import React, {Component} from 'react'


class PlayerCard extends React.Component {
    constructor (props) {
        super(props)
        }
    


    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hair_color}</p>    
            </div>
        )
        }
    
}

export default PlayerCard
