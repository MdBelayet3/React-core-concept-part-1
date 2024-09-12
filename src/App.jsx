import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors = ['shakib','raj','siam','rubel']
  const books = [
    {id: 1, name:'physics', price: 100},
    {id: 2, name:'Math', price: 110},
    {id: 3, name:'Chemistry', price: 120},
    {id: 4, name:'Biology', price: 130},
  ]
  const singers =[
    {id: 1,name: 'Dr. Mahfuz',age: 68},
    {id: 2,name: 'Eva Rahman',age: 38},
    {id: 3,name: 'Avash',age: 48},
    {id: 4,name: 'Pritom',age: 28},

  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {
        singers.map(singerObj => <Singer name={singerObj.name} age={singerObj.age}></Singer>)
      }
      <Actor name={"Bappa-raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
       task ="Learn React" 
       isDone = {true}></Todo>
      <Todo
       task ="Core concept"
       isDone ={false}></Todo>
      <Todo
       task ="Try JSX" 
       isDone ={true}></Todo> */}
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="Phone" price="15k"></Device>
      <Device name="Watch" price="3k"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="80"></Student>
      <Student></Student>
      <Developer languages = "c++, Html, CSS, JS, React"></Developer>
      <Worker name = "Lal mia" age = {34}></Worker>
      <Worker></Worker> */}
    </>
  )
}

function Device(props) {
  console.log(props);
  return <h3>This device : {props.name}. Price : {props.price}</h3>
}

function Person() {
  const age = 22;
  const money = 20;
  const person = { name: 'Mohammad', age: 45 }
  return (
    <h3>I am Belayet Hossain. I am {age + money} years old.</h3>
  )
}

// const {grade, score} = {grade: '7', score: '99'};
function Student({ grade = 10, score = 33 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h4>This is a student.</h4>
      <p>Class : {grade}</p>
      <p>Score : {score} </p>
    </div>
  )
}

function Developer({languages}) {
  const developerStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '30px'
  }
  return (
    <div style={developerStyle}>
      <h4>Debo Debo</h4>
      <p>Coding : {languages}</p>
    </div>
  )
}

function Worker({name =  'Belayet', age = 22}) {
  const workerStyle = {
    border: '2px solid red',
    padding: '10px',
    margin: '10px',
    'border-radius': '30px'
  }
  return (
    <div style={workerStyle}>
      <h3>Worker name : {name}</h3>
      <p>Age : {age}</p>
    </div>
  )
}

export default App