import React from 'react';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';

const RenderData = ({label, userdata}) => {
    return(
      <>  
        <RowWrapper className="mb-4 border text-dark" data={
          <>
          <ColumnWrapper data={label}/>
          <ColumnWrapper className="text-align-center" data=":"/>
          <ColumnWrapper data={userdata}/>
          </>
        }/>
      </>
    )
 }

 export default RenderData;