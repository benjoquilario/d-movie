import React from 'react';

const SkeletonElement = ({ type }) => {
   const classes = `skeleton ${type}`;
   return <div className={classes}></div>;
};

export default SkeletonElement;
