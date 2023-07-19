import { Container, Grid } from "@mantine/core";
import axios from "axios";
import { PostCard } from "../Post/PostCard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ProductContext } from "../../context/ProductContext";
export const productsData = [
  {
    imageURL: "gallery/1.jpg",
    title: "Design Book",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },
  {
    imageURL: "gallery/2.jpg",
    title: "Gift Wrapper",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },

  {
    imageURL: "gallery/3.jpg",
    title: "Watch",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },
  {
    imageURL: "gallery/1.jpg",
    title: "Design Book",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },
  {
    imageURL: "gallery/2.jpg",
    title: "Gift Wrapper",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },

  {
    imageURL: "gallery/3.jpg",
    title: "Watch",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },
  {
    imageURL: "gallery/1.jpg",
    title: "Design Book",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },
  {
    imageURL: "gallery/2.jpg",
    title: "Gift Wrapper",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },

  {
    imageURL: "gallery/3.jpg",
    title: "Watch",
    artistName: "Gifty",
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    price: 100,
  },
];
export default function Gallery() {
  const { auth } = useContext(AuthContext);
  const { products, updateProducts } = useContext(ProductContext);

  async function getPosts() {
    try {
      const response = await axios.get("https://gifty-backend.onrender.com/api/posts/all");
      console.log(response);
      updateProducts(response.data.reverse());
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container size="xl" py={50}>
      <Grid>
        {products?.map((post, index) => {
          return (
            <Grid.Col key={index} md={4} sm={12}>
              <PostCard
                image={post.imageURL}
                author={post.artistName}
                description={post.desciption}
                title={post.title}
                price={post.price}
                index={index}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}
