import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  imgUrl?: string;
  body?: string;
};

const ItemCard: React.FC<Props> = ({ title, body, imgUrl }) => {
  return (
    <Card className="w-full h-full overflow-hidden border-none">
      <CardContent className="p-0">
        <Image
          src={
            imgUrl
              ? imgUrl
              : `https://www.themealdb.com/images/ingredients/${title}.png`
          }
          width={300}
          height={200}
          alt="blog img"
          // priority
          loading="lazy"
          className="w-full h-full max-h-[150px] object-cover object-center"
        />
        <div className="p-4">
          <h5 className="font-medium overflow-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </h5>
          <p className="text-gray-500 overflow-ellipsis whitespace-nowrap overflow-hidden">
            {body}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
