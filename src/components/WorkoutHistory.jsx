import React from 'react'
import { useSelector } from 'react-redux'

const WorkoutHistory = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className='w-full px-8 py-8 flex flex-col items-center justify-center gap-5'>
      <p className="heading text-2xl font-medium">Task History</p>
      {
        user && user.history.length
          ? user.history.map((item) => {
            return <table cellSpacing={2} className='border border-black border-solid w-[80%]'>
              <thead>
                <th className='border border-black border-solid p-2 w-[10%]'>
                  Task Id
                </th>
                <th className='border border-black border-solid p-2 w-[40%]'>
                  Task Name
                </th>
                <th className='border border-black border-solid p-2 w-[15%]'>
                  Date Added
                </th>
              </thead>
              <tbody>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.taskName}
                </td>
                <td>
                  {item.dateAdded}
                </td>
              </tbody>
            </table>
          })
          : <div>No task history to show!</div>
      }
    </div>
  )
}

export default WorkoutHistory
