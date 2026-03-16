import React from "react";

const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)] ">
      <div className="w-full">
        <div className="">
          <label htmlFor=""> Book Name</label>
          <input type="text" placeholder="Book Name" />
        </div>

        <div className="">
          <label htmlFor=""> Book Title</label>
          <input type="text" placeholder="Book Title" />
        </div>

        <div className="">
          <label htmlFor=""> Author</label>
          <input type="text" placeholder="Author" />
        </div>

        <div className="">
          <label htmlFor=""> Selling Price</label>
          <input type="text" placeholder="Selling Price" />
        </div>

        <div className="">
          <label htmlFor=""> Publish Date</label>
          <input type="text" placeholder="Publish Date" />
        </div>
      </div>
    </div>
  );
};

export default Home;
