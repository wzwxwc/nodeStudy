function test(fntest, param1, param2) {
    var result = fntest(param1, param2);
    console.log(result);
}

test((param1, param2) => param1 + param2, 1, 3);