import React, { Component } from 'react'
import AppNav from './AppNav'

class Category extends Component {
    state = {  
        isLoading : true,
        Categories : []
    }
    
    //sync - you send a request than you wait for the response....
    //async - you send a request and you don't have to wait....
    async componentDidMount(){
       // console.log("from the category")
        const response = await fetch('/api/categories/')
        const body = await response.json();
        this.setState({Categories : body , isLoading : false});
    }


    render() {
        const  {Categories , isLoading } = this.state ;
        if(isLoading)
        return(<div> Loding ... </div>);

        return (
            <div>
                <AppNav />

                <h2>  Categories  of The History</h2>
                {
                    Categories.map( category =>
                        <div id={category.id}>
                            {category.name}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Category
