import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
import Image from "next/image";

  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

const Blog = async () => {

  return (
    <div className={styles.mainContainer}>
      {posts.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.content}</p>
            <div className={styles.badge}>
            <p>{item.category}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog