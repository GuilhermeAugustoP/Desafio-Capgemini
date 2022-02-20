function chkPwdLgth(pwd) {
  if (pwd.length < 6) {
    return false
  }
  return true
}
// function hasNumber(pwd) {
//   if (pwd.match(/[0-9]+/)) {
//     return true
//   }
//   return false
// }
// function hasLowerCase(pwd) {
//   if (pwd.match(/[a-z]+/)) {
//     return true
//   }
//   return false
// }
// function hasUpperCase(pwd) {
//   if (pwd.match(/[A-Z]+/)) {
//     return true
//   }
//   return false
// }
// function hasSymbols(pwd) {
//   if (pwd.match(/[\!@#\$%\^&\*\(\)-\+]+/)) {
//   }
//   return false
// }
function vfyStrength(pwd) {
  //let countCriteria = 0
  if (!chkPwdLgth(pwd)) {
    return 6 - pwd.length
  }
  else {
    return 0
  }
  // if (!hasNumber) {
  //   countCriteria++
  // }
  // if (!hasLowerCase) {
  //   countCriteria++
  // }
  // if (!hasUpperCase) {
  //   countCriteria++
  // }
  // if (!hasSymbols) {
  //   countCriteria++
  // }
  // return countCriteria
}
module.exports = {
  vfyStrength,
}