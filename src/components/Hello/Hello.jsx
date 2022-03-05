import React from 'react';
import PropTypes from "prop-types";
import styles from "./_hello.module.css";

const Hello = ({ fullName, username}) =>  {
    return (<p className={styles.Hello}>
        Hello , my name is <span className={styles.Blink}>{fullName}</span> {username && `[${username}]`}, and im happy to start reacting
    </p>);
}


Hello.propTypes =  {
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string
};

Hello.defaultProps = {
    username: undefined
}
export default Hello;


