import './Navbar.css'
import  Small from './assets/react-icon-small.png'

export default function (props){
    return (
        <nav className={props.darkMode?"dark":""}>
       <div className='imgheading'> <img 
                className="nav--logo_icon"
                src={Small}
            />
            
            <h3 className="nav--logo_text"
            >React</h3>
            </div>
            <div
                className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>


            </div>





</nav>

    )
}