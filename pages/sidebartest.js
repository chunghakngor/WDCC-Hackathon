import { useFetchUser } from '../lib/user'
import CourseNavigation from '../components/CourseNav'
import Logging from '../components/Logging'

let school = {
    "courses" : ["CompSci 720", "CompSci 720", "CompSci 720", "CompSci 720"]
}

const SideBar = ({user}) =>{
    return(
        <div className = "w-1/5 h-screen bg-blue-600 absolute left-0 items-center p-10">
            <div>
                <img className = "rounded-md border-4 border-black" src = {user.picture} alt="User Picture"/>
            </div>
            <div>
                <h2 className ="text-3xl font-extrabold text-center">{user.name}</h2>
                <h1 className ="text-2xl font-extrabold text-center">{user.nickname}</h1>
            </div>
            <div> 
                <CourseNavigation courses = {school.courses}/>
            </div>
            <div>
                <Logging user={user}/>
            </div>
        </div>
    )
}

function SideBarTest () {
  const {user, loading} = useFetchUser({ required: true })
  return (
    <div>
      {loading ? <>Loading Sidebar...</>
        : (
          <>
            <SideBar user={user} />
          </>)}
    </div>
  )
}

export default SideBarTest