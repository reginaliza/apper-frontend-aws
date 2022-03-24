function transform(nums) {
  let n = nums.length;
  for (let i = 0; i< n; i++)
  nums[i] = nums[i] * nums[i];
  nums.sort((a, b) => a - b);
  return nums;
}  
  const nums = [4,9,5,3,8];
 
transform(nums);
