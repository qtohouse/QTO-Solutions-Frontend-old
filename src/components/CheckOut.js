const CheckOut = () => {
    return (
<>
<div className="container">
  <div className="view-account">
    <section className="module">
      <div className="module-inner">
        <div className="side-bar">
          <div className="user-info">
            <img
              className="img-profile img-circle img-responsive center-block"
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <ul className="meta list list-unstyled">
              <li className="name">
               Rachel Roth
                <label className="label label-info">General contractor</label>
              </li>
              <li className="email">
                <a href="#">Roth@outlook.com</a>
              </li>
              <li className="activity">Last logged in: Today at 2:18pm</li>
            </ul>
          </div>
          <nav className="side-menu">
            <ul className="nav">
              <li>
                <a href="#">
                  <span className="fa fa-user" /> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-cog" /> Settings
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <span className="fa fa-credit-card" /> Billing
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-envelope" /> Messages
                </a>
              </li>
              <li>
                <a href="user-drive.html">
                  <span className="fa fa-th" /> Drive
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-clock-o" /> Reminders
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content-panel">
          {/* <h2 className="title">Billing</h2> */}
          <div className="billing">
            <div className="secure text-center margin-bottom-md">
              <h3 className="margin-bottom-md text-success">
                <span className="fs1 icon" aria-hidden="true" data-icon="" />
                Secure credit card payment
                <br />
                <small>This is a secure 128-bit SSL encrypted payment</small>
              </h3>
              <div className="accepted-cards">
                    <ul className="list-inline">
                    <li><img class="" alt="Visa img" src="./images/payoneer.png" /> </li>
                    <li><img class="" alt="American Express img" src="./images/paypal.png" /> </li>
                       {/* <li><img class="" alt="MasterCard" src="./images/master-card.png" /></li>
                    <li><img class="" alt="Maestro" src="./images/maestro.png" /></li> */}
                    </ul>
              </div>
            </div>
            <form
              id="billing"
              className="form-horizontal"
              method="post"
              action="#"
              role="form"
            >
              <div className="form-group">
                <label className="col-sm-3 control-label">Name on Card</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                  <p className="help-block">As it appears on the card</p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">Card Number </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="••••  ••••  ••••  ••••"
                  />
                  <p className="help-block">
                    The 16 digits on the front of your credit card.
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">
                  Expiration Date
                </label>
                <div className="col-sm-9 form-inline">
                  <select className="form-control">
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  </select>
                  <span className="divider">/</span>
                  <select className="form-control">
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option> 
                  </select>
                  <p className="help-block">
                    The date your credit card expires. Find this on the front of
                    your credit card.
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">Security Code</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: 120 }}
                    placeholder="CVC"
                  />
                  <p className="help-block">
                    The last 3 digits displayed on the back of your credit card.
                  </p>
                </div>
              </div>
              <div className="address">
                <div className="form-group">
                  <label className="col-sm-3 control-label">Address</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-5 col-sm-offset-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip/Postal"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-5 col-sm-offset-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="action-wrapper text-center">
                <h4 className="notes margin-bottom-sm">
                  You'll be charged{" "}
                  <span className="text-stronger">$99</span>
                </h4>
                <div className="action-btn">
                  <button className="btn btn-success btn-lg">
                    Make Payment
                    <i className="fa fa-chevron-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

</>
  );
}

export default CheckOut;