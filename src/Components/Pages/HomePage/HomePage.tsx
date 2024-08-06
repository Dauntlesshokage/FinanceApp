import Hero from "../../Hero/Hero";

interface Props {}
export default function HomePage(props: Props): JSX.Element {
  return (
    <div>
      {" "}
      <Hero />{" "}
    </div>
  );
}
