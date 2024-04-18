// import RegisterPage from '@components/AdminComponents/RegisterPage/RegisterPage'
// import SideNav from '@components/AdminComponents/SideNav/SideNav'
// import Categories from '@views/Categories/Categories'
// import React from 'react'
// import "./Admin.css"
// import { BrowserRouter ,Route, Switch } from 'react-router-dom';
// const Admin = () => {
//   return (
// <BrowserRouter>

//    <section className="rounded_corners  ">

//     <div>

//       <div className="container">
//         <div className="side-nav">
//           <SideNav />
//         </div>
//         <div className="match-path">
//                         {/* Route to display matched content */}
//                         <Switch>
//                         <Route path="/admin/categories" component={Categories} />
//                             {/* Add more routes as needed */}
//                         </Switch>
//                     </div>
//       </div>
//     </div>

// </section>
// </BrowserRouter>

//   )
// }

// export default Admin

import RegisterPage from '@components/AdminComponents/RegisterPage/RegisterPage'
import SideNav from '@components/AdminComponents/SideNav/SideNav'
import Categories from '@views/Categories/Categories'
import React from 'react'
import './Admin.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Admin = () => {
    return (
        <BrowserRouter>
            <section className="rounded_corners">
                <div className="container">
                    <div className="side-nav">
                        <SideNav />
                    </div>
                    <div className="match-path">
                        <Switch>
                            <Route
                                path="/admin/categories"
                                exact
                                component={Categories}
                            />
                            {/* Add more routes as needed */}
                            <Route
                                path="/admin/register"
                                component={RegisterPage}
                            />
                        </Switch>
                    </div>
                </div>
            </section>
        </BrowserRouter>
    )
}

export default Admin
