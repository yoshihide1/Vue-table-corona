import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '@/modules/test-storeModule.js'
import BarChart from '@/components/Chart/BarChart.vue'


const localVue = createLocalVue()
localVue.use(Vuex)

let store
let wrapper
let vm

describe('BarChart.vue', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      state
    })
    wrapper = shallowMount(BarChart, { store, localVue })
    vm = wrapper.vm
  })
  it('method-totalDataSet', () => {
    const totalData = vm.$store.state.ratio[0]
    const result = { "borderWidth": 0, "data": ["24306", "2375", "21540", "27", "391"], "label": "全国(累計)" }
    expect(vm.totalDataSet(totalData)).toStrictEqual(expect.objectContaining(result))
  })
  it('method-totalPrefDataSet', () => {
    const prefData = vm.$store.state.prefData
    const result = { "borderWidth": 0, "data": ["24046", "2278", "21378", "25", "391"], "label": "東京都(累計)" }
    expect(vm.totalPrefDataSet(prefData)).toStrictEqual(expect.objectContaining(result))
  })
  it('method-plus データが増えているか', () => {
    vm.datacollection.datasets = []
    expect(vm.datacollection.datasets.length).toBe(0)
    vm.plus([vm.$store.state.ratio[0]], true)
    expect(vm.datacollection.datasets.length).toBe(1)
  })
})