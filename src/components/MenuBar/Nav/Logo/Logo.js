import React from 'react';
import { string } from 'prop-types';

const Logo = ({ fill, ...props }) => (
    <svg {...props} viewBox="0 0 170 100" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={fill}
            d="M40 100h40V20H0v50h60v10H40v20zM20 40h40v10H20V40zm90-40H90v70h80V20h-60V0zm0 40h40v10h-40V40z"
        />
    </svg>
);

Logo.propTypes = {
    fill: string
};

Logo.defaultProps = {
    fill: undefined
};

export default Logo;
