const {exec} = require('shelljs')

const isLinux = /linux/.test(process.platform)
const isMac = /darwin/.test(process.platform)
const isWin = /win/.test(process.platform)

function wifiSecurity() {
  let cmd = ''
  let security = ''

  if (isLinux) {
    // TODO
  } else if (isMac) {
    cmd = exec(`/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | grep "link auth" | awk {'print $3'}`, {silent:true})

    security = cmd.stdout.trim().toLowerCase()
  } else if (isWin) {
    // TODO
  }

  return security
}

module.exports = wifiSecurity
