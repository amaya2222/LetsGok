import React from 'react';
import Grid from './Grid';

import Header from './Header';
function Body() {
  return (
    <>
      <Header></Header>
     {/* <div className="container"style={{marginTop:'5px'}}>
       <h3 style={{textAlign:'center'}}>A community to spread positivity</h3>
       <Grid></Grid>
     </div> */}
     <div  style={{marginTop:'5px', padding:'0%'}}>
     <h3 style={{textAlign:'center'}}>A community to spread positivity</h3>
      <Grid></Grid>
       
     </div>



    </>
  )
}

export default Body;
