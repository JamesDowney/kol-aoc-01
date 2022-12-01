import { bufferToFile, fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const input = fileToBuffer("input.txt").split(/\n/g);
  let count = 0;
  let solutionArray: number[] = [];
  input.forEach((element) => {
    if (element.charCodeAt(0) != 13) {
      count += parseInt(element);
    } else {
      solutionArray.push(count);
      count = 0;
    }
  });
  solutionArray.sort((a, b) => b - a);
  print("solution 1 is: " + solutionArray[0]);
  print("solution 2 is: " + (solutionArray[0] + solutionArray[1] + solutionArray[2]));
}
