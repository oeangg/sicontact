import { CardContact } from "./card";
import GetData from "@/connection/getdata";

export const ListContact = async () => {
  const { data } = await GetData();
  return (
    <div className="container flex w-full flex-col items-center justify-center gap-2 py-5">
      {data.map((dt) => {
        return <CardContact key={dt._id} id={dt._id} {...dt} />;
      })}
    </div>
  );
};
