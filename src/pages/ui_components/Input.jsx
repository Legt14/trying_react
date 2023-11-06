const Input = ({ func, id, label, type }) => {
  return (
    <section className="flex flex-col group gap-2 w-full ">
      <label
        htmlFor={id}
        className="text-[#220d47] text-sm group-hover:text-purple-900 group-hover:scale-110 transition-all ease-linear duration-150 delay-75"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        onClick={(event) => func(event)}
        placeholder={label}
        className="w-64 outline-indigo-400 text-md rounded-lg bg-[#220d47]/30 pl-3 text-black placeholder:text-xs placeholder:text-black/25"
      />
    </section>
  );
};

export { Input };
