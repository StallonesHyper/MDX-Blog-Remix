export default function Index() {
  return (
    <div
      style={{ fontFamily: "Poppins", lineHeight: "1.4", fontWeight: "600" }}
    >
      <h1>Stallone's Blog</h1>
    </div>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
    },
  ];
}
