// This is the Link API
import Link from "next/link";
import { InputProps } from "./about";

const Index = () => (
  <div>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
