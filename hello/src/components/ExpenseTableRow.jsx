import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class ExpenseTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    deleteExpense() {
        console.log(this.props.obj.id)
        axios.delete('http://localhost:8000/api/expenses/' + this.props.obj.id)
            .then((res) => {
                //   console.log(res.response.data);

                console.log('Expense removed deleted!')
                Swal.fire(
                    'Good job!',
                    'Expense deleted Successfully',
                    'success'
                )
            }).catch((error) => {
              console.log(error.response.data);  
                Swal.fire(
                    'Failed job!',
                    'Expense deleted failed',
                    'success'
                )
            })

    }


    //     deleteExpense() {


    //             axios({
    //   method: 'delete',
    //   url: 'http://localhost:8000/api/expenses/' + this.props.obj.id,
    //      headers: { 'content-type': 'application/json' },

    // }).then((res) => {
    //                 console.log('Expense removed deleted!')
    //             }).catch((error) => {
    //                 console.log(error)
    //             });

    //     }





    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.amount}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <Link className="edit-link" to={"/edit-expense/" + this.props.obj.id}>
                        <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteExpense} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}