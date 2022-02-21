function chkPwdLgth(pwd) {
  if (pwd.length < 6) {
    return false
  }
  return true
}
function vfyStrength(pwd) {
  //let countCriteria = 0
  if (!chkPwdLgth(pwd)) {
    return 6 - pwd.length
  }
  else {
    return 0
  }
}
module.exports = {
  vfyStrength,
}
