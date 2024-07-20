import React from "react";

export default function MovieDetail({ params: { id } }: { params: { id: string } }) {
  return <div>movie {id}</div>;
}
