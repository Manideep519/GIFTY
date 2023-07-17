import { Container, Group } from "@mantine/core";
import React from "react";
import { PostCard } from "./PostCard";

export default function Gallery() {
  let data = [
    {
      image: "gallery/1.jpg",
      title: "Design Book",
      author: "Gifty",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    },
    {
      image: "gallery/2.jpg",
      title: "Gift Wrapper",
      author: "Gifty",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    },

    {
      image: "gallery/3.jpg",
      title: "Watch",
      author: "Gifty",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi placeat quam porro? Sunt quas asperiores voluptates mollitia, qui iure tempore hic magni culpa iste, repellendus molestiae ducimus velit aperiam",
    },
  ];

  return (
    <Container size="xl" py={50}>
      <Group noWrap>
        {data.map((post) => {
          return (
            <PostCard
              image={post.image}
              author={post.author}
              description={post.description}
              title={post.title}
            />
          );
        })}
      </Group>
      <br />
      <Group noWrap>
        {data.map((post) => {
          return (
            <PostCard
              image={post.image}
              author={post.author}
              description={post.description}
              title={post.title}
            />
          );
        })}
      </Group>
      <br />
      <Group noWrap>
        {data.map((post) => {
          return (
            <PostCard
              image={post.image}
              author={post.author}
              description={post.description}
              title={post.title}
            />
          );
        })}
      </Group>
    </Container>
  );
}
