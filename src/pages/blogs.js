import Head from "next/head";
// import AllBlogs from "../components/blog/AllBlogs";

const Blogs = () => {
  return (
    <div>
      <Head>
        <title>blogs</title>
        <meta
          name="description"
          content="this is my personal blogs information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col"></div>
      {/* <AllBlogs /> */}
    </div>
  );
};

export default Blogs;
