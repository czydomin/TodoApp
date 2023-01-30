function Button({ title, variant }: any) {
  return (
    <button className={variant === "red" ? " btn btn-red" : "btn btn-blue"}>
      {title}
    </button>
  );
}

export default Button;
