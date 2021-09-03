import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ famous, onAdd,showAdd }) => {
    
    return (
        <header className='header'>
            <h1>{famous}</h1>
           <Button
             color={showAdd ? 'blue' : 'red'} 
           text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd}/>
        </header>
    )
} 
Header.defaultProps = {
    famous: 'WorldFamous Task tracker',
}

Header.propTypes = {
    famous: PropTypes.string.isRequired,
}

//styling Css in JS

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
