import React, { Component } from 'react'
import AppNav from './AppNav'
import DatePicker from 'react-datepicker'
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import { Container, FormGroup, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {Input,  Label,Form } from 'reactstrap';
import Moment from 'react-moment';


 class Expenses extends Component {
    // {
    //     "id": 100,
    //     "description": "New York trip",
    //     "expensedate": "2019-06-16T11:30:00.000200Z",
    //     "location": "New York",
    //     "category": {
    //         "id": 1,
    //         "name": "Travel"
    //     }
    // }

    //  emptyItem = {
         
    //      description : '',
    //      expensedate : new Date(),
    //     //  id : 104,                 
    //      location : '',
    //      category : {id:1 , name:'Travel'},
    //      user: { id:2}
    //  }
     
     constructor(props){
         super(props)

         this.state = {
            isLoading : false,
            Categories : [],
            Expenses : [],
            date: new Date(),
            Item : {
         
                description : '',
                expensedate :   new Date(),
               //  id : 104,                 
                location : '',
                category : {id:1 , name:'Travel'},
                user: { id:2}
            }//this.emptyItem
    
          }
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.handleDateChange = this.handleDateChange.bind(this);

     }

    async handleSubmit(event){
        const item = this.state.Item;

        await fetch('/expenses',{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body :JSON.stringify(item),
        });
        
           event.preventDefault();

        //    console.log(this.state);
           this.props.history.push("/expenses");
        
  }

  handleChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;
    //   let item={...this.state.Item};
    let Item= this.state.Item;

      Item[name] = value;
      this.setState({Item});

      console.log(this.state);
  }
    
   handleDateChange(date){
       let Item=this.state.Item;
       Item.expensedate = date;
       this.setState({Item});
    //    console.log(item);
   }

//   handleChange (date) {
//     console.log("date")

//         this.setState({
//           Item: {
//               expensedate : date
//           }
//         });
//         console.log("date")
//       };



      async remove(id){
          await fetch(`/expenses/${id}`, {              
            method : 'DELETE',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
          }).then(() => {

            // let updatedExpenses = {...this.state.Expenses}.filter( i => i.id !== id);  // this was by the tutor
            //   let updatedExpenses = Object.values(this.state.Expenses).filter( i => i.id !== id);
            
            let updatedExpenses = this.state.Expenses.filter( i => i.id !== id);
              this.setState({Expenses : updatedExpenses});

          });
      }

   
  
      async componentDidMount() {

          const response= await fetch('/api/categories');
          const body = await response.json();
          this.setState({Categories : body , isLoading: false});
          console.log(body)

         
          const responseExp = await fetch('/expenses');
        //   console.log(responseExp)

          const bodyExp = await responseExp.json();
          this.setState({Expenses : bodyExp , isLoading: false});
          console.log(bodyExp)



      }


    
    
    render() {
        console.log("hello")

        const title =<h3> Add Expense </h3>
        const { Categories } =this.state;
        const { Expenses, isLoading} =this.state

        if(isLoading)
         return(<div> Loding...</div>)
        

       
        let optionList =
            Categories.map(category => <option key={category.id} id={category.id}>
                {category.name}</option>
           )
        
           
         let rows =
         Expenses.map(expense =>
            <tr key={expense.id}>
               <td> {expense.description} </td>
               <td> {expense.location}</td>

               <td> <Moment date={expense.expensedate} format="YYYY/MM/DD" /> </td>

               <td> {expense.category.name}</td>
               <td><Button size="sm" color="danger" onClick={ () => this.remove(expense.id)}>Delete</Button> </td>
                
            </tr>)  
         

        return (
            <div>
                <AppNav />
                {/* { Categories } */}
                {/* <h2> Expenses </h2> */}
                <Container>
                        
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <label htmlFor="title"> Title </label>
                            <input type="text" name="description" id="description" 
                                onChange={this.handleChange} autoComplete="name"/>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="category"> Category </label>
                            <select>
                                {optionList}
                            </select>
                            <br/>
                            {/* <input type="text" name="category" id="category" onChange={this.handleChange} /> */}
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="city"> Expense Date </label>
                            <DatePicker selected={this.state.Item.expensedate} onChange={this.handleDateChange} />
                            </FormGroup>
                    <div className="row">
                        <FormGroup className="col-md-a mb-3">
                            <label htmlFor="location"> Location </label>
                            <input type="text" name="location" id="location" onChange={this.handleChange}></input>
                        </FormGroup>
                    </div>
                        <FormGroup>
                        <Button color="primary" type="submit" > Save </Button>{' '}
                        <Button color="secondary" tag={Link} to="/categories"> Cancel </Button>
                        </FormGroup>                             
                   </Form>
                </Container>
                  

            {''}
             <Container>
                <h3> Expense List </h3>
                <Table className="mt-4">
                <thead>
                    <tr>    
                        <th width="20%">Discription</th>
                        <th width="10%">Location</th>
                        <th width="10%">Date</th>

                        <th width="">Category</th>
                        <th width="10%">Action</th>
                    </tr>
                </thead> 
                <tbody>
                  {rows}
                  {/* {console.log(rows)} */}
                
                </tbody>                


                 </Table>
             </Container>


            </div>
        )
    }
}

export default Expenses
