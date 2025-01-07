import React from 'react'
import logoImg from '../../../../images/logo1.PNG'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#0099ff"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src = {logoImg} style={{width:100}} ></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">

        <Link class="nav-link" to={"/"}>
                  Home 
        </Link>
                
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/doctor-appoinment">Doctor Appoinment</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link active" to="/my-appoinment">My Appoinment</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link active" to="/registration">Registration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
