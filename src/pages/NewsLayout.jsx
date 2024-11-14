import React from "react";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const NewsLayout = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>

          <div className="card bg-base-100 ">
            <figure className="px-10 pt-10">
              <img  
                src={news?.image_url}
                alt="Shoes"
                className="rounded-lg w-full bg-cover"
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary"> All news in this categories</Link>
              </div>
            </div>
          </div>
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsLayout;
