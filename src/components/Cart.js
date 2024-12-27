
const Cart = () => {
    return (
<>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container padding-bottom-3x mb-1">
    {/* Alert*/}
    <div
     className="alert alert-info alert-dismissible fade show text-center"
       style={{ marginBottom: 30, backgroundColor: '#fdc022' ,   }}
>
      <span className="alert-close" data-dismiss="alert" />
      <img
        className="d-inline align-center"
        src="./images/badge.png" 
        width={20}
        height={20}
        alt="badge icon"
      />
      &nbsp;&nbsp;With this purchase you will earn <strong>290</strong> Reward
      Points.
    </div>
    {/* Shopping Cart*/}
    <div className="table-responsive shopping-cart">
      <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            {/* <th className="text-center">Quantity</th> */}
            <th className="text-center">Subtotal</th>
            <th className="text-center">Discount</th> 
            <th className="text-center">
              <a className="btn btn-sm btn-outline-danger" href="#">
                Clear Cart
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="product-item">
                <a className="product-thumb" href="#">
                  <img
                    src="./images/drywall-1.png" alt="drywall img" 
                
                  />
                </a>
                <div className="product-info">
                  <h4 className="product-title">
                    <a href="#">SCP 24SO Southerly West Primary Control (WPC) Roof Replacement</a>
                  </h4>
                  <span>
                    <em>Size:</em> Small
                  </span>
                  {/* <span>
                    <em>Color:</em> Dark Blue
                  </span> */}
                </div>
              </div>
            </td>
            {/* <td className="text-center">
              <div className="count-input">
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </td> */}
            <td className="text-center text-lg text-medium">$43.90</td>
            <td className="text-center text-lg text-medium">$18.00</td>
            <td className="text-center">
              <a
                className="remove-from-cart"
                href="#"
                data-toggle="tooltip"
                title=""
                data-original-title="Remove item"
              >
                <i className="fa fa-trash" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="product-item">
                <a className="product-thumb" href="#">
                  <img
                    src="./images/masonry-1.png" alt="drywall img" 
                    
                  />
                </a>
                <div className="product-info">
                  <h4 className="product-title">
                    <a href="#">SCP 24SO Southerly West Primary Control (WPC) Roof Replacement</a>
                  </h4>
                  <span>
                    <em>Size:</em> Medium
                  </span>
                  {/* <span>
                    <em>Color:</em> Black
                  </span> */}
                </div>
              </div>
            </td>
            {/* <td className="text-center">
              <div className="count-input">
                <select className="form-control">
                  <option>1</option>
                  <option selected="">2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </td> */}
            <td className="text-center text-lg text-medium">$24.89</td>
            <td className="text-center">—</td>
            <td className="text-center">
              <a
                className="remove-from-cart"
                href="#"
                data-toggle="tooltip"
                title=""
                data-original-title="Remove item"
              >
                <i className="fa fa-trash" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="product-item">
                <a className="product-thumb" href="#">
                  <img
                   src="./images/lumber-1.png" alt="drywall img" 
                  
                  />
                </a>
                <div className="product-info">
                  <h4 className="product-title">
                    <a href="#">SCP 24SO Southerly West Primary Control (WPC) Roof Replacement</a>
                  </h4>
                  <span>
                    <em>Size:</em>Large
                  </span>
                  {/* <span>
                    <em>Color:</em> Turquoise
                  </span> */}
                </div>
              </div>
            </td>
            {/* <td className="text-center">
              <div className="count-input">
                <select className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </td> */}
            <td className="text-center text-lg text-medium">$200.00</td>
            <td className="text-center">—</td>
            <td className="text-center">
              <a
                className="remove-from-cart"
                href="#"
                data-toggle="tooltip"
                title=""
                data-original-title="Remove item"
              >
                <i className="fa fa-trash" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="shopping-cart-footer">
      {/* <div className="column">
        <form className="coupon-form" method="post">
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Coupon code"
            required=""
          />
          <button className="btn btn-outline-primary btn-sm" type="submit">
            Apply Coupon
          </button>
        </form>
      </div> */}
      <div className="column text-lg">
        Subtotal: <span className="text-medium">$289.68</span>
      </div>
    </div>
    <div className="shopping-cart-footer">
      <div className="column">
        <a className="btn btn-outline-secondary" href="/Projects">
          <i className="icon-arrow-left" />
          &nbsp;Back to Shopping
        </a>
      </div>
      <div className="column">
        <a
          className="btn btn-primary"
          href="#"
          data-toast=""
          data-toast-type="success"
          data-toast-position="topRight"
          data-toast-icon="icon-circle-check"
          data-toast-title="Your cart"
          data-toast-message="is updated successfully!"
        >
          Update Cart
        </a>
        <a className="btn btn-success" href="CheckOut">
          Checkout
        </a>
      </div>
    </div>
  </div>
</>


  );
}

export default Cart;