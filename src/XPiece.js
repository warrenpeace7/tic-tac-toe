
import React, { Component } from 'react';



class XPiece extends Component {
    constructor(props) {
        super(props)
        console.log('XPiece.constructor()', props)
      }
    
      componentWillMount() {
        console.log('XPiece.componentWillMount()')
    
        }
      componentDidMount() {
        console.log('XPiece.componentDidMount()')
      }
      
    render() {
        console.log('XPiece.render()')
        return (
            <div>
                    X
               
                </div>
        )
    }
}



export default XPiece;