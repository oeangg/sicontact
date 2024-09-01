import { Header } from "@/components/header";
import { CardContact } from "@/components/card";
import { Footer } from "@/components/footer";

async function GetData() {
  try {
    const respon = await fetch(
      "https://v1.appbackend.io/v1/rows/4CBZlmClgygT",
      { cache: "no-store" },
    );
    const data = await respon.json();

    return data;
  } catch (erorr) {
    console.log(erorr);
    return [];
  }
}

export default async function Home() {
  const { data } = await GetData();

  console.log(data);

  return (
    <main className="w-full">
      <Header />
      <div className="container max-w-4xl bg-transparent p-5">
        <h2 className="mb-7 bg-slate-50 bg-gradient-to-r from-emerald-300 to-sky-500 p-2 text-center text-3xl font-bold text-blue-50 md:text-4xl">
          List My Contact
        </h2>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <div>
            {data.map((dt) => {
              return (
                <CardContact
                  key={dt._id}
                  name={dt.name}
                  gender={dt.gender}
                  city={dt.city}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
