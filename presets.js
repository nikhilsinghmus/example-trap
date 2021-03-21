const fs = require('fs')
const path = require('path')
const { plugins } = require('fluid-music')

const zebraletteCPopFilename = path.join(__dirname, 'presets', 'zebralette-cpop.fxp')
const zebraletteCPopFxpB64 = fs.readFileSync(zebraletteCPopFilename).toString('base64')

const zebraletteCPop2Filename = path.join(__dirname, 'presets', 'zebralette-cpop2.fxp')
const zebraletteCPop2FxpB64 = fs.readFileSync(zebraletteCPop2Filename).toString('base64')

const zebraletteCMonoFilename = path.join(__dirname, 'presets', 'zebralette-cmono.FXP')
const zebraletteCMonoFxpB64 = fs.readFileSync(zebraletteCMonoFilename).toString('base64')

const dfHallLong = path.join(__dirname, 'presets', 'dfhall-long.FXP')
const dfHallLongFxpB64 = fs.readFileSync(dfHallLong)
const dfHallShort = path.join(__dirname, 'presets', 'dfhall-short.FXP')
const dfHallShortFxpB64 = fs.readFileSync(dfHallShort)

module.exports = {
  zebralette: {
    /** @param args {import('fluid-music').plugins.ZebraletteVst2Parameters} */
    cPop(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCPopFxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
    cPop2(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCPop2FxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
    cMono(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCMonoFxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
  },

  dragonflyHall: {
    long(params) {
      const plugin = new plugins.DragonflyHallVst2(params)
      plugin.vst2.presetBase64 = dfHallLongFxpB64
      return plugin
    },
    short(params) {
      const plugin  = new plugins.DragonflyHallVst2(params)
      plugin.vst2.presetBase64 = dfHallShortFxpB64
      return plugin
    },
  }
}