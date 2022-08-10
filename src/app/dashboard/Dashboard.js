import React, { Component } from 'react';
import TableData from '../TableData.json';
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/styles/style.css";

// import "react-datepicker/dist/react-datepicker.css";



export class Dashboard extends Component {

  render() {
    return (
      <div>
        {/* <div className="proBanner">
          <div>
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/purple-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn btn-sm purchase-button ml-auto">Check Pro Version</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div> */}
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Overall Profile<i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">95 Resume</h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">Employee Details <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">100 Employees</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                <h4 className="font-weight-normal mb-3">User Details <i className="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">300</h2>
                <h6 className="card-text">Increased by 90%</h6>
              </div>
            </div>
          </div>
        </div>
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
                <h4 className="card-title">Profile Details</h4>
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


        {/*<div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                  <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right">
                    <ul>
                      <li>
                        <span className="legend-dots bg-primary">
                        </span>CHN
                      </li>
                      <li>
                        <span className="legend-dots bg-danger">
                        </span>USA
                      </li>
                      <li>
                        <span className="legend-dots bg-info">
                        </span>UK
                      </li>
                    </ul>
                  </div>
                </div>
                <Bar ref='chart' className="chartLegendContainer" data={this.state.visitSaleData} options={this.state.visitSaleOptions} id="visitSaleChart"/>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Traffic Sources</h4>
                <Doughnut data={this.state.trafficData} options={this.state.trafficOptions} />
                <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4">
                  <ul>
                    <li>
                      <span className="legend-dots bg-info"></span>Search Engines
                      <span className="float-right">30%</span>
                    </li>
                    <li>
                      <span className="legend-dots bg-success"></span>Direct Click
                      <span className="float-right">30%</span>
                    </li>
                    <li>
                      <span className="legend-dots bg-danger"></span>Bookmarks Click
                      <span className="float-right">40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Tickets</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Assignee </th>
                        <th> Subject </th>
                        <th> Status </th>
                        <th> Last Update </th>
                        <th> Tracking ID </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face1.jpg")} className="mr-2" alt="face" /> David Grey </td>
                        <td> Fund is not recieved </td>
                        <td>
                          <label className="badge badge-gradient-success">DONE</label>
                        </td>
                        <td> Dec 5, 2017 </td>
                        <td> WD-12345 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face2.jpg")} className="mr-2" alt="face" /> Stella Johnson </td>
                        <td> High loading time </td>
                        <td>
                          <label className="badge badge-gradient-warning">PROGRESS</label>
                        </td>
                        <td> Dec 12, 2017 </td>
                        <td> WD-12346 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face3.jpg")} className="mr-2" alt="face" /> Marina Michel </td>
                        <td> Website down for one week </td>
                        <td>
                          <label className="badge badge-gradient-info">ON HOLD</label>
                        </td>
                        <td> Dec 16, 2017 </td>
                        <td> WD-12347 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require("../../assets/images/faces/face4.jpg")} className="mr-2" alt="face" /> John Doe </td>
                        <td> Loosing control on server </td>
                        <td>
                          <label className="badge badge-gradient-danger">REJECTED</label>
                        </td>
                        <td> Dec 3, 2017 </td>
                        <td> WD-12348 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body p-0 d-flex">
                <div className="dashboard-custom-date-picker">
                  <DatePicker inline selected={this.state.startDate}  onChange={this.handleChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Updates</h4>
                <div className="d-flex">
                  <div className="d-flex align-items-center mr-4 text-muted font-weight-light">
                    <i className="mdi mdi-account-outline icon-sm mr-2"></i>
                    <span>jack Menqu</span>
                  </div>
                  <div className="d-flex align-items-center text-muted font-weight-light">
                    <i className="mdi mdi-clock icon-sm mr-2"></i>
                    <span>October 3rd, 2018</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 pr-1">
                    <img src={require("../../assets/images/dashboard/img_1.jpg")} className="mb-2 mw-100 w-100 rounded" alt="face" />
                    <img src={require("../../assets/images/dashboard/img_4.jpg")} className="mw-100 w-100 rounded" alt="face" />
                  </div>
                  <div className="col-6 pl-1">
                    <img src={require("../../assets/images/dashboard/img_2.jpg")} className="mb-2 mw-100 w-100 rounded" alt="face" />
                    <img src={require("../../assets/images/dashboard/img_3.jpg")} className="mw-100 w-100 rounded" alt="face "/>
                  </div>
                </div>
                <div className="d-flex mt-5 align-items-start">
                  <img src={require("../../assets/images/faces/face3.jpg")} className="img-sm rounded-circle mr-3" alt="face" />
                  <div className="mb-0 flex-grow">
                    <h5 className="mr-2 mb-2">School Website - Authentication Module.</h5>
                    <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                  </div>
                  <div className="ml-auto">
                    <i className="mdi mdi-heart-outline text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project Status</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Due Date </th>
                        <th> Progress </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Herman Beck </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <ProgressBar variant="gradient-success" now={25}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Messsy Adam </td>
                        <td> Jul 01, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-danger" now={75}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> John Richards </td>
                        <td> Apr 12, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-warning" now={90}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> Peter Meggik </td>
                        <td> May 15, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-primary" now={50}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Edward </td>
                        <td> May 03, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-danger" now={50}/>
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Ronald </td>
                        <td> Jun 05, 2015 </td>
                        <td>
                        <ProgressBar variant="gradient-info" now={65}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-white">Todo</h4>
                <form  className="add-items d-flex" onSubmit={this.addTodo}>
                  <input 
                      type="text" 
                      className="form-control h-auto" 
                      placeholder="What do you need to do today?" 
                      value={this.state.inputValue} 
                      onChange={this.inputChangeHandler}
                      required />
                  <button type="submit" className="btn btn-gradient-primary font-weight-bold px-lg-4 px-3">Add</button>
                </form>
                <div className="list-wrapper">
                    <ul className="d-flex flex-column todo-list">
                        {this.state.todos.map((todo, index) =>{
                            return <ListItem 
                            isCompleted={todo.isCompleted}
                            changed={(event) => this.statusChangedHandler(event, index)}
                            key={todo.id}
                            remove={() => this.removeTodo(index) }
                            >{todo.task}</ListItem>
                        })}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
const ListItem = (props) => {

  return (
    <li className={(props.isCompleted ? 'completed' : null)}>
      <div className="form-check">
        <label htmlFor="" className="form-check-label">
          <input className="checkbox" type="checkbox"
            checked={props.isCompleted}
            onChange={props.changed}
          /> {props.children} <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
    </li>
  )
};
export default Dashboard;