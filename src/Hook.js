import React, { Component } from 'react'

let currentInstance = null
let currentIndex = 0

export function useState(initVal) {
  const [val = initVal, setVal] = currentInstance.getState(currentIndex++) 
  return [val, setVal]
}

export function useEffect(fn) {
  currentInstance.pushEffect(fn)
}

export default class Hook extends Component {
  effects = []
  cleans = []
  state = {
    list: []
  }

  // === useSate start ===
  // 获取对应下标的state值及setter
  getState = index => {
    const { list } = this.state
    return [list[index], this.updateState(index)]
  }
  // 返回更新对应下标state的函数
  updateState = index => val => {
    const { list } = this.state
    const newList = list.concat()
    newList[index] = val
    this.setState({ list: newList })
  }
  // === useSate end ===

  // === useEffect start ===
  pushEffect = fn => {
    this.effects.push(fn)
  }
  performEffects = () => {
    let { effects, cleans } = this
    this.cleanUp()
    // 执行副作用队列，返回注销副作用的函数推入清除队列
    while(effects.length) {
      cleans.push(effects.shift()()) 
    }
  }
  cleanUp = () => {
    let { cleans } = this
    while(cleans.length) {
      const clean = cleans.shift()
      if (typeof clean === 'function') {
        clean()
      }
    }
  } 
  // 组件挂载及更新执行副作用操作
  componentDidMount() {
    this.performEffects()
  }
  componentDidUpdate() {
    this.performEffects()
  }
  // 卸载前清除已注册副作用操作
  componentWillUnmount() {
    this.cleanUp()
  }
  // === useEffect end ===

  render() {
    // 保存当前实例引用, 在children内调用userState时找到对应Hook实例的state
    currentInstance = this
    // 重置index保证useState按顺序获取正确state
    currentIndex = 0
    return this.props.children()
  }
}

export function hook(fn) {
  function HookWrapper(props) {
    // bind目的传递props
    return (<Hook>{ fn.bind(null, props) }</Hook>)
  }
  return HookWrapper
}