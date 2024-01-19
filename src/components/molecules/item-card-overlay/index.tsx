import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  imgUrl?: string;
  // body?: string;
};

const ItemCardOverlay: React.FC<Props> = ({ title, imgUrl }) => {
  return (
    <Card className="w-full h-full overflow-hidden border-none">
      <CardContent className="p-0 relative">
        <div className="p-4 absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center">
          <h5 className="text-xl font-medium overflow-ellipsis whitespace-nowrap overflow-hidden text-white">
            {title}
          </h5>
          {/* <p className="text-gray-300 overflow-ellipsis whitespace-nowrap overflow-hidden"></p> */}
        </div>

        <div className="h-[150px] max-h-[150px]">
          <Image
            src={
              imgUrl
                ? imgUrl
                : `https://www.themealdb.com/images/ingredients/${title}.png`
            }
            width={300}
            height={200}
            alt="blog img"
            priority
            className="w-full h-full object-cover object-center filter brightness-50 absolute top-0 left-0 right-0 bottom-0 z-0"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCardOverlay;
