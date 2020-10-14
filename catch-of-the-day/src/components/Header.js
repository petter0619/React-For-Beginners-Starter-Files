import React from 'react';
import PropTypes from 'prop-types';

// Stateless Functional Component (if all component does is return HTML + some props/proptypes)
/*function Header(props) {
    return (
        <header className="top">
            <h1>
                Catch 
                <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                </span>
                Day
            </h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
            </h3>
        </header>
    );
}*/
// Implicit return arrow function syntax:
const Header = (props) => (
    <header className="top">
        <h1>
            Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};

/*
class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>
                    Catch 
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span> 
                </h3>
            </header>
        )
    }
}*/ //this = the instance of the component

export default Header;