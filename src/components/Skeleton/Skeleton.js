import React from 'react';
import SkeletonElement from './SkeletonElement';

const Skeleton = () => {
   return (
      <div className="loading">
         <SkeletonElement type="card" />
         <SkeletonElement type="title" />
      </div>
   );
};

export default Skeleton;
