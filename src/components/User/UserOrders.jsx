import { Table } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";

const data = [
  {
    image: <IconPhoto size={"50px"} />,
    name: "Oil Painting",
    price: "$50",
    status: "Delivered",
  },
  {
    image: <IconPhoto size={"50px"} />,
    name: "Oil Painting",
    price: "$50",
    status: "Delivered",
  },
  {
    image: <IconPhoto size={"50px"} />,
    name: "Oil Painting",
    price: "$50",
    status: "Delivered",
  },
  {
    image: <IconPhoto size={"50px"} />,
    name: "Oil Painting",
    price: "$50",
    status: "Delivered",
  },
  {
    image: <IconPhoto size={"50px"} />,
    name: "Oil Painting",
    price: "$50",
    status: "Delivered",
  },
];

export function UserOrders() {
  const rows = data.map((row, index) => (
    <tr key={index}>
      <td>{row.image}</td>
      <td>{row.name}</td>
      <td>{row.price}</td>
      <td>{row.status}</td>
    </tr>
  ));

  return (
    <Table highlightOnHover withBorder miw={700}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
