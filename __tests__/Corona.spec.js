import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('created Action', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      coronaTotal: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it.skip('ページ読み込み時のアクション呼び出し', () => {
    expect(typeof actions.coronaTotal).toBe('function')
  })
})
