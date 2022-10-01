import React from "react";
interface calProps<T> {
  val1: T;
  val2: T;
}
const GenericsCal = <T extends {}>({ val1, val2 }: calProps<T>) => {
  const result = () => {
    if (typeof val1 === "number" && typeof val2 === "number")
      return val1 + val2;

    return val1 + " " + val2;
  };
  return <div>Result is : {result()}</div>;
};

export default GenericsCal;
