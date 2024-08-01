import './App.css';
import Login from './components/registration/login'
import SignUp from './components/registration/signup'
import details from './components/registration/details'
import verify from './components/registration/verify'
import verify_confirm from './components/registration/verify_confirm'
import dashboard from './components/dashboard/dashboard'
import {Route, Switch} from 'react-router-dom'
import error from './components/error'
import dashboard_admin from './components/dashboard/dashboard_admin';
import modify_courses from './components/modify_courses/modify_courses';
import courses_table from './components/register_into_courses/courses_table';
import addOrDeleteCourse from './components/modify_courses/addOrDeleteCourse';
import show_profile from './components/profile/show_profile';
import view_feedbacks_student from './components/View Feedbacks/view_feedbacks_student';
import show_all_courses from './components/View Feedbacks/show_all_courses';
import show_all_prof from './components/View Feedbacks/show_all_prof'
import about from './components/Extras/about';
import Feedback from './components/feedback/Feedback'
import GiveFeedback from './components/feedback/GiveFeedback'
import GiveCourseFeedback from './components/feedback/CourseGiveFeedback'
import GiveProfessorFeedback from './components/feedback/ProfessorGiveFeedback'
import assign_prof from './components/assign_prof/assign_prof';
import ShowProf from './components/show_users/show_prof';
import ShowStudents from './components/show_users/show_students';
import {ProtectedRouteStudent,ProtectedRouteAdmin} from './protected_routes/protected_route'
import verify_admin from './components/registration/verify_admin';

function App() {
  return (
    <div className="div_in_app">
      {<Switch>
        {/* registration */}
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/details' component={details}/>
        <Route exact path='/about' component={about}/>
        
        {/* student */}
        <ProtectedRouteStudent exact path='/dashboard' component={dashboard}/>
        <ProtectedRouteStudent exact path='/feedback' component={Feedback}/>
        <ProtectedRouteStudent exact path='/give_feedback' component={GiveFeedback}/>
        <ProtectedRouteStudent exact path='/course_give_feedback' component={GiveCourseFeedback}/>
        <ProtectedRouteStudent exact path='/professor_give_feedback' component={GiveProfessorFeedback}/>
        <ProtectedRouteStudent exact path='/register' component={courses_table}/>
        <ProtectedRouteStudent exact path='/profile' component={show_profile}/>
        <ProtectedRouteStudent exact path='/view_all_feedbacks' component={view_feedbacks_student}/>
        <ProtectedRouteStudent exact path='/show_all_courses' component={show_all_courses}/>
        <ProtectedRouteStudent exact path='/view_feedback_prof_to_student' component={show_all_prof}/>
        

        <ProtectedRouteAdmin exact path='/show_prof' component={ShowProf}/>
        <ProtectedRouteAdmin exact path='/show_students' component={ShowStudents}/>
        <ProtectedRouteAdmin exact path='/modify_courses' component={modify_courses}/>
        <ProtectedRouteAdmin exact path='/verify' component={verify}/>
        <ProtectedRouteAdmin exact path='/verify_confirm' component={verify_confirm}/>
        <ProtectedRouteAdmin exat path='/assign_prof' component={assign_prof}/>
        <ProtectedRouteAdmin exact path='/add_del_course' component={addOrDeleteCourse}/>
        <ProtectedRouteAdmin exact path='/dashboard_admin' component={dashboard_admin}/>
        <ProtectedRouteAdmin exact path='/verify_admin' component={verify_admin}/> 
        <Route component={error}/>
        
      </Switch>}
    </div>
  );
}

export default App;
