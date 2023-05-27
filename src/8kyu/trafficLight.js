function updateLight(current) {
  if (current === "yellow") return "red";
  if (current === "red") return "green";
  if (current === "green") return "yellow";
}
