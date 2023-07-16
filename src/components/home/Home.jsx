import React from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <>

        <div className="body">
            <div className="nv">
            <Navbar/>

            </div>
       

<div className="brief">
<div className="text"> My name is James Emmanuel and i am a frontend web developer <br /> with an experience of a year in the tech field <br /> so far ive worked on few projects both live projectsand projects i did while training <br /> and am also looking forward to work on more live projects</div>
<div className="pix"></div>
</div>   


    <h1 className='proj'>PROJECTS</h1>

<div className="projects">
  
  <div className="html">

        <div className="language">
        <h1>HTML & CSS</h1>
        </div>
       

        <div className="crd">
            <div className="bio">
            <div className="dis">
                <div className="btn" className="bi"><button className='open'>OPEN</button></div>
                
            </div>
                <div className="title"><h3>Biography</h3></div>
            </div>
             <div className="sunny">
                <div className="dis" id='sun'> <div className="btn"><button className='open'>OPEN</button></div></div>
                <div className="title"><h3>Sunnyside </h3></div>
                </div>  
            <div className="loop">
            <div className="dis" id='lop'> <div className="btn"><button className='open'>OPEN</button></div></div>
                <div className="title"><h3>Loopstudios</h3></div>
            </div>
        </div>
  
  </div>

<div className="java">
    <div className="language">
    <h1>JAVASCRIPT</h1>
    </div>
   

    <div className="crd">
        <div className="rps">
            <div className="dis" id='rp'> <button className='open'>OPEN</button></div>
            <div className="title"><h3>Rock Paper Scissors</h3></div>
        </div>
        <div className="calc">
        <div className="dis" id='calc'> <button className='open'>OPEN</button></div>
            <div className="title"><h3>Calculator</h3></div>
        </div>
    </div>
  
</div>
  
  <div className="react">
    <div className="language">
    <h1>REACT</h1>
    </div>
    
    <div className="crd">
        <div className="youtube">
        <div className="dis" id='you'> <button className='open'>OPEN</button></div>
            <div className="title"><h3>Youtube</h3></div>
        </div>
         <div className="port">
         <div className="dis" id='pot'> <button className='open'>OPEN</button></div>
            <div className="title"> <h3>Portfolio</h3>  </div>
         </div>
    </div>
 
  </div>

</div>
        </div>
        
    </>
  )
}

export default Home