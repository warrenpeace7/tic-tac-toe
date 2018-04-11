
import React, { Component } from 'react';


class BlankPiece extends Component {
    constructor(props) {
        super(props)
        console.log('BlankPiece.constructor()', props)
      }
    
      componentWillMount() {
        console.log('BlankPiece.componentWillMount()')
    
        }
      componentDidMount() {
        console.log('BlankPiece.componentDidMount()')
      }
      
    render() {
        console.log('BlankPiece.render()')
        return (
            <div>
                    
               
                </div>
        )
    }
}





export default BlankPiece;