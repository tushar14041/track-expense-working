import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor()
    {
        super()
        this.state = {
            parentName : 'parent'
        }

     this.greetParent = this.greetHandler.bind(this) 
    
    }

    greetHandler(childName)
    {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
             <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

// lecture 15
// < childComponent se greetParent ko as a argument pass kiya
// fir chiled se greetHandler ko call kiya 
// constructor me bind karna jaruri hai aur bind ka work samjna baki hai 