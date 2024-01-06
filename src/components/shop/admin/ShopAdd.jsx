// import React from 'react'

function ShopAdd() {
  return (
    <div className="border-[1px] border-solid border-border mt-[10px]">
      <div className="mt-[10px] flex flex-col">
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Name</label>
          <input className="text-box" type="text" />
        </div>
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Price</label>
          <input className="text-box" type="number" />
        </div>
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Size</label>
          <select className="text-box" name="" id="">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="flex flex-col m-5 ml-20">
          <label className="font-black text-xl">Description</label>
          <textarea className="text-box" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="flex flex-row justify-center mb-5 text-sm">
          <button className="button-add">Add Product</button>
        </div>
      </div>
    </div>
  );
}

export default ShopAdd;
