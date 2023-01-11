import React, { useState } from 'react'
import List from './List';

function Home() {

  // use state 
  const [val, setVal] = useState(" ");


  const [data, setData] = useState([]);

  // handel inputs whenver there will be change in the input field it will target that value
  const handleInput = (event) => {
    setVal(event.target.value);
  }

  // whenver we click on the button it will take all prev value three dots is also called as array destructuring
  const Click = () => {
    setData((oldenItems) => {
      return [...oldenItems, val]

    });

    // here your input field will be empty
    setVal(" ")
  };


  // it targets on the id as it will be different for different items with on clicking method
  const deleteItems = (id) => {
    setData((oldenItems) => {
      // filter items take three things and here 2 things are used , 1st will give elemts and other will give the index number
      return oldenItems.filter((ele, index) => {
        // if your index number is not equal with id then it will be deleted
        return index !== id;
      });
    });

  }
  return (
    <>
      <div className="bg-gray-500 text-black-700 text-4xl p-2 text-end  flex">
        <img src="./image/to_do.png" alt="" className='my-5 h-12 w-12 ' />
        <h1 className='m-5'> ToDos List </h1>
      </div>
      <div className="w-screen h-screen bg-gray-700">
        <span className='flex-col text-2xl p-2 text-red-400'>* Make record of daily routine </span>
        <div className="max-w-sm flex m-auto">
          <textarea type="text" value={val} onChange={handleInput} className='w-80 h-16  border-2 border-red rounded-md p-3 my-5 mx-2 text-centere text-2xl flex jusitfy-center items-center  ' />
          <button className='w-40 h-12 px-4 text-2xl  my-7  text-center bg-blue-700 text-white border-4 border-solid border-black rounded-2xl outline-offset-2 hover:bg-blue-200' onClick={Click}>ADD</button>
        </div>
        {
          data.map((items, index) => {
            return (
              <>
                <List text={items} key={index} id={index} onSelect={deleteItems} />
              </>
            );
          })
        }
      </div>

    </>
  )
}

export default Home