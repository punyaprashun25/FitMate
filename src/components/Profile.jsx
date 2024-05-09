import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className='profile-box flex flex-col'>
      <div className="heading-box w-full h-20 flex shadow-lg justify-center items-center">
        <p className="text text-2xl font-semibold">My Profile</p>
      </div>
      <div className="information-box flex flex-col gap-3">
        <div className="details-box w-full px-16 py-4 flex flex-col gap-3">
          <p className="heading-label text-xl font-medium">Personal Details</p>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">User ID :</p>
            <p className="value">{user.id}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Name :</p>
            <p className="value">{user.personalDetails.name}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Email :</p>
            <p className="value">{user.personalDetails.email}</p>
          </div>
        </div>
        <div className="details-box w-full px-16 py-4 flex flex-col gap-3">
          <p className="heading-label text-xl font-medium">Fitness Details</p>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Target Goal:</p>
            <p className="value">{user.fitnessDetails.targetGoal}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">BMI Value:</p>
            <p className="value">{user.fitnessDetails.BmiValue}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Height [cm]:</p>
            <p className="value">{user.fitnessDetails.height}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Weight [kg]:</p>
            <p className="value">{user.fitnessDetails.weight}</p>
          </div>
        </div>
        <div className="details-box w-full px-16 py-4 flex flex-col gap-3">
          <p className="heading-label text-xl font-medium">User Background:</p>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Joined gym before :</p>
            <p className="value">{user.userBgDetails.isJoinedGym}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">How consistent were you in the previous gym [in Weeks] : </p>
            <p className="value">{user.userBgDetails.durationPrevOfGym}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Number of Exercise you do in a day : :</p>
            <p className="value">{user.fitnessDetails.exercisePerDay}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Are you a smoker :</p>
            <p className="value">{user.fitnessDetails.smoker ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
