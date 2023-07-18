export default function App() {
  return (
    <div>
      <Greeting />
      <p className="intro">
        I am rendered by <strong>React</strong>
      </p>
    </div>
  );
}

function Greeting() {
  const name = "Jane";
  return <h1 id="greeting">Hello {name}</h1>;
}
