import React from "react";

interface Props {
  title: string;
  content: string;
  commentsQTy: number;
  tags: string[];
  // 8 - enum
  category: Category;
}

// 8 - enum
export enum Category {
  JS = "js",
  TS = "ts",
  CSS = "css",
}

const Destructuring = ({ title, content, commentsQTy, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>quantidade de comentários: {commentsQTy}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {Category.CSS}</h4>
    </div>
  );
};

export default Destructuring;
