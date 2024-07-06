import React from "react";
import { useState } from "react";

export default function Task2() {
  const Menu = [
    { Category: "Electronic", Products: ["Tv", "Mobile"] },
    { Category: "Footwear", Products: ["Boots", "Nike"] },
  ];

  const [lists, setLists] = useState(Menu);

  return (
    <div >
               {
                       lists.map(list=>{
                          return  <ul key={ lists.length+1}>
                          <li>Product List: {list.Category}</li>
                        </ul>
                          
                       })
                    }

         
    </div>
  );
}
