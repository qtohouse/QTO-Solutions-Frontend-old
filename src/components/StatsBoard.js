import React from 'react'
const StatsBoard = () => {
  return (
    <>
  <div className="container bootstrap snippets bootdey">
  <div className="row">
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="panel panel-dark panel-colorful">
        <div className="panel-body text-center">
          <p className="text-uppercase mar-btm text-sm "> <strong>Satisfied Clients </strong></p>
          <img className="" alt="" src="./images/satisfied.png" />
          <hr />
          <p className="h2 text-thin">500+</p>
         
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="panel panel-danger panel-colorful">
        <div className="panel-body text-center">
          <p className="text-uppercase mar-btm text-sm"><strong>Years of Experience </strong></p>
          <img className="" alt="" src="./images/align.png" />
          <hr />
          <p className="h2 text-thin">08</p>
        
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="panel panel-primary panel-colorful">
        <div className="panel-body text-center">
          <p className="text-uppercase mar-btm text-sm"> <strong>Number of Projects </strong></p>
          <img className="" alt="" src="./images/outsourcing.png" />
          <hr />
          <p className="h2 text-thin">1000+</p>
      
        </div>
      </div>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12">
      <div className="panel panel-info panel-colorful">
        <div className="panel-body text-center">
          <p className="text-uppercase mar-btm text-sm"> <strong>Estimating Team</strong></p>
          <img className="" alt="" src="./images/professional-staff.png" />
          <hr />
          <p className="h2 text-thin">40-50</p>
          
        </div>
      </div>
    </div>
  </div>
</div>

    </>


);
}

export default StatsBoard;