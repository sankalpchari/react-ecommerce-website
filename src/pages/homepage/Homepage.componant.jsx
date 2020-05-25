import React,{Component} from 'react';
import './Homepage.style.scss';
import Directory from '../../components/directory/Directory.component.jsx'


class Homepage extends Component {

    render(){
       return( 
            <div className='homepage'>
                <Directory/>
            </div>
        )
    }
}

export default Homepage;
