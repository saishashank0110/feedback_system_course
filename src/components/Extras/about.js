import React, { Component } from 'react';
// import Topnav from '../dashboard/topnav'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class about extends Component{
    dash(){
        var id = localStorage.getItem('loginID')
        var role = id[0]
        if (role === 'A') {
            window.location.replace("/dashboard_admin")     
        }else if(role === 'P'){
            window.location.replace("/dashboard_prof")     
        }else{
            window.location.replace("/dashboard")   
        }
    }
    render(){
        return(
                <div className="entire_div_profile">
                {/* <Dashboard/> */}
                <div id="nav_id" className="topnav navbar nav-pills fixed-top navbar-dark bg-dark">          
                {/* <a href="/dashboard">Dashboard</a> */}
                <a onClick={this.dash}>Dashboard</a>
                <span className="navbar-text cfs-class" style={{marginLeft:"40%"}}>Course Feedback System CFS</span>
                {/* <a href="/contact">Contact</a> */}
                <a href="/about">About</a>
                <a className="active" href="/" onClick={this.Logout}>Logout</a>
                </div>

                <div style={{marginLeft:"15%",marginRight:"15%",marginTop:"15%"}}>
                    {/* This site is for collecting feedbacks for the courses and professors individually and show them to the students to help them choose courses and professors. */}
                    <>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
 

  <div className="w3-display-container w3-animate-opacity">
    <img src="./vasavi.jpg" alt="Vasavi" style={{width: '100%', minHeight: 250, maxHeight: 400}} />
    <p>




    </p>
  </div>

  {/* Work Row */}
  <div className="w3-container w3-padding-16 w3-theme-l4" id="work">
    <div className="w3-col.m12">
      <h2>Our Work: Course Feedback System</h2>
      <h3>
        Our project is to create a web portal to share and view reviews about the professors and courses offered at the college.</h3> 
        <br></br><br></br>
        <p>Student can view the feedbacks given by other students based on professor or course</p>
        <p>This will help the students to decide based on the feedbacks</p>        
        <p>Students can also give feedback, rating to courses they opted for. </p>        
        <p>The information contains assignments and test dates.</p>        
        <p>Students can view information on the respective registered courses. </p>
        <p>The professor can also have the details about the student enroled to his course and the courses assigned to him</p>
    </div>
  </div>
  <br></br><br></br>


    {/* Team Container */}
    <div className="w3-container w3-padding-small w3-center" id="team">
    <h2>OUR TEAM</h2>
    <div className="w3-row"><br />
      <div className="w3-half">
        <h3>Anudeep</h3>
        <p>1602-21-733-007</p>
      </div>
      <div className="w3-half">
        <h3>Bharath</h3>
        <p>1602-21-733-009</p>
      </div>
      </div>
      <br></br><br></br>
    </div>

    

  
</>

                
                </div>
                </div>

        )
    }
}
export default about;