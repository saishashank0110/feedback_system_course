import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Topnav from '../dashboard/topnav'
import Sidebar from '../dashboard/sidebar'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/profile.css'
var id = localStorage.getItem("loginID")
console.log("id in showprofile is" , id);
class show_profile extends Component{
    constructor(props){
        super(props)
        this.state={
            details:[1],
            id:id
        }
    }
    get_details(){
        const student={s_id:this.state.id}
        axios.post('http://localhost:4000/app/get_student_details',{student})
        .then(res=>{
            this.setState({details:res.data})
            console.log(res.data);
            var ld=res.data;
            for(var d in ld){
                let x=ld[d];
                console.log(x['s_id']);
                document.getElementById("show_sid").setAttribute('value',x['s_id'])
                document.getElementById("show_sname").setAttribute('value',x['s_name'])
                document.getElementById("show_semail").setAttribute('value',x['s_email'])
                document.getElementById("show_scontact_no").setAttribute('value',x['s_contact_no'])
            }
        })
        // console.log(this.state.details);
    }
    
    
    componentDidMount(){
        this.get_details();
        //this.show();
    }
    render(){
        return(
            <div className="entire_div_profile">
                {/* <Dashboard/> */}
                <Topnav/>
                <Sidebar/>
                <div className="side_main_box">
                <div style={{marginLeft:"25%",padding:"15px" ,border:"1px solid",width:"45%",height:"",borderRadius:"10px"}}>
                    <img src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"  alt="Avatar" style={{width:"35%",height:"50%",marginLeft:"33%"}} ></img><br></br><br></br>
                    <pre >ID:            <input type="text" id="show_sid" readOnly style={{width:"70%"}}></input></pre>
                    <pre >NAME:          <input type="text" id="show_sname" readOnly style={{width:"70%"}}></input></pre>
                    <pre >EMAIL:         <input type="text" id="show_semail" readOnly style={{width:"70%"}}></input></pre>
                    <pre >CONTACT NO:    <input type="text" id="show_scontact_no" readOnly style={{width:"70%"}}></input></pre>
                </div>
                </div>
            </div>
        )
    }
    show(){
        // let x=this.state.details[0];
        // document.getElementById("show_sid").innerHTML=x.get('s_id');
        for(var d in this.state.details){
            let x=this.state.details[d];
            console.log(x['s_id']);
            document.getElementById("show_sid").innerHTML=x['s_id']
        }
    }
    
}
export default show_profile;