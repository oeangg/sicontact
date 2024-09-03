import dynamic from "next/dynamic";

export default async function GetData() {
  try {
    const respon = await fetch(
      "https://v1.appbackend.io/v1/rows/4CBZlmClgygT",
      { next: { revalidate: 0 } },
    );
    const data = await respon.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
