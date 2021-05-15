import React from 'react'

function Grid1() {
    return (
       
        <div className="col-lg-6 col-sm-12" style={{backgroundColor:'whitesmoke'}}>

        <div className="row">
          <div className="col-2"  ></div>
          <div className="col-8"  >
          <div className="card shadow rounded" style={{ width: '24rem', marginTop: '30px' }}>
          <div className="card-body" style={{ padding: '25px' }}>
           <div className="card-title"><a href="#" className="btn" style={{ backgroundColor: 'lightgray', color: 'black' }}>Current feeling</a></div>
            <p className="card-text">So excited to finally get my hands on the latest PS 5</p>
            <div style={{ padding: '0%' }}>
              <h5>@josh</h5>
              <p>a few seconds ago</p>
            </div>
          </div>
        </div>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="row">
          <div className="col-2"  ></div>

          <div className="col-8"  >
          <div className="card shadow rounded" style={{ width: '24rem', marginTop: '30px' }}>
          <div className="card-body" style={{ padding: '25px' }}>
           <div className="card-title"><a href="#" className="btn" style={{ backgroundColor: 'lightgray', color: 'black' }}>Current feeling</a></div>
            <p className="card-text">So excited to finally get my hands on the latest PS 5</p>
            <div style={{ padding: '0%' }}>
              <h5>@josh</h5>
              <p>a few seconds ago</p>
            </div>
          </div>
        </div>
          </div>
          <div className="col-2"  ></div>
        </div>


        <div className="row">
          <div className="col-2"  ></div>

          <div className="col-8"  >
          <div  style={{ width: '24rem', marginTop: '30px',border:'none' ,padding:'30px'}}>
             <div > Share what's on your mind with the community
             <div > <a href="#" className="btn" style={{ backgroundColor: 'violet', color: 'black' }}>Share feeling</a></div>
             </div>
         </div>
          </div>
          <div className="col-2"  ></div>
        </div>
      </div>

    )
}

export default Grid1
