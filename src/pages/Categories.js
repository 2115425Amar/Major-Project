// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ }}>
        <div className="row container">
          {
          categories.map((c) => (
            <div className="col-md-4 mt-4 mb-3 gx-3 gy-3" key={c._id}>

              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn btn-outline-success">
                  {c.name}
                </Link>
              </div>

            </div>
          ))
          }
        </div>
      </div>
      
    </Layout>
  );
};

export default Categories;
