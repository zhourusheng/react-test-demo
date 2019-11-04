import React, { useState, useEffect } from 'react'

function Counter() {

  /***
   * useState 是React 自带的一个Hook
   * 1. 调用 useState 方法时做了什么？ 
   * 2. useState 需要哪些参数？ useState() 方法里唯一需要的参数就是初始 state
   * 3. useState 返回值是什么？  返回值为：当前state 以及 更新state 的函数
   * **/ 

  // 使用数组结构赋值，声明一个叫 count 的 state 变量,  初始值为 0, 调用 setCount 方法来更新当前 count
  const [ count, setCount ] = useState(0)

  // 读取 state、更新 state、声明多个 state、Hook 使用规则

  const [ age, setAge ] = useState(25)

  const defaultHobby = [
    {
      name: 'football'
    },
    {
      name: 'swimming'
    },
    {
      name: 'running'
    }
  ]

  const [ hobbyList ] = useState(defaultHobby) 


  /***
   * 使用 useEffect 函数来代替声明周期函数
   * 
   * 
   * **/ 

  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
  })


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        setCount(count+1)
      }}>
        click add
      </button>
      <p>
        {age}
        <input value={age} type="text" onChange={(e) => {
          setAge(e.target.value)
        }} />
      </p>
      <ul>{
        hobbyList.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })
      }</ul>
    </div>
  )
}

export default Counter