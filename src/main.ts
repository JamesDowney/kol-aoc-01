import { bufferToFile, fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const input = fileToBuffer("input.txt").split(/\n/g);
  let count = 0;
  let solutionArray: number[] = [];
  input.forEach((element) => {
    if (element !== "" && element !== null && element !== undefined) {
      count += parseInt(element);
    } else {
      solutionArray.push(count);
      count = 0;
    }
  });
  const solution = solutionArray.sort((a, b) => b - a)[0] ?? 0;
  bufferToFile(solution.toString(), "output.txt");
}
