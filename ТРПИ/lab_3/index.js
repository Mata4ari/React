function createPhoneNum(numbers) {
    if (numbers.length !== 10) {
        ("Массив должен содержать 10 цифр");
    }
    var areaCode = numbers.slice(0, 3).join('');
    var firstPart = numbers.slice(3, 6).join('');
    var secondPart = numbers.slice(6).join('');
    return '(' + numbers.slice(0, 3).join('') + ') ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(6).join('');
}
console.log(createPhoneNum([4, 5, 6, 7, 8, 9, 0, 1, 2, 6]));
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number <= 0)
            return 0;
        var sum = 0;
        for (var i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0)
                sum += i;
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(10));
function reverse(nums, k) {
    var result = [];
    if (k >= nums.length)
        return result;
    var j = 0;
    for (var i = k + 1; i < nums.length; i++) {
        result[j] = nums[i];
        j++;
    }
    for (var i = 0; i <= k; i++) {
        result[j] = nums[i];
        j++;
    }
    return result;
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7], 8));
console.log(reverse([7, 1, 2, 3, 4, 5, 6], 1));
console.log(reverse([6, 7, 1, 2, 3, 4, 5], 2));
console.log(reverse([5, 6, 7, 1, 2, 3, 4], 3));
function Mediana(nums1, nums2) {
    var arr = [];
    arr = nums1.concat(nums2);
    arr.sort(function (a, b) { return a - b; });
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
    else {
        return arr[arr.length / 2 - 0.5];
    }
}
console.log(Mediana([1, 3], [2, 10]));
console.log(Mediana([1, 2], [3, 4]));
