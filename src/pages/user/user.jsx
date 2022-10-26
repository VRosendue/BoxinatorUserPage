import React, {Component} from "react";
import Product from "./product";
import "./product.css";
import ShippingFee from "../../components/Shipping/Shipping";
import FetchShipping from "../../components/API/fetchShipping";
import ShippingTimeLine from "../../components/API/ShippingTimeLine";




export default class productsList extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Basic Tier",
        description: 1,
        price: 200,
        img: "/BasicTier.jpg",
      },
      { id: 2, name: "Humble Tier", description: 2, img: "/HumbleTier.jpg" },
      { id: 3, name: "Deluxe Tier", description: 5, img: "/DeluxeTier.jpg" },
      { id: 4, name: "Premium Tier", description: 8, img: "/PremiumTier.jpg" },
      { id: 5, name: "For testing", description: 99, img: "none"}
    ],
  };

  render() {
    return (
      <div>
        <h4 className="TitleProduct">Mystery Boxes</h4>
        <h4 className="TitleShipping">Shipping Information</h4>
        <h4> test</h4>

        

        <Product>
       
        </Product>
        

        {/* <div>
        {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                productName={prod.name}
                img={prod.img}
              />
            );
          })}
        </div> */}
      </div>
    );
  }
}
   