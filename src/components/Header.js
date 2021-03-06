import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({title}) => {
    return (
        <header class='header'>
            <h1>{title}</h1>
            <Button/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
