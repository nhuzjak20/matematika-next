import { matrix } from "mathjs";

export class GaussJordan {
  constructor(matrix) {
    this.Matrix = matrix;
  }
  PerformOperation() {
    let i,
      j,
      k = 0,
      c,
      flag = 0,
      m = 0;
    let pro = 0;
    for (i = 0; i < 3; i++) {
      if (a[i][i] == 0) {
        c = 1;
        while (i + c < n && a[i + c][i] == 0) c++;
        if (i + c == n) {
          flag = 1;
          break;
        }
        for (j = i, k = 0; k <= n; k++) {
          let temp = a[j][k];
          a[j][k] = a[j + c][k];
          a[j + c][k] = temp;
        }
      }
    }
    for (j = 0; j < n; j++) {
      // Excluding all i == j
      if (i != j) {
        // Converting Matrix to reduced row
        // echelon form(diagonal matrix)
        let p = a[j][i] / a[i][i];

        for (k = 0; k <= n; k++) a[j][k] = a[j][k] - a[i][k] * p;
      }
    }
    return flag;
  }

  PrintMatrix() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j <= 3; j++) console.log(this.Matrix[i][j]);
    }
  }
  PrintResult(flag) {
    document.write("Result is : ");

    if (flag == 2) document.write("Infinite Solutions Exists<br>");
    else if (flag == 3) document.write("No Solution Exists<br>");
    // Printing the solution by dividing constants by
    // their respective diagonal elements
    else {
      for (let i = 0; i < 3; i++)
        console.log(this.Matrix[i][3] / this.Matrix[i][i] + " ");
    }
  }
}
