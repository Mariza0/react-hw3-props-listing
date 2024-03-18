import React from 'react';
import { TypeData, TypeDataList } from './TypeData';

interface ListingProps {
    items: TypeDataList;
  }

export const Listing: React.FC<ListingProps> = ({ items }) => {
    return (
       
          <div className="item-list">
            {items.filter((item: TypeData) => item.state === 'active').map((item: TypeData) => (

                <div className="item" key={item.listing_id} >
                  <div className="item-image">
                  <a href={item.url}>
                        <img
                        src={item.MainImage.url_570xN}
                        alt="Item"
                        />                  
                  </a>
                  </div>
                <div className="item-details">
                  <p className="item-title">{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</p>
                  <p className="item-price">{item.currency_code === 'USD' ? '$' + item.price : 
                                             item.currency_code === 'EUR' ? '€' + item.price : item.currency_code + ' ' + item.price } </p>
                  <p className={item.quantity <= 10 ? "item-quantity level-low" : 
                  item.quantity <= 20 ? "item-quantity level-medium" : "item-quantity level-high" }>{item.quantity} left</p>
                </div>
              </div>

            ))}
            </div>
      );

}
