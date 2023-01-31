function Button({ title, variant, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={variant === "red" ? " btn btn-red" : "btn btn-blue"}
    >
      {title}
    </button>
  );
}

export default Button;
