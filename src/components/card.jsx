export const CardContact = ({ name, gender, city, phone }) => {
  return (
    <div className="flex h-48 w-fit flex-col items-center justify-center gap-2 rounded-lg border-4 border-emerald-100 bg-emerald-50 p-6 duration-300 hover:border-blue-200 hover:bg-blue-50">
      <img
        src={gender === "Men" ? "/user-boy.png" : "user-girl.png"}
        alt=""
        className="h-20 w-20 rounded-full border-4 border-white bg-blue-400 p-1"
      />
      <div>
        <h1 className="text-center text-base font-medium text-blue-700">
          {name}
        </h1>
        <h2 className="text-center text-base font-light text-emerald-700">
          {phone}
        </h2>
        <p className="text-center text-sm font-extralight text-blue-500">
          {city}
        </p>
      </div>
    </div>
  );
};
