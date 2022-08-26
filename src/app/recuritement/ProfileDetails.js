import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TableData from '../TableData.json';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/styles/style.css";

export class RecurProfileDetails extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Recuritement </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Recuritement</a></li>
              <li className="breadcrumb-item active" aria-current="page">Profile Details</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Profile Details
                <Link className='btn btn-success btn-sm float-right' to="/recuritement/basic-elements">Add Profile</Link>
                </h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User </th>
                        <th> First name </th>
                        <th> Skill Capacity</th>
                        <th> Last Updated Date</th>
                        <th> Status </th>
                        <th> Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TableData.map((data, i) => {
                        this.skillVariant = '0';
                        if (data.skillCapacity > 0 && data.skillCapacity < 36) {
                          this.skillVariant = "danger"
                        } else if (data.skillCapacity > 37 && data.skillCapacity < 76) {
                          this.skillVariant = "warning"
                        } else { this.skillVariant = "success" }

                        this.profileStatus = '0';
                        if (data.status.toLowerCase() === 'rejected') {
                          this.profileStatus = "badge badge-danger"
                        } else if (data.status.toLowerCase() === 'inprogress') {
                          this.profileStatus = "badge badge-warning"
                        } else { this.profileStatus = "badge badge-success" }

                        return (

                          <tr key={i}>
                            <td className="py-1">
                              <img src={data.path} alt="user icon" />
                            </td>
                            <td> {data.fullName}</td>
                            <td> <ProgressBar striped variant={this.skillVariant} now={data.skillCapacity} /> </td>
                            <td> {data.lastUpdatedDate} </td>
                            <td> <label class={this.profileStatus}>{data.status}</label> </td>
                            <td>          <button type="button" className="btn btn-gradient-dark btn-icon-text">
                              Edit
                              <i className="mdi mdi-file-check btn-icon-append"></i>
                            </button>
                              <button type="button" className="btn btn-gradient-danger btn-icon-text">
                                <i className="mdi mdi-delete btn-icon-trash"></i>
                                Delete
                              </button>
                            </td>
                          </tr>
                        )

                      })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecurProfileDetails
