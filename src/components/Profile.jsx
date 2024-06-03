import React from 'react'
import { useSelector } from 'react-redux'
import MultiSelectionBox from './MultiSelectionBox';

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className='profile-box flex flex-col mb-10'>
      <div className="heading-box w-full h-20 flex justify-center items-center">
        <p className="text text-2xl font-semibold">My Profile</p>
      </div>
      <div className="information-box flex flex-col gap-3 px-6">
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
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Age :</p>
            <p className="value">{user.personalDetails.age}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Email :</p>
            <p className="value">{user.personalDetails.gender}</p>
          </div>
        </div>
        <div className="details-box w-full px-16 py-4 flex flex-col gap-3">
          <p className="heading-label text-xl font-medium">Fitness Details</p>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Height [cm]:</p>
            <p className="value">{user.fitnessDetails.height}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Weight [kg]:</p>
            <p className="value">{user.fitnessDetails.weight}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">BMI Value:</p>
            <p className="value">{user.fitnessDetails.BmiValue}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Target Weight:</p>
            <p className="value">{user.fitnessDetails.targetWeight}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Weight goal (optional):</p>
            <p className="value">{user.fitnessDetails.weightGoal}</p>
          </div>
        </div>
        <div className="details-box w-full px-16 py-4 flex flex-col gap-3">
          <p className="heading-label text-xl font-medium">Activity Details</p>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Activity Level :</p>
            <p className="value">{user.activityDetails.activityLevel}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Exercise Frequency :</p>
            <p className="value">{user.activityDetails.exerciseFrequency}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Prefered Exercise :</p>
            <MultiSelectionBox list={user.activityDetails.preferedExercise} />
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Additional Comments :</p>
            <MultiSelectionBox list={user.activityDetails.addComments} />
          </div>
        </div>
        <div className="details-box w-full px-16 py-4 flex flex-col gap-3">
          <p className="heading-label text-xl font-medium">Diet Details</p>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Diet Preference :</p>
            <p className="value">{user.dietDetails.dietPreference}</p>
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Allergies :</p>
            <MultiSelectionBox list={user.dietDetails.Allergies} />
          </div>
          <div className="detail flex gap-4 text-lg ml-20">
            <p className="label font-medium">Restrictions :</p>
            <MultiSelectionBox list={user.dietDetails.restriction} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
