
import React, { Component } from 'react';


class OPiece extends Component {
    constructor(props) {
        super(props)
        console.log('OPiece.constructor()', props)
      }
    
      componentWillMount() {
        console.log('OPiece.componentWillMount()')
    
        }
      componentDidMount() {
        console.log('OPiece.componentDidMount()')
      }
      
    render() {
        console.log('OPiece.render()')
        return (
            <div>
                    O
               
                </div>
        )
    }
}


export default OPiece;