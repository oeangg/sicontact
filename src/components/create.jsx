export const CreateContact = () => {
  return (
    <form
      action=""
      className="container flex h-fit max-w-lg flex-col items-center gap-4 py-10"
    >
      <div className="flex w-full max-w-sm flex-col">
        <label htmlFor="nama">Name : </label>
        <input
          name="name"
          type="text"
          className="input-text"
          placeholder="Input nama"
        />
      </div>
      <div className="flex w-full max-w-sm flex-col">
        <label htmlFor="genders">Gender : </label>
        <select name="genders" id="genders">
          <option value="pria">Men</option>
          <option value="pria">Women</option>
        </select>
      </div>
      <div className="flex w-full max-w-sm flex-col">
        <label htmlFor="kota">City : </label>
        <input
          name="city"
          type="text"
          className="input-text"
          placeholder="Input kota"
        />
      </div>
      <div className="flex w-full max-w-sm flex-col">
        <label htmlFor="nohp">Phone Number : </label>
        <input
          name="phone"
          type="text"
          className="input-text"
          placeholder="Input no handphone"
        />
      </div>

      <div className="group w-full max-w-sm">
        <button className="duration-300 group-hover:bg-emerald-500">
          Add to Contact
        </button>
      </div>
    </form>
  );
};
