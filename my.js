arrNum1 = 10;
arrNum2 = 10;
A = Array(arrNum1);
sum = 0;
for (i = 0; i < A.length; i++) {
    A[i] = Array(arrNum2);
    for (j = 0; j < A.length; j++) {
        A[i][j] = Math.floor(Math.random() * 41 - 20);
    }
}

rotateClockwise = function(matrix) {
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < i; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

function deleteColumnLessThan0() {
  N = A.length;
  num = A.length - 1;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
        sum += A[num - i][j];
    }
    if(sum<0) {
            A.splice(num - i ,1);
        }
    sum = 0;
  }
}

rotateClockwise(A);
deleteColumnLessThan0();

N = A.length;
for (j = 0; j < A[0].length; j++) {
  A[N + j] = [];
}

for (i = 0; i < N; i++) {
    for (j = 0; j < A[i].length; j++) {
    temp = A[i][j];
    A[N + j].push(temp);
  }
}

for (i = 0; i < N; i++) {
  A.splice(0,1);
}

console.log(A);