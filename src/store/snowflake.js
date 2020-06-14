const lasagnaEpoch = new Date("2020-01-01").getTime()

function generate() {
  const date = new Date().getTime()
  const now = date - lasagnaEpoch
  const snowflake = now.toString() + Math.floor(Math.random() * (9999999 - 1000000) + 1000000).toString()
  return snowflake
}

function toDate(snowflake) {
  const timestamp = parseInt(snowflake.slice(0, snowflake.length - 7))
  return new Date(timestamp + parseInt(lasagnaEpoch))
}

export default generate
export { toDate }