/*
 * @Author: minghui.ding
 * @Date: 2020-12-05 13:43:22
 * @LastEditors: minghui.ding
 * @LastEditTime: 2020-12-12 13:09:08
 * @Description:
 */
let greet: string = 'hello world'
let str: string = 'str'
str.toLocaleLowerCase()
console.log(123)
type user = {
  name: Name
  age: Age
  gender: Gender
}
type Name = string
type Age = number
type Gender = '男' | '女'
let u: user
u = {
  name: '张禹林',
  age: 30,
  gender: '女'
}
function getUserInfo(name: Name, age: Age, gender: Gender): user[] {
  return [{ name, age, gender }]
}
console.log(getUserInfo('张禹林', 30, '女'))
function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else {
    throw new Error('无返回值')
  }
}
const res1 = combine(4, 4)
const res2 = combine('4', '4')
function sum(a: number, b: number, c?: number): number {
  if (!c) {
    return a + b
  }
  return a + b + c
}
console.log(sum(2, 4))
console.log(sum(2, 4, 5))
function sum1(a: number, b: number, c: number = 2): number {
  return a + b + c
}
console.log(sum1(2, 4))
console.log(sum1(2, 4, 5))
