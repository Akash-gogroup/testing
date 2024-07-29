"use client";
import { FloatingInput, Input, PasswordInput } from "gogroup-comp-lib";
export default function Home() {
  return (
    <main>
      <div>
        <Input placeholder="Enter" />
        <PasswordInput placeholder="Password" />
        <FloatingInput label="Username" />
      </div>
    </main>
  );
}
